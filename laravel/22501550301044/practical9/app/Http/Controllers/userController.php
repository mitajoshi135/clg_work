<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class userController extends Controller
{
    function show()
    {
        return "list of students";
    }
    function add()
    {
        return "list of students added";
    }
    function delete()
    {
        return "list of students deleted";
    }
    function about($name)
    {
        return $name;
    }
}
