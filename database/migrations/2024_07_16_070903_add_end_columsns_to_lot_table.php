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
        Schema::table('lots', function (Blueprint $table) {
            $table->integer('final_quantity')->after('quantity')->nullable();
            $table->integer('final_price')->after('end_date')->nullable();
            $table->integer('group_id')->after('fertilizer_volume')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lot', function (Blueprint $table) {
            $table->dropColumn('final_quantity');
            $table->dropColumn('final_price');
            $table->dropColumn('group_id');
        });
    }
};
