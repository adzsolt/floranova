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
            $table->float('final_price')->after('end_date')->nullable();
            $table->float('final_price_with_loss')->after('final_price')->nullable();
            $table->integer('group_id')->after('fertilizer_volume')->nullable();
            $table->float('store_price')->after('final_price_with_loss')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lots', function (Blueprint $table) {
            $table->dropColumn('final_quantity');
            $table->dropColumn('final_price');
            $table->dropColumn('final_price_with_loss');
            $table->dropColumn('group_id');
            $table->dropColumn('store_price');
        });
    }
};
