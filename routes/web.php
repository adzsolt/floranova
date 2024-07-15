<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SeasoneController;
use App\Http\Controllers\PeatController;
use App\Http\Controllers\PotController;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\HeatUnitController;
use App\Http\Controllers\ProductionUnitController;
use App\Http\Controllers\PlantController;
use App\Http\Controllers\FertilizerController;
use App\Http\Controllers\LotController;
use App\Http\Controllers\LotStatusController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\TemperatureController;
use App\Http\Controllers\SpendController;
use App\Http\Controllers\BusinessController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

Route::get('/', function () {
    return Inertia::render('index');
})->middleware(['auth', 'verified'])->name('dashboard');
/*Route::get('index', [\App\Http\Controllers\AdminCategoryController::class, 'index',]);*/
/*Route::get('/', function () {
    return Inertia::render('index');
})->name('dashboard');*/

Auth::routes();
//PEAT

Route::get("/get-peats", [PeatController::class, 'getPeats']);
Route::post("/get-peat", [PeatController::class, 'getPeat']);
Route::post("/create-peat", [PeatController::class, 'store']);
Route::post("/delete-peat", [PeatController::class, 'delete']);
Route::post("/update-peat", [PeatController::class, 'update']);


//POT

Route::get("/get-pots", [PotController::class, 'getPots']);
Route::post("/get-pot", [PotController::class, 'getPot']);
Route::post("/create-pot", [PotController::class, 'store']);
Route::post("/delete-pot", [PotController::class, 'delete']);
Route::post("/update-pot", [PotController::class, 'update']);


//PLANT

Route::get("/get-plants", [PlantController::class, 'getPlants']);
Route::post("/get-plant", [PlantController::class, 'getPlant']);
Route::post("/create-plant", [PlantController::class, 'store']);
Route::post("/delete-plant", [PlantController::class, 'delete']);
Route::post("/update-plant", [PlantController::class, 'update']);


//FERTILIZER
Route::get("/get-fertilizers", [FertilizerController::class, 'getFertilizers']);
Route::post("/get-fertilizer", [FertilizerController::class, 'getFertilizer']);
Route::post("/create-fertilizer", [FertilizerController::class, 'store']);
Route::post("/delete-fertilizer", [FertilizerController::class, 'delete']);
Route::post("/update-fertilizer", [FertilizerController::class, 'update']);
Route::post("/add-fertilizer-status", [FertilizerController::class, 'addStatus']);
Route::post("/delete-fertilizer-status", [FertilizerController::class, 'deleteStatus']);


//SEASONS
Route::get("/get-seasons", [SeasoneController::class, 'getSeasons']);
Route::post("/get-season", [SeasoneController::class, 'getSeason']);
Route::post("/create-season", [SeasoneController::class, 'store']);
Route::post("/delete-season", [SeasoneController::class, 'delete']);
Route::post("/update-season", [SeasoneController::class, 'update']);



//LAYOUTS

Route::get("/get-layouts", [LayoutController::class, 'getLayouts']);
Route::post("/get-layout", [LayoutController::class, 'getLayout']);
Route::post("/create-layout", [LayoutController::class, 'store']);
Route::post("/delete-layout", [LayoutController::class, 'delete']);
Route::post("/update-layout", [LayoutController::class, 'update']);

//Business

Route::get("/get-businesses", [BusinessController::class, 'getBusinesses']);
Route::post("/get-business", [BusinessController::class, 'getBusiness']);
Route::post("/create-business", [BusinessController::class, 'store']);
Route::post("/delete-business", [BusinessController::class, 'delete']);
Route::post("/update-business", [BusinessController::class, 'update']);


//HEAT UNIT

Route::get("/get-heat-units", [HeatUnitController::class, 'getHeatUnits']);
Route::post("/get-heat-unit", [HeatUnitController::class, 'getHeatUnit']);
Route::post("/create-heat-unit", [HeatUnitController::class, 'store']);
Route::post("/delete-heat-unit", [HeatUnitController::class, 'delete']);
Route::post("/update-heat-unit", [HeatUnitController::class, 'update']);


//PRODUCTION UNIT

Route::get("/get-production-units", [ProductionUnitController::class, 'getProductionUnits']);
Route::post("/get-production-unit", [ProductionUnitController::class, 'getProductionUnit']);
Route::post("/create-production-unit", [ProductionUnitController::class, 'store']);
Route::post("/delete-production-unit", [ProductionUnitController::class, 'delete']);
Route::post("/update-production-unit", [ProductionUnitController::class, 'update']);



//LOT


Route::get("/get-lots", [LotController::class, 'getLots']);
Route::post("/create-lot", [LotController::class, 'store']);
Route::post("/get-lot-form-data", [LotController::class, 'getLotFormData']);
Route::post("/delete-lot", [LotController::class, 'delete']);
Route::post("/get-price", [LotController::class, 'getPrice']);

//LOT STATUS

Route::post("/update-lot-status", [LotStatusController::class, 'updateLotStatus']);
Route::post("/create-lot-status", [LotStatusController::class, 'createLotStatus']);


//USERS

Route::get('/get-users', [UserController::class, 'getUsers']);
Route::post('/get-user',[UserController::class, 'getUser']);
Route::post('/create-user',[UserController::class, 'store']);
Route::post('/delete-user',[UserController::class, 'delete']);
Route::post('/update-user',[UserController::class, 'update']);


//WORK

Route::post('/get-works',[WorkController::class, 'getWorksSpend']);
Route::post('/store-works',[WorkController::class, 'addPeriodInput']);
Route::post('/delete-work',[WorkController::class, 'deleteWork']);

//TEMPERATURE

Route::post('/get-temperatures',[TemperatureController::class, 'getTemperatures']);
Route::post('/get-temperature',[TemperatureController::class, 'getTemperature']);
Route::post('/store-temperature',[TemperatureController::class, 'addPeriodInput']);
Route::post('/delete-temperature',[TemperatureController::class, 'deleteTemperature']);


//SPEND

Route::post('/get-spends',[SpendController::class, 'getSpends']);
Route::post('/store-spend',[SpendController::class, 'addSpendPeriodInput']);
Route::post('/delete-spend',[SpendController::class, 'deleteSpend']);

//ROLES
Route::get('/get-roles',[RoleController::class, 'getRoles']);   //input:-, output: roles
Route::post('/get-user-role',[RoleController::class, 'getUserRole']);  //input:user_id, output: string:success/error + role
Route::post('/add-role',[RoleController::class, 'addRole']);  //input:user_id,role_id output: string:success/error
Route::post('/revoke-role',[RoleController::class, 'revokeRole']);  //input:user_id,role_id output: string:success/error
Route::post('/update-role',[RoleController::class, 'updateRole']);  //input:user_id,role_id_remove, role_id_add output: string:success/error

