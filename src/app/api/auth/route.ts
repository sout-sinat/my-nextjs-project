import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextResponse){
    const person= {
        "name": "ling ling",
        "age": "27",
        "dob": "28-01-1999"
    }
    return NextResponse.json(cookies);
}