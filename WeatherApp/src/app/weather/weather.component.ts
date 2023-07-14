import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

interface CityWeather {
  name: string;
  temperature: number;
  humidity: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  cities: CityWeather[] = [];
  cityInput: string = '';
  private apiUrl = 'http://localhost:8080/weather';

  constructor(private weatherService: WeatherService) {}

  addCity(): void {
    if (this.cityInput) {
      let formattedCityName = this.cityInput.trim();

      // Validate city name for numbers or special characters
      const regex = /^[A-Za-z\s]+$/;
      if (!regex.test(formattedCityName)) {
        alert('Invalid city name. Please enter a valid city name without numbers or special characters.');
        return;
      }

      formattedCityName = this.capitalizeFirstLetter(formattedCityName);

      // Check if the city already exists
      if (this.isCityDuplicate(formattedCityName)) {
        alert('City already exists!');
      } else {
        this.fetchWeatherData(formattedCityName);
      }

      this.cityInput = '';
    }
  }

  private capitalizeFirstLetter(cityName: string): string {
    return cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
  }

  private isCityDuplicate(cityName: string): boolean {
    return this.cities.some(city => city.name.toLowerCase() === cityName.toLowerCase());
  }

  private fetchWeatherData(cityName: string): void {
    this.weatherService.getWeather(cityName).subscribe(
      (data: any) => {
        const cityWeather: CityWeather = {
          name: cityName,
          temperature: data.main.temp,
          humidity: data.main.humidity
        };
        this.cities.push(cityWeather);
      },
      (error: any) => {
        console.log(error);
        if (error && error.message === 'City not found') {
          alert(`City "${cityName}" does not exist.`);
        } else {
          alert('Error fetching weather data. Please try again later.');
        }
      }
    );
  }

  removeCity(city: CityWeather): void {
    const index = this.cities.indexOf(city);
    if (index !== -1) {
      this.cities.splice(index, 1);
    }
  }

  getBackgroundImageUrl(temperature: number): string {
    if (temperature < 20) {
      return '../../assets/Cold.webp';
    } else {
      return '../../assets/sunny.webp';
    }
  }
}
