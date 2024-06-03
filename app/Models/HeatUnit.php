<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class HeatUnit extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function productionUnits(): HasMany
    {
        return $this->hasMany(ProductionUnit::class);
    }

    public function temperatures(): HasMany
    {
        return $this->hasMany(Temperature::class);
    }

}
