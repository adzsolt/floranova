<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pot extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'size',
        'price',

    ];

    public function lots(): HasMany
    {
        return $this->hasMany(Lot::class);
    }
}
