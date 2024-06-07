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
        Schema::table('temperatures', function (Blueprint $table) {
            $table->float('outside_temperature')->after('heat_unit_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('temperatures', function (Blueprint $table) {
            $table->dropColumn('outside_temperature');
        });
    }
};
