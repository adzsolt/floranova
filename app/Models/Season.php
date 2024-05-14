<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Season extends Model
{
    use HasFactory;


    protected $fillable = [

        'name',
        'start_date',
        'end_date'

    ];

    public function lots(): HasMany
    {
        return $this->hasMany(Lot::class);
    }

}
