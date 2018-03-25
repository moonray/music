<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class SongTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Test json returned by song routes.
     *
     * @return void
     */
    public function testJson()
    {
        $songs = factory('App\Models\Song', 3)->create();

        $this->get('/songs');
        $this->assertResponseStatus(200);
        $this->assertJsonStringEqualsJsonString((string) $songs, $this->response->getContent());

        $this->get('/song/' . $songs[0]->id);
        $this->assertResponseStatus(200);
        $this->assertJsonStringEqualsJsonString((string) $songs[0], $this->response->getContent());
    }
}
