<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Business extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',

    ];


    public function heatUnits(): HasMany
    {
        return $this->hasMany(HeatUnit::class);
    }

    public function spends(): HasMany
    {
        return $this->hasMany(Spend::class);
    }

    public function works(): HasMany
    {
        return $this->hasMany(Work::class);
    }
}
