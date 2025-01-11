import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    let message = '';

    try {
        // Parse the incoming JSON
        const body = await request.json();
        console.log('from SERVER', body);

        // Check if email is provided
        if (!body.email) {
            throw new Error('Missing email in the request body');
        }

        // Handle logic based on email
        if (body.email === 'ali@gmail.com') {
            message = 'You are logged in as admin';
            console.log(message);

            // Redirect the user to the 'admin' page
            return NextResponse.json({
                redirectUrl: '/admin'
            });

        } else {
            message = 'You are logged in as Student';
            console.log(message);

            // Redirect the user to the 'student' page
            return NextResponse.json({
                redirectUrl: '/student'
            });
        }

    } catch (error: any) {
        console.error('Error parsing JSON:', error.message);

        // Handle errors and return a JSON response
        return new NextResponse(
            JSON.stringify({ error: 'Invalid JSON or missing fields' }),
            { status: 400 }
        );
    }
}