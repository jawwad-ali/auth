import { NextRequest, NextResponse } from "next/server";

let basePrice = 1000

export async function GET() {
    return NextResponse.json({ price: basePrice });
}

export async function POST(request: NextRequest) {

    const body = await request.json();
    try {

        if (body.coupon == 'irfanjunejo') {
            let discountedPrice = basePrice = basePrice - 500
            console.log('Your basePrice is ', basePrice)

            console.log('Your price is ', discountedPrice);
            return NextResponse.json({
              message: 'Valid Code',
              price: discountedPrice,
            });
        }

        else {
            basePrice = 1000
            console.log('Your bill is ', basePrice)
            return NextResponse.json({
                message: 'Invalid code'
            })
        }
    }
    catch (err: any) {
        return NextResponse.json({
            messag: 'error occured'
        })
    }

}