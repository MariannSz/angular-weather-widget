import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  currentWeather: any;
  forecast: any[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.loadMockData();
  }

  loadMockData() {
    this.currentWeather = {
      city: 'San Francisco',
      country: 'USA',
      temp: 22,
      feels_like: 24,
      wind: 7,
      humidity: 25,
      visibility: 10,
      description: 'sunny',
      icon: 'sunny',
      updated: new Date(),
    };

    this.forecast = [
      { day: 'Mon', icon: 'sunny', temp: 22 },
      { day: 'Tue', icon: 'sunny', temp: 24 },
      { day: 'Wed', icon: 'partly_cloudy_day', temp: 23 },
      { day: 'Thu', icon: 'partly_cloudy_day', temp: 25 },
      { day: 'Fri', icon: 'cloudy', temp: 21 },
      { day: 'Sat', icon: 'rainy', temp: 19 },
      { day: 'Sun', icon: 'thunderstorm', temp: 20 },
    ];
  }

  refreshData() {
    this.loading = true; // Start loading
    setTimeout(() => {
      this.loadMockData(); // After delay, reload data
      this.loading = false; // Stop loading
    }, 1500); // Simulate 1.5 second load time
  }
}
