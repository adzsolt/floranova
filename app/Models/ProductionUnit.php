<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductionUnit extends Model
{
    use HasFactory;

    protected $fillable = [

        'name',
        'length',
        'width',
        'heat_unit_id'

    ];

    public function heatUnit(): BelongsTo
    {
        return $this->belongsTo(HeatUnit::class);
    }

    public function lots(): HasMany
    {
        return $this->hasMany(Lot::class);
    }

    public function lotStatuses(): HasMany
    {
        return $this->hasMany(LotStatus::class);
    }
}
