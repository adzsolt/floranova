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
        Schema::table('spends', function (Blueprint $table) {
            $table->integer('business_id')->after('spent_electricity_period_input');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('spends', function (Blueprint $table) {
            $table->dropColumn('business_id');
        });
    }
};
