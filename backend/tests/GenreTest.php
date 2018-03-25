<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class GenreTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Test json returned by genre routes.
     *
     * @return void
     */
    public function testJson()
    {
        $genres = factory('App\Models\Genre', 3)->create();

        $this->get('/genres');
        $this->assertResponseStatus(200);
        $this->assertJsonStringEqualsJsonString((string) $genres, $this->response->getContent());

        $this->get('/genre/' . $genres[0]->name);
        $this->assertResponseStatus(200);
        $this->assertJsonStringEqualsJsonString((string) $genres[0], $this->response->getContent());
    }
}
