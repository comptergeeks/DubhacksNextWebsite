import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    { message: "Welcome to my Next application" },
    { status: 200 },
  );
}
