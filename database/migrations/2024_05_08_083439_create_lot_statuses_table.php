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
        Schema::create('lot_statuses', function (Blueprint $table) {
            $table->id();
            $table->date('start_date');
            $table->integer('production_unit_id');
            $table->integer('layout_id');
            $table->integer('lot_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lot_statuses');
    }
};
