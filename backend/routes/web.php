<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use App\Models\Album;
use App\Models\Genre;
use App\Models\Song;

$router->get('/', function () use ($router) {
    $output = '<h1>Available routes:</h1>';
    foreach ($router->getRoutes() as $route) {
        $output .= $route['uri'] . '<br />';
    }
    return $output;
});

$router->get('/albums', function () {
    // All albums.
    return response()->json(Album::with('genre')->get(), 200, [], JSON_NUMERIC_CHECK);
});

$router->get('/album/{albumId}', function ($albumId) {
    // Single album.
    return response()->json(Album::with('genre')->with('songs')->find($albumId), 200, [], JSON_NUMERIC_CHECK);
});

$router->get('/album/{albumId}/songs', function ($albumId) {
    // All songs for an album.
    return response()->json(Song::where('album_id', $albumId)->orderBy('track')->get(), 200, [], JSON_NUMERIC_CHECK);
});

$router->get('/genres', function () {
    // All genres.
    return response()->json(Genre::all(), 200, [], JSON_NUMERIC_CHECK);
});

$router->get('/genre/{genre}', function ($genre) {
    // Single genre.
    return response()->json(Genre::where('name', $genre)->first(), 200, [], JSON_NUMERIC_CHECK);
});

$router->get('/songs', function () {
    // All songs.
    return response()->json(Song::all(), 200, [], JSON_NUMERIC_CHECK);
});

$router->get('/song/{songId}', function ($songId) {
    // Single song.
    return response()->json(Song::find($songId), 200, [], JSON_NUMERIC_CHECK);
});
