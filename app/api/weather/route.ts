// app/api/weather/route.ts
import { NextResponse } from 'next/server'

// app/api/weather/route.ts
export async function GET(req: Request) {
    const backendUrl = process.env.BACKEND_API_BASE_URL;
    const search = new URL(req.url).search;
    const url = `${backendUrl}/weather${search}`;
  
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  }
  

  const apiKey = process.env.OPENWEATHER_API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  try {
    const res = await fetch(url)
    const data = await res.json()

    if (!res.ok) throw new Error(data.message || "Weather fetch failed")

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
