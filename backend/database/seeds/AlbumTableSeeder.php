<?php

use App\Models\Album;
use App\Models\Genre;
use Illuminate\Database\Seeder;

class AlbumTableSeeder extends Seeder
{
    public function run()
    {

        Album::create([
            'name' => 'A Kind of Magic',
            'artist' => 'Queen',
            'released' => 1986,
            'genre' => Genre::where('name', 'Rock')->first()->id,
        ]);

        Album::create([
            'name' => 'Oceanic',
            'artist' => 'Vangelis',
            'released' => 1996,
            'genre' => Genre::where('name', 'Electronic')->first()->id,
        ]);

        Album::create([
            'name' => 'We Are All We Need',
            'artist' => 'Above & Beyond',
            'released' => 2015,
            'genre' => Genre::where('name', 'Dance')->first()->id,
        ]);
    }
}
