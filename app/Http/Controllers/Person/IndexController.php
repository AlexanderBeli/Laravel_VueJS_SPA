<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;

class IndexController extends Controller
{
    public function test()
    {
        $people = Person::all();
        return PersonResource::collection($people); //будут отправлены в виде массива
    }
}

