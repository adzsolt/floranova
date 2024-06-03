<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Temperature extends Model
{
    use HasFactory;

    protected $fillable = [
        'work_date',
        'heat_unit_id',
        'daytime_temperature',
        'night_temperature',
        'input'

    ];

    public function heatUnit(): BelongsTo
    {
        return $this->belongsTo(HeatUnit::class);
    }
}
