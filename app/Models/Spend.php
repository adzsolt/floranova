<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spend extends Model
{
    use HasFactory;

    protected $fillable = [
        'work_date',
        'spent_gas',
        'spent_electricity',
        'spent_gas_period_input',
        'spent_electricity_period_input',

    ];
}
