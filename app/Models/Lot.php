<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lot extends Model
{
    use HasFactory;

    protected $fillable = [

        'name',
        'quantity',
        'start_date',
        'end_date',
        'plant_price',
        'peat_id',
        'pot_id',
        'plant_id',
        'season_id',
        'production_unit_id',
        'layout_id',
        'fertilizer_id',
        'fertilizer_volume'
    ];

    public function peat(): BelongsTo
    {
        return $this->belongsTo(Peat::class);
    }

    public function pot(): BelongsTo
    {
        return $this->belongsTo(Pot::class);
    }

    public function plant(): BelongsTo
    {
        return $this->belongsTo(Plant::class);
    }

    public function season(): BelongsTo
    {
        return $this->belongsTo(Season::class);
    }

    public function productionUnit(): BelongsTo
    {
        return $this->belongsTo(ProductionUnit::class);
    }

    public function layout(): BelongsTo
    {
        return $this->belongsTo(Layout::class);
    }

    public function fertilizer(): BelongsTo
    {
        return $this->belongsTo(Fertilizer::class);
    }

    public function statuses(): HasMany
    {
        return $this->hasMany(LotStatus::class)->orderBy('start_date', 'desc');
    }
}
