<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FertilizerStatus extends Model
{
    use HasFactory;

    protected $fillable = [

        'fertilizer_id',
        'action',
        'lot_id',
        'volume',
        'price',
        'action_date'
    ];

    public function fertilizer(): BelongsTo
    {
        return $this->belongsTo(Fertilizer::class);
    }

}
