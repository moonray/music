<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Models\Genre::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->title,
    ];
});

$factory->define(App\Models\Album::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->title,
        'artist' => $faker->name,
        'released' => (int) $faker->year,
        'genre' => $faker->randomDigitNotNull,
    ];
});

$factory->define(App\Models\Song::class, function (Faker\Generator $faker) {
    return [
        'track' => $faker->unique()->numberBetween(1, 19),
        'name' => $faker->title,
        'artist' => $faker->name,
        'length' => $faker->time('i:s'),
        'album' => $faker->randomDigitNotNull,
    ];
});
