<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Spend extends Model
{
    use HasFactory;

    protected $fillable = [
        'work_date',
        'spent_gas',
        'spent_electricity',
        'spent_gas_period_input',
        'spent_electricity_period_input',
        'business_id'
    ];

    public function business(): BelongsTo
    {
        return $this->belongsTo(Business::class);
    }
}
