<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LotStatus extends Model
{
    use HasFactory;

    protected $fillable = [

        'start_date',
        'production_unit_id',
        'layout_id',
        'lot_id'
    ];


    public function lot(): BelongsTo
    {
        return $this->belongsTo(Lot::class);
    }

    public function productionUnit(): BelongsTo
    {
        return $this->belongsTo(ProductionUnit::class);
    }

    public function layout(): BelongsTo
    {
        return $this->belongsTo(layout::class);
    }

}
