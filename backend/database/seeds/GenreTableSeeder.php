<?php

use App\Models\Genre;
use Illuminate\Database\Seeder;

class GenreTableSeeder extends Seeder
{
    public function run()
    {
        Genre::create([
            'name' => 'Dance',
        ]);

        Genre::create([
            'name' => 'Electronic',
        ]);

        Genre::create([
            'name' => 'Rock',
        ]);
    }
}
