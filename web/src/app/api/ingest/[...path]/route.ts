import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedParams = await params;
  return handlePostHogRequest(request, resolvedParams.path, 'GET');
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const resolvedParams = await params;
  return handlePostHogRequest(request, resolvedParams.path, 'POST');
}

async function handlePostHogRequest(
  request: NextRequest,
  pathSegments: string[],
  method: string
) {
  const path = pathSegments.join('/');
  const url = new URL(request.url);
  const searchParams = url.searchParams.toString();
  
  // Determine the correct PostHog endpoint
  let posthogUrl: string;
  
  if (path.startsWith('static/')) {
    // Static assets go to us-assets.i.posthog.com
    posthogUrl = `https://us-assets.i.posthog.com/${path}`;
  } else if (path === 'flags') {
    // Feature flags go to us.i.posthog.com
    posthogUrl = `https://us.i.posthog.com/flags`;
  } else {
    // All other requests go to us.i.posthog.com
    posthogUrl = `https://us.i.posthog.com/${path}`;
  }
  
  // Add query parameters if they exist
  if (searchParams) {
    posthogUrl += `?${searchParams}`;
  }
  
  try {
    const headers = new Headers();
    
    // Copy relevant headers from the original request
    if (request.headers.get('content-type')) {
      headers.set('content-type', request.headers.get('content-type')!);
    }
    if (request.headers.get('user-agent')) {
      headers.set('user-agent', request.headers.get('user-agent')!);
    }
    
    const requestOptions: RequestInit = {
      method,
      headers,
    };
    
    // Add body for POST requests
    if (method === 'POST') {
      const body = await request.text();
      if (body) {
        requestOptions.body = body;
      }
    }
    
    const response = await fetch(posthogUrl, requestOptions);
    
    // Create response with the same status and headers
    const responseHeaders = new Headers();
    response.headers.forEach((value, key) => {
      responseHeaders.set(key, value);
    });
    
    // Set CORS headers
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type');
    
    return new NextResponse(response.body, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('PostHog proxy error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
