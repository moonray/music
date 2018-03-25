<?php

use App\Models\Album;
use App\Models\Song;
use Illuminate\Database\Seeder;

class SongTableSeeder extends Seeder
{
    public function run()
    {
        $albumId = Album::where('name', 'A Kind of Magic')->where('artist', 'Queen')->first()->id;
        Song::create([
            'track' => 1,
            'name' => 'One Vision',
            'artist' => 'Queen',
            'length' => '5:10',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 2,
            'name' => 'A Kind of Magic',
            'artist' => 'Queen',
            'length' => '4:24',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 3,
            'name' => 'One Year of Love',
            'artist' => 'Queen',
            'length' => '4:26',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 4,
            'name' => 'Pain Is So Close to Pleasure',
            'artist' => 'Queen',
            'length' => '4:21',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 5,
            'name' => 'Friends Will Be Friends',
            'artist' => 'Queen',
            'length' => '4:07',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 6,
            'name' => 'Who Wants to Live Forever',
            'artist' => 'Queen',
            'length' => '5:15',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 7,
            'name' => 'Gimme the Prize (Kurgan\'s Theme)',
            'artist' => 'Queen',
            'length' => '4:34',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 8,
            'name' => 'Don\'t Lose Your Head',
            'artist' => 'Queen',
            'length' => '4:38',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 9,
            'name' => 'Princes of the Universe',
            'artist' => 'Queen',
            'length' => '3:32',
            'album' => $albumId,
        ]);

        $albumId = Album::where('name', 'Oceanic')->where('artist', 'Vangelis')->first()->id;
        Song::create([
            'track' => 1,
            'name' => 'Bon Voyage',
            'artist' => 'Vangelis',
            'length' => '2:33',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 2,
            'name' => 'Sirens\' Whispering',
            'artist' => 'Vangelis',
            'length' => '7:59',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 3,
            'name' => 'Dreams of Surf',
            'artist' => 'Vangelis',
            'length' => '2:43',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 4,
            'name' => 'Spanish Harbour',
            'artist' => 'Vangelis',
            'length' => '6:42',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 5,
            'name' => 'Islands of the Orient',
            'artist' => 'Vangelis',
            'length' => '7:24',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 6,
            'name' => 'Fields of Coral',
            'artist' => 'Vangelis',
            'length' => '7:44',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 7,
            'name' => 'Aquatic Dance',
            'artist' => 'Vangelis',
            'length' => '3:44',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 8,
            'name' => 'Memories of Blue',
            'artist' => 'Vangelis',
            'length' => '5:40',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 9,
            'name' => 'Songs of the Seas',
            'artist' => 'Vangelis',
            'length' => '6:12',
            'album' => $albumId,
        ]);

        $albumId = Album::where('name', 'We Are All We Need')->where('artist', 'Above & Beyond')->first()->id;
        Song::create([
            'track' => 1,
            'name' => 'Quieter Is Louder',
            'artist' => 'Above & Beyond',
            'length' => '1:57',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 2,
            'name' => 'We\'re All We Need (featuring Zoë Johnston)',
            'artist' => 'Above & Beyond',
            'length' => '4:22',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 3,
            'name' => 'Blue Sky Action (featuring Alex Vargas)',
            'artist' => 'Above & Beyond',
            'length' => '4:44',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 4,
            'name' => 'Peace of Mind (featuring Zoë Johnston)',
            'artist' => 'Above & Beyond',
            'length' => '4:31',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 5,
            'name' => 'Counting Down the Days (featuring Gemma Hayes)',
            'artist' => 'Above & Beyond',
            'length' => '4:48',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 6,
            'name' => 'Sticky Fingers (featuring Alex Vargas)',
            'artist' => 'Above & Beyond',
            'length' => '3:29',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 7,
            'name' => 'Hello',
            'artist' => 'Above & Beyond',
            'length' => '4:05',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 8,
            'name' => 'Little Something (featuring Justine Suissa)',
            'artist' => 'Above & Beyond',
            'length' => '5:11',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 9,
            'name' => 'All Over the World (featuring Alex Vargas)',
            'artist' => 'Above & Beyond',
            'length' => '4:46',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 10,
            'name' => 'Fly to New York (featuring Zoë Johnston)',
            'artist' => 'Above & Beyond',
            'length' => '5:21',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 11,
            'name' => 'Making Plans (featuring Alex Vargas)',
            'artist' => 'Above & Beyond',
            'length' => '5:04',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 12,
            'name' => 'Out of Time',
            'artist' => 'Above & Beyond',
            'length' => '4:12',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 13,
            'name' => 'Excuses',
            'artist' => 'Above & Beyond',
            'length' => '5:45',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 14,
            'name' => 'Save Me (featuring Zoë Johnston)',
            'artist' => 'Above & Beyond',
            'length' => '4:55',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 15,
            'name' => 'Sink the Lighthouse (featuring Alex Vargas)',
            'artist' => 'Above & Beyond',
            'length' => '4:12',
            'album' => $albumId,
        ]);
        Song::create([
            'track' => 16,
            'name' => 'Treasure (featuring Zoë Johnston)',
            'artist' => 'Above & Beyond',
            'length' => '3:46',
            'album' => $albumId,
        ]);
    }
}
