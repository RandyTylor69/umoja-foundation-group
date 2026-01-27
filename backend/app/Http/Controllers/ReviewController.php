<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller{
    public function store(Request $request){
        // 1. validate the data
        $validated = $request->validate([
            'content'  => 'required|string',
            'location' => 'required|string',
            'year'     => 'required|string',
            'name'     => 'required|string',
        ]);

        // 2. save validated data as a record to table
        $review = Review::create($validated);

        // 3. send reponse back to React
        return response()->json([
            'message' => 'Review saved successfully!',
            'data' => $review
        ], 201);
    }
}
