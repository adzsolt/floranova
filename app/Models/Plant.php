<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Plant extends Model
{
    use HasFactory;

    protected $fillable = [

        'name',
        'color',
        'price'
    ];

    public function lots(): HasMany
    {
        return $this->hasMany(Lot::class);
    }
}
