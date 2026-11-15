import { NextResponse } from "next/server";

export function GET() {
  const person = {
    name: "ling ling",
    age: "27",
    dob: "28-01-1999",
  };

  return NextResponse.json(person);
}
