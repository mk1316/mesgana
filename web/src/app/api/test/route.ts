import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'API routes are working!' });
}

export async function POST() {
  return NextResponse.json({ message: 'POST to API routes are working!' });
}
