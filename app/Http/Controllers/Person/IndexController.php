<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Models\Person;

class IndexController extends Controller
{
    public function test()
    {
        $people = Person::all();
        return $people;
    }
}

