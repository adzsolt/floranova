<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\HeatUnit;
use App\Models\Lot;
use App\Models\ProductionUnit;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getBasicData()
    {
        $businesses = Business::all();

        $data['businesses'] = $businesses;

        $data['heat_units'] = [];

        if (count($businesses)) {

            $data['heat_units'] = $businesses[0]->heatUnits;
        }

        $data['production_units'] = [];

        if (count($data['heat_units'])) {
            $data['production_units'] = $data['heat_units'][0]->productionUnits;
        }

        return response()->json($data);
    }

    public function getHeatUnits(Request $request)
    {
        $data = $request->all();
        $heat_units = [];
        $business = Business::where('id', $data['id'])->first();
        //dd($business);
        if (isset($business)) {
            $heat_units = $business->heatUnits;
        }
        return response()->json($heat_units);
    }

    public function getProductionUnits(Request $request)
    {
        $data = $request->all();
        $production_units = [];
        $heat_unit = HeatUnit::where('id', $data['id'])->first();
        //dd($business);
        if (isset($heat_unit)) {
            $production_units = $heat_unit->productionUnits;
        }
        return response()->json($production_units);
    }

    public function dashboardInfo(Request $request)
    {
        $data = $request->all();
        $response = [];
        //dd($data);

        $business = Business::where('id', $data['business_id'])->first();
        $heat_unit = HeatUnit::where('id', $data['heat_unit_id'])->first();
        $production_unit = ProductionUnit::where('id', $data['production_unit_id'])->first();

        $start = $data['start'];
        $end = $data['end'];

        $response['business_size'] = $this->getBusinessSize($business->id);
        $response['heat_unit_size'] = $this->getHeatUnitSize($heat_unit->id);
        $response['production_unit_size'] = $this->getProductionUnitSize($production_unit->id);

        $response['business_coverage'] = $this->getBusinessCoverage($business->id, $start, $end);
        $response['heat_unit_coverage'] = $this->getHeatUnitCoverage($heat_unit->id, $start, $end);
        $response['production_unit_coverage'] = $this->getProductionUnitCoverage($production_unit->id, $start, $end);

        $response['business_percentage'] = floatval(number_format($response['business_coverage'] / $response['business_size'] * 100, 2, '.', ''));
        $response['heat_unit_percentage'] = floatval(number_format($response['heat_unit_coverage'] / $response['heat_unit_size'] * 100, 2, '.', ''));
        $response['production_unit_percentage'] = floatval(number_format($response['production_unit_coverage'] / $response['production_unit_size'] * 100, 2, '.', ''));

        $response['spend_info'] = $this->getSpendInfo($business->id, $start, $end);

        $earning = $this->getEarning($business->id, $start, $end);

        $response['profit'] = floatval(number_format( $earning - $response['spend_info']['total'], 2, '.', ''));

        return response()->json($response);
    }

    public function getBusinessSize($business_id)
    {
        $total_business_area = 0;
        $heat_units = HeatUnit::where('business_id', $business_id)->get();


        foreach ($heat_units as $heat_unit) {
            $total_business_area = $total_business_area + (new LotController)->getHeatUnitArea($heat_unit);
        }

        return $total_business_area;
    }

    public function getHeatUnitSize($heat_unit_id)
    {

        $heat_unit = HeatUnit::where('id', $heat_unit_id)->first();

        $total_heat_unit_area = (new LotController)->getHeatUnitArea($heat_unit);


        return $total_heat_unit_area;
    }

    public function getProductionUnitSize($production_unit_id)
    {

        $production_unit = ProductionUnit::where('id', $production_unit_id)->first();

        $total_production_unit_area = $production_unit->width * $production_unit->length;


        return $total_production_unit_area;
    }

    public function getBusinessCoverage($business_id, $start, $end)
    {
        $period = CarbonPeriod::create($start, $end);

        $business_coverage_sum = 0;
        $loop = 0;

        foreach ($period as $date) {

            $current_business_coverage = (new LotController)->getTotalUsedSpace($business_id, $date);

            $business_coverage_sum = $business_coverage_sum + $current_business_coverage['total_used_space'];

            $loop++;

        }

        return floatval(number_format($business_coverage_sum / $loop, 2, '.', ''));
    }

    public function getHeatUnitCoverage($heat_unit_id, $start, $end)
    {

        $period = CarbonPeriod::create($start, $end);

        $heat_unit_coverage_sum = 0;
        $loop = 0;


        foreach ($period as $date) {

            $current_heat_unit_coverage = (new LotController)->getTotalUsedSpaceHeatUnit($heat_unit_id, $date);

            $heat_unit_coverage_sum = $heat_unit_coverage_sum + $current_heat_unit_coverage['total_used_space'];

            $loop++;

        }


        return floatval(number_format($heat_unit_coverage_sum / $loop, 2, '.', ''));
    }

    public function getProductionUnitCoverage($production_unit_id, $start, $end)
    {

        $period = CarbonPeriod::create($start, $end);

        $production_unit_coverage_sum = 0;
        $loop = 0;


        foreach ($period as $date) {

            $current_production_unit_coverage = (new LotController)->getTotalUsedSpaceProductionUnit($production_unit_id, $date);

            $production_unit_coverage_sum = $production_unit_coverage_sum + $current_production_unit_coverage['total_used_space'];

            $loop++;
        }
        return floatval(number_format($production_unit_coverage_sum / $loop, 2, '.', ''));
    }

    public function getSpendInfo($business_id, $start, $end)
    {

        $spend_info_response = [];

        $spend_info_response['plant'] = 0;
        $spend_info_response['peat'] = 0;
        $spend_info_response['pot'] = 0;
        $spend_info_response ['fertilizer'] = 0;
        $spend_info_response['work'] = 0;
        $spend_info_response['spend'] = 0;
        $spend_info_response['total'] = 0;
        $spend_info_response['lots'] = [];


        $lots = Lot::whereHas('productionUnit', function ($q) use ($business_id) {
            $q->whereHas('heatUnit', function ($p) use ($business_id) {
                $p->whereHas('business', function ($r) use ($business_id) {
                    return $r->where('id', $business_id);
                });
            });
        })->get();

        $start_date = Carbon::parse($start);
        $end_date = Carbon::parse($end);

        $lc = new LotController();

        foreach ($lots as $lot) {

            $lot_start_date = Carbon::parse($lot->start_date);
            if ($lot_start_date >= $start_date and $lot_start_date <= $end_date) {

                $request = new \Illuminate\Http\Request();

                $request->replace(['lot_id' => $lot->id, 'start_date' => $start_date, 'end_date' => $end_date]);

                $current_lot_prices = $lc->getPrice($request)->getData();




                $spend_info_response['plant'] = floatval(number_format( $spend_info_response['plant'] + $current_lot_prices->plant * $current_lot_prices->lot_quantity, 2, '.', ''));
                $spend_info_response['peat'] = floatval(number_format( $spend_info_response['peat'] + $current_lot_prices->peat_price * $current_lot_prices->lot_quantity, 2, '.', ''));
                $spend_info_response['pot'] = floatval(number_format( $spend_info_response['pot'] + $current_lot_prices->pot_price * $current_lot_prices->lot_quantity, 2, '.', ''));
                $spend_info_response ['fertilizer'] =  floatval(number_format( $spend_info_response['fertilizer'] + $current_lot_prices->fertilizer_price * $current_lot_prices->lot_quantity, 2, '.', ''));
                $spend_info_response['work'] = floatval(number_format( $spend_info_response['work'] + $current_lot_prices->work_price * $current_lot_prices->lot_quantity, 2, '.', ''));
                $spend_info_response['spend'] = floatval(number_format( $spend_info_response['spend'] + $current_lot_prices->spend_price * $current_lot_prices->lot_quantity, 2, '.', ''));
                $spend_info_response['total'] = floatval(number_format( $spend_info_response['total'] + $current_lot_prices->total_price * $current_lot_prices->lot_quantity, 2, '.', ''));
                $spend_info_response['lots'][] = $current_lot_prices->lot_name;

                //dd($current_lot_prices, $spend_info_response);
            }

        }


        //dd($request->foo);
        return $spend_info_response;
    }


    public function getEarning($business_id, $start, $end)
    {

        $earning = 0;

        $lots = Lot::whereHas('productionUnit', function ($q) use ($business_id) {
            $q->whereHas('heatUnit', function ($p) use ($business_id) {
                $p->whereHas('business', function ($r) use ($business_id) {
                    return $r->where('id', $business_id);
                });
            });
        })->get();

        $start_date = Carbon::parse($start);
        $end_date = Carbon::parse($end);


        foreach ($lots as $lot) {

            $lot_end_date = Carbon::parse($lot->end_date);
            if ($lot_end_date >= $start_date and $lot_end_date <= $end_date) {

                $earning = $earning + $lot->final_quantity * $lot->final_price;
            }
        }

        return $earning;

    }
}
