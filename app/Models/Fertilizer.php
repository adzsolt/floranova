<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Fertilizer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'using',
        'provision',
        'price'
    ];

    public function fertilizer_statuses(): HasMany
    {
        return $this->hasMany(FertilizerStatus::class)->orderBy('action_date', 'desc');
    }

    public function lots(): HasMany
    {
        return $this->hasMany(Lot::class);
    }




}
