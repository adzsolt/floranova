<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Layout extends Model
{
    use HasFactory;

    protected $fillable = [

        'name',
        'unit_pot_m2'

    ];

    public function lots(): HasMany
    {
        return $this->hasMany(Lot::class);
    }
    public function lotstatuses(): HasMany
    {
        return $this->hasMany(LotStatus::class);
    }
}
