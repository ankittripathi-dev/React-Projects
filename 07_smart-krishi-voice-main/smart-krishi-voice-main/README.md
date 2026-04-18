## Smart Krishi Voice
<img width="2796" height="1476" alt="image" src="https://github.com/user-attachments/assets/c14edd67-7aa2-44b2-b2bd-1ba38cea3db5" />
<img width="2446" height="1249" alt="image" src="https://github.com/user-attachments/assets/e8010cc7-a80d-46f3-a07a-c09137c3b2a3" />
<img width="2401" height="1362" alt="image" src="https://github.com/user-attachments/assets/cefeadbc-b22d-429f-bb3e-f9ef77cdc8b7" />
<img width="2492" height="1278" alt="image" src="https://github.com/user-attachments/assets/8a06d3d8-e8ae-4ae7-a970-d9504ddf7c86" />

Local development

```sh
npm install
npm run dev
```

Environment variables

- VITE_OPENWEATHER_API_KEY: OpenWeather API key (frontend fallback)
- VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY: Supabase client
- OPENWEATHER_API_KEY (Edge Functions secret): for `weather` and `weather-forecast`

Features

- Real-time sensor simulation with manual soil moisture control
- Current weather + 5-day forecast (geolocation first, city fallback)
- AI recommendations and chat assistant
