<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lots', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('start_date');
            $table->float('quantity');
            $table->date('end_date')->nullable();
            $table->integer('peat_id');
            $table->integer('pot_id');
            $table->integer('plant_id');
            $table->integer('season_id');
            $table->integer('production_unit_id');
            $table->integer('layout_id');
            $table->integer('fertilizer_id');
            $table->float('fertilizer_volume');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lots');
    }
};
