# 🌤️ Weather App

A sleek, responsive weather app built with React that displays the current weather for any city, including a history of the last 5 searches. Data is fetched from the OpenWeatherMap API.

---

## 🚀 Features

- Search weather by city name
- Displays temperature, weather condition, and weather icon
- Keeps track of the last 5 searched cities
- Stores search history using `localStorage`
- Fully responsive UI built with Tailwind CSS
- Error handling for failed API requests
- Loader animation while fetching data

---

## 🛠️ Tech Stack

| Technology        | Description                                 |
|-------------------|---------------------------------------------|
| **React**         | JavaScript library for building UI          |
| **Tailwind CSS**  | Utility-first CSS framework for styling     |
| **OpenWeatherMap API** | Source of real-time weather data      |
| **LocalStorage**  | For persisting search history               |

---

## 🌐 API Integration Details

This project uses the **OpenWeatherMap API** to fetch real-time weather data by city name.
The rate limits and all the details are as following:
Hourly forecast: 4 days
Daily forecast: 16 days
Calls per minute: 3,000
3 hour forecast: 5 days

### 📥 1. Get Your API Key

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api)
2. Sign up or log in
3. Navigate to **"API keys"**
4. Copy your API key (usually under the label `default`)

---

