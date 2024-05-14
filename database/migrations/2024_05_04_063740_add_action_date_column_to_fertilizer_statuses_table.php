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
        Schema::table('fertilizer_statuses', function (Blueprint $table) {
            $table->date('action_date')->after('price')->default('2024-01-01');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('fertilizer_statuses', function (Blueprint $table) {
            $table->dropColumn(['action_date']);
        });
    }
};
