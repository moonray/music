<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class AlbumTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * Test json returned by album routes.
     *
     * @return void
     */
    public function testJson()
    {
        $albums = factory('App\Models\Album', 3)->create();

        $this->get('/albums');
        $this->assertResponseStatus(200);
        $this->assertJsonStringEqualsJsonString((string) $albums, $this->response->getContent());

        $this->get('/album/' . $albums[0]->id);
        $this->assertResponseStatus(200);
        $this->assertJsonStringEqualsJsonString((string) $albums[0], $this->response->getContent());

        $songs = factory('App\Models\Song', 9)->create(['album' => $albums[0]->id]);
        // Sort by track. Then splice to reset the keys.
        $songs = $songs->sortBy('track')->splice(0);

        $this->get('/album/' . $albums[0]->id . '/songs');
        $this->assertResponseStatus(200);
        $this->assertJsonStringEqualsJsonString((string) $songs, $this->response->getContent());
    }
}
