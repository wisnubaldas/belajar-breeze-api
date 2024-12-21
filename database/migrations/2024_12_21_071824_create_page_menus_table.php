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
        Schema::create('page_menus', function (Blueprint $table) {
            $table->id();
            $table->string('parent_id');
            $table->string('name');
            $table->string('icon')->nullable();
            $table->string('label')->nullable();
            $table->string('badge')->nullable();
            $table->boolean('active')->default(false);
            $table->string('right_icon')->nullable();
            $table->text('svg_icon')->nullable();
            $table->text('remark')->nullable();
            $table->string('path')->default('javascript:;');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_menus');
    }
};
