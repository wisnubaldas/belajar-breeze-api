<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageMenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $filePath = database_path('seeders/menu_data.csv');
        
        $file = fopen($filePath, 'r');
        $data = [];
        $header = fgetcsv($file);
        while ($row = fgetcsv($file)) {
            $data = array_combine($header, $row);
            \App\Models\PageMenu::create($data);
        }
        fclose($file);
    }
}
