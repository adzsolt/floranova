<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
}
