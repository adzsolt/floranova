<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class HeatUnit extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'business_id'
    ];


    public function business(): BelongsTo
    {
        return $this->belongsTo(Business::class);
    }


    public function productionUnits(): HasMany
    {
        return $this->hasMany(ProductionUnit::class);
    }

    public function temperatures(): HasMany
    {
        return $this->hasMany(Temperature::class);
    }

}
