import { NextResponse } from "next/server";

export function GET(req) {
  const obj = {
    name: "Saqib",
    age: "20",
  };

  return NextResponse.json(obj);
}
