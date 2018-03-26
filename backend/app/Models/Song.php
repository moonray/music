<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    public function album()
    {
        return $this->belongsTo('App\Models\Album');
    }
}
