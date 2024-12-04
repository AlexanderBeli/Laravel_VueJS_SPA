<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\UpdateRequest;
use App\Models\Person;

class UpdateController extends Controller
{
    public function test(UpdateRequest $request, Person $person)
    {
        $data = $request->validated();
        $person->update($data);
        return $person;
    }
}

