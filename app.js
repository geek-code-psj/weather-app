// Smart Madhya Pradesh Dashboard JavaScript

// Application state
const appState = {
  currentCity: null,
  currentUser: null,
  theme: 'light',
  language: 'english',
  isOnline: true,
  notifications: {
    weather: true,
    news: true,
    civicUpdates: true,
    emergency: true
  }
};

// Application data
const appData = {
  "mpCities": [
    {
      "id": 1,
      "name": "Bhopal",
      "district": "Bhopal",
      "population": 1883381,
      "area": "285.88 km²",
      "coordinates": {"lat": 23.2599, "lng": 77.4126},
      "description": "Capital city of Madhya Pradesh, known as City of Lakes",
      "majorLandmarks": ["Upper Lake", "Taj-ul-Masajid", "Van Vihar", "Bharat Bhavan"],
      "economicProfile": "Administrative, IT, Healthcare, Education"
    },
    {
      "id": 2,
      "name": "Indore",
      "district": "Indore",
      "population": 3276697,
      "area": "530 km²",
      "coordinates": {"lat": 22.7196, "lng": 75.8577},
      "description": "Commercial capital and cleanest city of India",
      "majorLandmarks": ["Rajwada Palace", "Lal Bagh Palace", "Sarafa Bazaar", "IIT Indore"],
      "economicProfile": "Commerce, Industry, Textiles, Pharmaceuticals"
    },
    {
      "id": 3,
      "name": "Jabalpur",
      "district": "Jabalpur",
      "population": 1267564,
      "area": "367.5 km²",
      "coordinates": {"lat": 23.1815, "lng": 79.9864},
      "description": "Marble city known for Bhedaghat and Dhuandhar Falls",
      "majorLandmarks": ["Marble Rocks", "Dhuandhar Falls", "Madan Mahal Fort", "Rani Durgavati Museum"],
      "economicProfile": "Tourism, Marble Industry, Defense, Railways"
    },
    {
      "id": 4,
      "name": "Gwalior",
      "district": "Gwalior",
      "population": 1335543,
      "area": "780 km²",
      "coordinates": {"lat": 26.2183, "lng": 78.1828},
      "description": "Historic city famous for Gwalior Fort and classical music",
      "majorLandmarks": ["Gwalior Fort", "Jai Vilas Palace", "Sas Bahu Temple", "Tansen Tomb"],
      "economicProfile": "Tourism, Handicrafts, Agriculture, Small Industries"
    },
    {
      "id": 5,
      "name": "Ujjain",
      "district": "Ujjain",
      "population": 515215,
      "area": "93.36 km²",
      "coordinates": {"lat": 23.1793, "lng": 75.7849},
      "description": "One of the seven sacred cities in Hinduism, Kumbh Mela site",
      "majorLandmarks": ["Mahakaleshwar Temple", "Ram Ghat", "Kal Bhairav Temple", "Vedh Shala"],
      "economicProfile": "Religious Tourism, Agriculture, Small Scale Industries"
    },
    {
      "id": 6,
      "name": "Sagar",
      "district": "Sagar",
      "population": 273357,
      "area": "166.35 km²",
      "coordinates": {"lat": 23.8388, "lng": 78.7378},
      "description": "Educational hub known for Dr. Hari Singh Gour University",
      "majorLandmarks": ["Lakha Banjara Lake", "Eran", "Rahatgarh Waterfalls", "University"],
      "economicProfile": "Education, Agriculture, Government Services"
    },
    {
      "id": 7,
      "name": "Dewas",
      "district": "Dewas",
      "population": 289550,
      "area": "58.89 km²",
      "coordinates": {"lat": 22.9676, "lng": 76.0534},
      "description": "Industrial city known for chemical and pharmaceutical industries",
      "majorLandmarks": ["Devi Ahilya Palace", "Chamunda Mata Temple", "Meetha Talab", "Kaveri Hills"],
      "economicProfile": "Chemicals, Pharmaceuticals, Textiles, Agriculture"
    },
    {
      "id": 8,
      "name": "Chhindwara",
      "district": "Chhindwara",
      "population": 199749,
      "area": "10,293 km²",
      "coordinates": {"lat": 22.0572, "lng": 78.9698},
      "description": "Orange production center and coal mining region",
      "majorLandmarks": ["Pench National Park", "Devgarh Fort", "Patalkot Valley", "Jam Sawali Hanuman Temple"],
      "economicProfile": "Mining, Agriculture (Oranges), Forestry, Tourism"
    }
  ],
  "weatherData": {
    "bhopal": {
      "current": {"temperature": 26, "condition": "Clear Sky", "humidity": 58, "windSpeed": 8, "aqi": 72},
      "forecast": [
        {"day": "Today", "high": 31, "low": 19, "condition": "Clear", "rainfall": 0},
        {"day": "Tomorrow", "high": 33, "low": 21, "condition": "Partly Cloudy", "rainfall": 0},
        {"day": "Saturday", "high": 30, "low": 18, "condition": "Thunderstorms", "rainfall": 12}
      ]
    },
    "indore": {
      "current": {"temperature": 29, "condition": "Partly Cloudy", "humidity": 62, "windSpeed": 12, "aqi": 89},
      "forecast": [
        {"day": "Today", "high": 34, "low": 22, "condition": "Partly Cloudy", "rainfall": 0},
        {"day": "Tomorrow", "high": 35, "low": 23, "condition": "Hot", "rainfall": 0},
        {"day": "Saturday", "high": 32, "low": 20, "condition": "Rainy", "rainfall": 18}
      ]
    },
    "jabalpur": {
      "current": {"temperature": 27, "condition": "Misty", "humidity": 71, "windSpeed": 6, "aqi": 65},
      "forecast": [
        {"day": "Today", "high": 32, "low": 20, "condition": "Misty", "rainfall": 0},
        {"day": "Tomorrow", "high": 34, "low": 22, "condition": "Clear", "rainfall": 0},
        {"day": "Saturday", "high": 31, "low": 19, "condition": "Thunderstorms", "rainfall": 15}
      ]
    },
    "gwalior": {
      "current": {"temperature": 24, "condition": "Cool Breeze", "humidity": 65, "windSpeed": 10, "aqi": 58},
      "forecast": [
        {"day": "Today", "high": 29, "low": 17, "condition": "Cool Breeze", "rainfall": 0},
        {"day": "Tomorrow", "high": 31, "low": 19, "condition": "Sunny", "rainfall": 0},
        {"day": "Saturday", "high": 28, "low": 16, "condition": "Cloudy", "rainfall": 8}
      ]
    },
    "ujjain": {
      "current": {"temperature": 28, "condition": "Warm", "humidity": 59, "windSpeed": 9, "aqi": 76},
      "forecast": [
        {"day": "Today", "high": 33, "low": 21, "condition": "Warm", "rainfall": 0},
        {"day": "Tomorrow", "high": 35, "low": 23, "condition": "Hot", "rainfall": 0},
        {"day": "Saturday", "high": 31, "low": 19, "condition": "Light Rain", "rainfall": 10}
      ]
    }
  },
  "newsData": [
    {
      "id": 1,
      "title": "MP Digital Infrastructure Initiative: State-wide Smart City Expansion",
      "summary": "Madhya Pradesh government announces comprehensive digital transformation plan covering all major cities",
      "category": "Development",
      "city": "State-wide",
      "source": "MP Government Portal",
      "timestamp": "2025-09-18T14:30:00Z",
      "priority": "high"
    },
    {
      "id": 2,
      "title": "Bhopal: New Metro Rail Project Gets Central Government Approval",
      "summary": "Capital city's metro project receives final clearance with construction to begin next year",
      "category": "Infrastructure",
      "city": "Bhopal",
      "source": "Times of India",
      "timestamp": "2025-09-18T11:45:00Z",
      "priority": "high"
    },
    {
      "id": 3,
      "title": "Indore Maintains Top Position in Swachh Survekshan 2025",
      "summary": "Commercial capital achieves cleanest city status for the 7th consecutive year",
      "category": "Environment",
      "city": "Indore",
      "source": "Hindustan Times",
      "timestamp": "2025-09-18T09:20:00Z",
      "priority": "medium"
    },
    {
      "id": 4,
      "title": "Ujjain Kumbh 2025: Preparations in Full Swing",
      "summary": "Mahakaleshwar temple area undergoing major infrastructure upgrades for upcoming Kumbh Mela",
      "category": "Religious",
      "city": "Ujjain",
      "source": "Dainik Bhaskar",
      "timestamp": "2025-09-17T16:15:00Z",
      "priority": "medium"
    },
    {
      "id": 5,
      "title": "Gwalior Fort Conservation Project Launched",
      "summary": "Archaeological Survey of India begins comprehensive restoration of historic Gwalior Fort",
      "category": "Heritage",
      "city": "Gwalior",
      "source": "The Hindu",
      "timestamp": "2025-09-17T13:30:00Z",
      "priority": "medium"
    }
  ],
  "civicIssues": [
    {
      "id": 2001,
      "title": "Traffic Signal Malfunction at DB City Mall",
      "city": "Bhopal",
      "category": "Traffic",
      "description": "Traffic signal not working properly causing major congestion during peak hours",
      "location": {"lat": 23.2156, "lng": 77.4305, "address": "Arera Colony, DB City Mall, Bhopal"},
      "priority": "High",
      "status": "Reported",
      "reportedBy": "Amit Sharma",
      "reportDate": "2025-09-18T08:30:00Z",
      "upvotes": 34,
      "downvotes": 2
    },
    {
      "id": 2002,
      "title": "Water Supply Disruption in Residential Area",
      "city": "Indore",
      "category": "Water Supply",
      "description": "No water supply for past 2 days in the entire residential complex",
      "location": {"lat": 22.7532, "lng": 75.8937, "address": "Vijay Nagar, Indore"},
      "priority": "High",
      "status": "In Progress",
      "reportedBy": "Priya Patel",
      "reportDate": "2025-09-16T14:20:00Z",
      "upvotes": 67,
      "downvotes": 1
    },
    {
      "id": 2003,
      "title": "Damaged Road Near Railway Station",
      "city": "Jabalpur",
      "category": "Roads",
      "description": "Multiple large potholes making road dangerous for vehicles",
      "location": {"lat": 23.1685, "lng": 79.9338, "address": "Station Road, Jabalpur"},
      "priority": "Medium",
      "status": "In Progress",
      "reportedBy": "Rajesh Kumar",
      "reportDate": "2025-09-15T11:45:00Z",
      "upvotes": 28,
      "downvotes": 0
    },
    {
      "id": 2004,
      "title": "Street Light Outage in Fort Area",
      "city": "Gwalior",
      "category": "Street Lighting",
      "description": "Multiple street lights not working near Gwalior Fort creating safety concerns",
      "location": {"lat": 26.2295, "lng": 78.1691, "address": "Fort Road, Gwalior"},
      "priority": "Medium",
      "status": "Reported",
      "reportedBy": "Sunita Agarwal",
      "reportDate": "2025-09-17T19:30:00Z",
      "upvotes": 19,
      "downvotes": 0
    }
  ],
  "userProfile": {
    "name": "Rahul Sharma",
    "email": "rahul.sharma@email.com",
    "phone": "+91-9876543210",
    "selectedCity": "Bhopal",
    "preferredLanguage": "English",
    "theme": "light",
    "notifications": {
      "weather": true,
      "news": true,
      "civicUpdates": true,
      "emergency": true
    },
    "contributions": {
      "issuesReported": 5,
      "issuesVoted": 23,
      "joinDate": "2025-08-10",
      "reputation": 156
    }
  },
  "stateStats": {
    "totalCities": 8,
    "totalPopulation": 8935456,
    "totalIssues": 2847,
    "resolvedIssues": 2156,
    "activeUsers": 45678,
    "avgResolutionTime": "5.2 days",
    "mostActiveCity": "Indore",
    "cleanestCity": "Indore"
  },
  "emergencyContacts": {
    "statewide": [
      {"service": "Police", "number": "100"},
      {"service": "Fire", "number": "101"},
      {"service": "Ambulance", "number": "108"},
      {"service": "Disaster Management", "number": "1077"}
    ],
    "bhopal": [
      {"service": "Municipal Corporation", "number": "+91-755-2661949"},
      {"service": "Water Supply", "number": "+91-755-2770770"},
      {"service": "Electricity", "number": "+91-755-2423644"}
    ],
    "indore": [
      {"service": "Municipal Corporation", "number": "+91-731-2434343"},
      {"service": "Water Supply", "number": "+91-731-2545454"},
      {"service": "Electricity", "number": "+91-731-2565656"}
    ],
    "jabalpur": [
      {"service": "Municipal Corporation", "number": "+91-761-2678678"},
      {"service": "Water Supply", "number": "+91-761-2789789"},
      {"service": "Electricity", "number": "+91-761-2890890"}
    ]
  }
};

// Chart instances
let charts = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Load saved preferences
  loadUserPreferences();
  
  // Initialize components
  initializeNavigation();
  initializeThemeToggle();
  initializeModal();
  initializeToast();
  initializeCitySelector();
  initializeEventListeners();
  
  // Populate data
  populateEmergencyContacts();
  populateUserProfile();
  populateNotificationSettings();
  populateStateStats();
  
  // Initialize charts
  initializeCharts();
  
  // Set initial section
  showSection('dashboard');
  
  // Start real-time updates
  startRealTimeUpdates();
  
  // Check online status
  checkOnlineStatus();
}

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Show corresponding section
      const sectionId = this.getAttribute('data-section');
      if (sectionId) {
        showSection(sectionId);
      }
    });
  });
}

// Show specific section
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    
    // Load section-specific data
    loadSectionData(sectionId);
  }
}

// Load section-specific data
function loadSectionData(sectionId) {
  switch (sectionId) {
    case 'dashboard':
      updateDashboard();
      break;
    case 'weather':
      updateWeatherSection();
      break;
    case 'news':
      updateNewsSection();
      break;
    case 'civic-issues':
      updateCivicIssuesSection();
      break;
    case 'maps':
      updateMapSection();
      break;
    case 'analytics':
      updateAnalyticsSection();
      break;
  }
}

// City selector functionality
function initializeCitySelector() {
  const citySelector = document.getElementById('citySelector');
  if (!citySelector) return;
  
  // Populate city options
  appData.mpCities.forEach(city => {
    const option = document.createElement('option');
    option.value = city.name.toLowerCase();
    option.textContent = city.name;
    if (city.name === appData.userProfile.selectedCity) {
      option.selected = true;
    }
    citySelector.appendChild(option);
  });
  
  // Handle city selection
  citySelector.addEventListener('change', function() {
    const selectedCityName = this.value;
    if (selectedCityName) {
      const city = appData.mpCities.find(c => c.name.toLowerCase() === selectedCityName);
      if (city) {
        selectCity(city);
      }
    } else {
      appState.currentCity = null;
      updateDashboard();
    }
  });
  
  // Auto-select saved city
  if (appData.userProfile.selectedCity) {
    const savedCity = appData.mpCities.find(c => c.name === appData.userProfile.selectedCity);
    if (savedCity) {
      selectCity(savedCity);
    }
  }
}

// Select city
function selectCity(city) {
  appState.currentCity = city;
  appData.userProfile.selectedCity = city.name;
  
  // Save preference
  saveUserPreferences();
  
  // Update UI
  updateDashboard();
  updateWeatherSection();
  updateNewsSection();
  updateCivicIssuesSection();
  updateMapSection();
  
  // Show toast
  showToast(`Switched to ${city.name}`, 'success');
}

// Update dashboard
function updateDashboard() {
  const city = appState.currentCity;
  
  // Update title and subtitle
  const title = document.getElementById('dashboardTitle');
  const subtitle = document.getElementById('dashboardSubtitle');
  
  if (city) {
    title.textContent = `${city.name} Dashboard`;
    subtitle.textContent = `${city.description} • Population: ${city.population.toLocaleString()}`;
  } else {
    title.textContent = 'Smart Madhya Pradesh Dashboard';
    subtitle.textContent = 'Select a city to view personalized information';
  }
  
  // Update metrics
  updateCityMetrics();
  updateWeatherWidget();
  updateNewsWidget();
}

// Update city metrics
function updateCityMetrics() {
  const city = appState.currentCity;
  
  if (!city) {
    document.getElementById('currentTemp').textContent = '--°C';
    document.getElementById('tempCondition').textContent = 'Select city';
    document.getElementById('newsCount').textContent = '--';
    document.getElementById('newsUpdate').textContent = 'Updates available';
    document.getElementById('issuesCount').textContent = '--';
    document.getElementById('issuesStatus').textContent = 'Pending resolution';
    document.getElementById('cityPopulation').textContent = '--';
    document.getElementById('cityArea').textContent = 'Area: --';
    return;
  }
  
  // Weather
  const weatherData = appData.weatherData[city.name.toLowerCase()];
  if (weatherData) {
    document.getElementById('currentTemp').textContent = `${weatherData.current.temperature}°C`;
    document.getElementById('tempCondition').textContent = weatherData.current.condition;
  }
  
  // News
  const cityNews = appData.newsData.filter(news => 
    news.city === city.name || news.city === 'State-wide'
  );
  document.getElementById('newsCount').textContent = cityNews.length;
  document.getElementById('newsUpdate').textContent = 'Latest updates';
  
  // Issues
  const cityIssues = appData.civicIssues.filter(issue => issue.city === city.name);
  document.getElementById('issuesCount').textContent = cityIssues.length;
  document.getElementById('issuesStatus').textContent = 'Pending resolution';
  
  // Population and area
  document.getElementById('cityPopulation').textContent = city.population.toLocaleString();
  document.getElementById('cityArea').textContent = `Area: ${city.area}`;
}

// Update weather widget
function updateWeatherWidget() {
  const weatherWidget = document.getElementById('weatherWidget');
  const city = appState.currentCity;
  
  if (!city) {
    weatherWidget.innerHTML = '<div class="weather-placeholder"><p>Select a city to view weather information</p></div>';
    return;
  }
  
  const weatherData = appData.weatherData[city.name.toLowerCase()];
  if (!weatherData) {
    weatherWidget.innerHTML = '<div class="weather-placeholder"><p>Weather data not available</p></div>';
    return;
  }
  
  weatherWidget.innerHTML = `
    <div class="weather-current">
      <div class="weather-main">
        <div class="weather-icon">${getWeatherIcon(weatherData.current.condition)}</div>
        <div class="weather-temp">${weatherData.current.temperature}°C</div>
        <div class="weather-condition">${weatherData.current.condition}</div>
      </div>
      <div class="weather-details">
        <div class="weather-detail">
          <div class="weather-detail-label">Humidity</div>
          <div class="weather-detail-value">${weatherData.current.humidity}%</div>
        </div>
        <div class="weather-detail">
          <div class="weather-detail-label">Wind</div>
          <div class="weather-detail-value">${weatherData.current.windSpeed} km/h</div>
        </div>
        <div class="weather-detail">
          <div class="weather-detail-label">AQI</div>
          <div class="weather-detail-value">${weatherData.current.aqi}</div>
        </div>
      </div>
    </div>
  `;
}

// Update news widget
function updateNewsWidget() {
  const newsWidget = document.getElementById('newsWidget');
  const city = appState.currentCity;
  
  if (!city) {
    newsWidget.innerHTML = '<div class="news-placeholder"><p>Select a city to view local news</p></div>';
    return;
  }
  
  const relevantNews = appData.newsData.filter(news => 
    news.city === city.name || news.city === 'State-wide'
  ).slice(0, 3);
  
  if (relevantNews.length === 0) {
    newsWidget.innerHTML = '<div class="news-placeholder"><p>No recent news available</p></div>';
    return;
  }
  
  newsWidget.innerHTML = relevantNews.map(news => `
    <div class="news-item" onclick="showNewsDetails(${news.id})">
      <div class="news-header">
        <span class="news-category">${news.category}</span>
        <span class="news-priority ${news.priority}">${news.priority}</span>
      </div>
      <h4 class="news-title">${news.title}</h4>
      <p class="news-summary">${news.summary}</p>
      <div class="news-meta">
        <span>${news.source}</span>
        <span>${formatTime(news.timestamp)}</span>
      </div>
    </div>
  `).join('');
}

// Update weather section
function updateWeatherSection() {
  const city = appState.currentCity;
  const locationInfo = document.getElementById('weatherLocationInfo');
  const currentWeather = document.getElementById('currentWeather');
  const forecast = document.getElementById('weatherForecast');
  
  if (!city) {
    locationInfo.innerHTML = '<span class="city-highlight">Select a city to view weather</span>';
    currentWeather.innerHTML = '<div class="loading">Please select a city</div>';
    forecast.innerHTML = '<div class="loading">Please select a city</div>';
    return;
  }
  
  locationInfo.innerHTML = `<span class="city-highlight">${city.name}, ${city.district}</span>`;
  
  const weatherData = appData.weatherData[city.name.toLowerCase()];
  if (!weatherData) {
    currentWeather.innerHTML = '<div class="loading">Weather data not available</div>';
    forecast.innerHTML = '<div class="loading">Forecast data not available</div>';
    return;
  }
  
  // Current weather
  currentWeather.innerHTML = `
    <div class="weather-main">
      <div class="weather-icon">${getWeatherIcon(weatherData.current.condition)}</div>
      <div class="weather-temp">${weatherData.current.temperature}°C</div>
      <div class="weather-condition">${weatherData.current.condition}</div>
    </div>
    <div class="weather-details">
      <div class="weather-detail">
        <div class="weather-detail-label">Humidity</div>
        <div class="weather-detail-value">${weatherData.current.humidity}%</div>
      </div>
      <div class="weather-detail">
        <div class="weather-detail-label">Wind Speed</div>
        <div class="weather-detail-value">${weatherData.current.windSpeed} km/h</div>
      </div>
      <div class="weather-detail">
        <div class="weather-detail-label">Air Quality</div>
        <div class="weather-detail-value">${weatherData.current.aqi}</div>
      </div>
    </div>
  `;
  
  // Forecast
  forecast.innerHTML = weatherData.forecast.map(day => `
    <div class="forecast-item">
      <div class="forecast-day">${day.day}</div>
      <div class="forecast-condition">${day.condition}</div>
      <div class="forecast-temps">
        <span class="forecast-high">${day.high}°</span>
        <span class="forecast-low">${day.low}°</span>
      </div>
    </div>
  `).join('');
}

// Update news section
function updateNewsSection() {
  const newsList = document.getElementById('newsList');
  const categoryFilter = document.getElementById('newsCategory');
  const scopeFilter = document.getElementById('newsScope');
  
  let filteredNews = [...appData.newsData];
  
  // Apply city filter based on scope
  const city = appState.currentCity;
  if (city && scopeFilter.value === 'city') {
    filteredNews = filteredNews.filter(news => news.city === city.name);
  } else if (scopeFilter.value === 'state') {
    filteredNews = filteredNews.filter(news => news.city === 'State-wide');
  }
  
  // Apply category filter
  if (categoryFilter.value) {
    filteredNews = filteredNews.filter(news => news.category === categoryFilter.value);
  }
  
  if (filteredNews.length === 0) {
    newsList.innerHTML = '<div class="loading">No news available for the selected filters</div>';
    return;
  }
  
  newsList.innerHTML = filteredNews.map(news => `
    <div class="news-item card-animate" onclick="showNewsDetails(${news.id})">
      <div class="news-header">
        <span class="news-category">${news.category}</span>
        <span class="news-priority ${news.priority}">${news.priority}</span>
      </div>
      <h4 class="news-title">${news.title}</h4>
      <p class="news-summary">${news.summary}</p>
      <div class="news-meta">
        <span>📍 ${news.city}</span>
        <span>📰 ${news.source}</span>
        <span>🕒 ${formatTime(news.timestamp)}</span>
      </div>
    </div>
  `).join('');
}

// Update civic issues section
function updateCivicIssuesSection() {
  const issuesList = document.getElementById('issuesList');
  const categoryFilter = document.getElementById('issueCategory');
  const statusFilter = document.getElementById('issueStatus');
  
  let filteredIssues = [...appData.civicIssues];
  
  // Filter by city
  const city = appState.currentCity;
  if (city) {
    filteredIssues = filteredIssues.filter(issue => issue.city === city.name);
  }
  
  // Apply filters
  if (categoryFilter.value) {
    filteredIssues = filteredIssues.filter(issue => issue.category === categoryFilter.value);
  }
  
  if (statusFilter.value) {
    filteredIssues = filteredIssues.filter(issue => issue.status === statusFilter.value);
  }
  
  if (filteredIssues.length === 0) {
    issuesList.innerHTML = '<div class="loading">No issues found for the selected filters</div>';
    return;
  }
  
  issuesList.innerHTML = filteredIssues.map(issue => `
    <div class="issue-item card-animate" onclick="showIssueDetails(${issue.id})">
      <div class="issue-header">
        <h4 class="issue-title">${issue.title}</h4>
        <span class="issue-priority ${issue.priority.toLowerCase()}">${issue.priority}</span>
      </div>
      <div class="issue-meta">
        <span class="issue-category">${issue.category}</span>
        <span>📍 ${issue.location.address}</span>
        <span>🕒 ${formatTime(issue.reportDate)}</span>
      </div>
      <div class="issue-description">${issue.description}</div>
      <div class="issue-footer">
        <div class="issue-votes">
          <button class="vote-btn" onclick="event.stopPropagation(); voteIssue(${issue.id}, 'up')">
            👍 ${issue.upvotes}
          </button>
          <button class="vote-btn" onclick="event.stopPropagation(); voteIssue(${issue.id}, 'down')">
            👎 ${issue.downvotes}
          </button>
        </div>
        <span class="status status--${getStatusClass(issue.status)}">${issue.status}</span>
      </div>
    </div>
  `).join('');
}

// Update map section
function updateMapSection() {
  const mapCityName = document.getElementById('mapCityName');
  const mapMarkers = document.getElementById('mapMarkers');
  
  const city = appState.currentCity;
  
  if (!city) {
    mapCityName.textContent = 'Select a city';
    mapMarkers.innerHTML = '';
    return;
  }
  
  mapCityName.textContent = city.name;
  
  // Show issues as markers
  const cityIssues = appData.civicIssues.filter(issue => issue.city === city.name);
  
  mapMarkers.innerHTML = cityIssues.map(issue => `
    <div class="map-marker ${issue.priority.toLowerCase()}" 
         title="${issue.title}" 
         onclick="showIssueDetails(${issue.id})"
         style="position: relative; top: ${Math.random() * 200}px; left: ${Math.random() * 300}px;">
    </div>
  `).join('') + `
    <div class="map-marker service" 
         title="Municipal Corporation" 
         style="position: relative; top: 100px; left: 150px;">
    </div>
    <div class="map-marker service" 
         title="Police Station" 
         style="position: relative; top: 180px; left: 200px;">
    </div>
  `;
}

// Initialize event listeners
function initializeEventListeners() {
  // Quick action buttons
  document.getElementById('reportIssueBtn')?.addEventListener('click', () => showReportIssueModal());
  document.getElementById('viewMapBtn')?.addEventListener('click', () => {
    document.querySelector('[data-section="maps"]').click();
  });
  document.getElementById('emergencyBtn')?.addEventListener('click', () => {
    document.querySelector('[data-section="emergency"]').click();
  });
  document.getElementById('analyticsBtn')?.addEventListener('click', () => {
    document.querySelector('[data-section="analytics"]').click();
  });
  
  // Header buttons
  document.getElementById('refreshData')?.addEventListener('click', refreshAllData);
  document.getElementById('autoLocationBtn')?.addEventListener('click', autoDetectLocation);
  document.getElementById('newIssueBtn')?.addEventListener('click', () => showReportIssueModal());
  document.getElementById('editProfileBtn')?.addEventListener('click', () => showEditProfileModal());
  
  // Filter change events
  document.getElementById('newsCategory')?.addEventListener('change', updateNewsSection);
  document.getElementById('newsScope')?.addEventListener('change', updateNewsSection);
  document.getElementById('issueCategory')?.addEventListener('change', updateCivicIssuesSection);
  document.getElementById('issueStatus')?.addEventListener('change', updateCivicIssuesSection);
  
  // Settings
  document.getElementById('languageSetting')?.addEventListener('change', function() {
    appState.language = this.value;
    saveUserPreferences();
    showToast('Language preference saved', 'success');
  });
  
  document.getElementById('themeSetting')?.addEventListener('change', function() {
    if (this.value === 'auto') {
      // Use system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
    } else {
      setTheme(this.value);
    }
    appState.theme = this.value;
    saveUserPreferences();
  });
}

// Theme toggle functionality
function initializeThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('mpDashboardTheme') || 'light';
  
  setTheme(savedTheme);
  
  themeToggle?.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    appState.theme = newTheme;
    saveUserPreferences();
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-color-scheme', theme);
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
  localStorage.setItem('mpDashboardTheme', theme);
}

// Modal functionality
function initializeModal() {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  
  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function showModal(title, content) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Toast functionality
function initializeToast() {
  const toastClose = document.getElementById('toastClose');
  toastClose?.addEventListener('click', hideToast);
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toastIcon');
  const toastMessage = document.getElementById('toastMessage');
  
  if (!toast || !toastIcon || !toastMessage) return;
  
  // Set icon based on type
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  toastIcon.textContent = icons[type] || icons.success;
  toastMessage.textContent = message;
  
  // Remove existing classes and add new type class
  toast.classList.remove('success', 'error', 'warning', 'info');
  toast.classList.add(type);
  toast.classList.remove('hidden');
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    hideToast();
  }, 3000);
}

function hideToast() {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.classList.add('hidden');
  }
}

// Show news details modal
function showNewsDetails(newsId) {
  const news = appData.newsData.find(n => n.id === newsId);
  if (!news) return;
  
  const content = `
    <div class="news-details">
      <div class="news-meta" style="margin-bottom: 20px;">
        <span class="news-category">${news.category}</span>
        <span class="news-priority ${news.priority}" style="margin-left: 10px;">${news.priority}</span>
      </div>
      <div style="margin-bottom: 16px;">
        <strong>Location:</strong> ${news.city}<br>
        <strong>Source:</strong> ${news.source}<br>
        <strong>Published:</strong> ${formatTime(news.timestamp)}
      </div>
      <div style="margin-bottom: 16px;">
        <strong>Summary:</strong><br>
        ${news.summary}
      </div>
      <div style="margin-top: 20px;">
        <button class="btn btn--primary" onclick="closeModal()">Close</button>
        <button class="btn btn--outline" onclick="shareNews(${news.id})">Share</button>
      </div>
    </div>
  `;
  
  showModal(news.title, content);
}

// Show issue details modal
function showIssueDetails(issueId) {
  const issue = appData.civicIssues.find(i => i.id === issueId);
  if (!issue) return;
  
  const content = `
    <div class="issue-details">
      <div class="issue-meta" style="margin-bottom: 20px;">
        <span class="issue-category">${issue.category}</span>
        <span class="issue-priority ${issue.priority.toLowerCase()}" style="margin-left: 10px;">${issue.priority}</span>
      </div>
      <div style="margin-bottom: 16px;">
        <strong>Location:</strong> ${issue.location.address}<br>
        <strong>Reported by:</strong> ${issue.reportedBy}<br>
        <strong>Reported on:</strong> ${formatTime(issue.reportDate)}<br>
        <strong>Status:</strong> <span class="status status--${getStatusClass(issue.status)}">${issue.status}</span>
      </div>
      <div style="margin-bottom: 16px;">
        <strong>Description:</strong><br>
        ${issue.description}
      </div>
      <div style="margin-bottom: 20px;">
        <strong>Community Response:</strong><br>
        👍 ${issue.upvotes} upvotes &nbsp;&nbsp; 👎 ${issue.downvotes} downvotes
      </div>
      <div style="margin-top: 20px;">
        <button class="btn btn--primary" onclick="closeModal()">Close</button>
        <button class="btn btn--outline" onclick="voteIssue(${issue.id}, 'up'); closeModal();">👍 Support</button>
        <button class="btn btn--outline" onclick="shareIssue(${issue.id})">Share</button>
      </div>
    </div>
  `;
  
  showModal(issue.title, content);
}

// Show report issue modal
function showReportIssueModal() {
  if (!appState.currentCity) {
    showToast('Please select a city first', 'warning');
    return;
  }
  
  const content = `
    <form class="issue-form" onsubmit="submitIssue(event)">
      <div class="form-group">
        <label class="form-label">Issue Title *</label>
        <input type="text" class="form-control" id="issueTitle" required>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Category *</label>
          <select class="form-control" id="issueCategory" required>
            <option value="">Select Category</option>
            <option value="Traffic">Traffic & Transportation</option>
            <option value="Water Supply">Water Supply</option>
            <option value="Roads">Roads & Infrastructure</option>
            <option value="Street Lighting">Street Lighting</option>
            <option value="Waste Management">Waste Management</option>
            <option value="Public Safety">Public Safety</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">Priority</label>
          <select class="form-control" id="issuePriority">
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Location *</label>
        <input type="text" class="form-control" id="issueLocation" 
               placeholder="Enter specific address or landmark" required>
      </div>
      
      <div class="form-group">
        <label class="form-label">Description *</label>
        <textarea class="form-control" id="issueDescription" rows="4" 
                  placeholder="Describe the issue in detail..." required></textarea>
      </div>
      
      <div class="form-group">
        <label class="form-label">Upload Photos</label>
        <div class="photo-upload" onclick="document.getElementById('photoInput').click()">
          <div class="photo-upload-icon">📷</div>
          <div>Click to upload photos</div>
          <input type="file" id="photoInput" accept="image/*" multiple style="display: none;">
        </div>
      </div>
      
      <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: flex-end;">
        <button type="button" class="btn btn--outline" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn--primary">Submit Issue</button>
      </div>
    </form>
  `;
  
  showModal('Report Civic Issue', content);
}

// Submit issue
function submitIssue(event) {
  event.preventDefault();
  
  const newIssue = {
    id: Date.now(),
    title: document.getElementById('issueTitle').value,
    city: appState.currentCity.name,
    category: document.getElementById('issueCategory').value,
    description: document.getElementById('issueDescription').value,
    location: {
      lat: appState.currentCity.coordinates.lat + (Math.random() - 0.5) * 0.01,
      lng: appState.currentCity.coordinates.lng + (Math.random() - 0.5) * 0.01,
      address: document.getElementById('issueLocation').value
    },
    priority: document.getElementById('issuePriority').value,
    status: 'Reported',
    reportedBy: appData.userProfile.name,
    reportDate: new Date().toISOString(),
    upvotes: 1,
    downvotes: 0
  };
  
  appData.civicIssues.push(newIssue);
  appData.userProfile.contributions.issuesReported++;
  
  closeModal();
  updateCivicIssuesSection();
  updateMapSection();
  showToast('Issue reported successfully!', 'success');
}

// Vote on issue
function voteIssue(issueId, voteType) {
  const issue = appData.civicIssues.find(i => i.id === issueId);
  if (!issue) return;
  
  if (voteType === 'up') {
    issue.upvotes++;
    showToast('Vote recorded', 'success');
  } else {
    issue.downvotes++;
  }
  
  appData.userProfile.contributions.issuesVoted++;
  updateCivicIssuesSection();
}

// Populate emergency contacts
function populateEmergencyContacts() {
  const stateContacts = document.getElementById('stateEmergencyContacts');
  const cityContacts = document.getElementById('cityEmergencyContacts');
  
  if (stateContacts) {
    stateContacts.innerHTML = appData.emergencyContacts.statewide.map(contact => `
      <div class="contact-item">
        <span class="contact-service">${contact.service}</span>
        <a href="tel:${contact.number}" class="contact-number">${contact.number}</a>
      </div>
    `).join('');
  }
  
  updateCityEmergencyContacts();
}

// Update city emergency contacts
function updateCityEmergencyContacts() {
  const cityContacts = document.getElementById('cityEmergencyContacts');
  if (!cityContacts) return;
  
  const city = appState.currentCity;
  if (!city) {
    cityContacts.innerHTML = '<p>Select a city to view local emergency contacts</p>';
    return;
  }
  
  const contacts = appData.emergencyContacts[city.name.toLowerCase()] || [];
  
  if (contacts.length === 0) {
    cityContacts.innerHTML = '<p>No city-specific contacts available</p>';
    return;
  }
  
  cityContacts.innerHTML = contacts.map(contact => `
    <div class="contact-item">
      <span class="contact-service">${contact.service}</span>
      <a href="tel:${contact.number}" class="contact-number">${contact.number}</a>
    </div>
  `).join('');
}

// Populate user profile
function populateUserProfile() {
  const profileInfo = document.getElementById('profileInfo');
  const userContributions = document.getElementById('userContributions');
  
  if (profileInfo) {
    const profile = appData.userProfile;
    profileInfo.innerHTML = `
      <div class="profile-item">
        <span class="profile-label">Name</span>
        <span class="profile-value">${profile.name}</span>
      </div>
      <div class="profile-item">
        <span class="profile-label">Email</span>
        <span class="profile-value">${profile.email}</span>
      </div>
      <div class="profile-item">
        <span class="profile-label">Phone</span>
        <span class="profile-value">${profile.phone}</span>
      </div>
      <div class="profile-item">
        <span class="profile-label">Selected City</span>
        <span class="profile-value">${profile.selectedCity}</span>
      </div>
      <div class="profile-item">
        <span class="profile-label">Language</span>
        <span class="profile-value">${profile.preferredLanguage}</span>
      </div>
      <div class="profile-item">
        <span class="profile-label">Member Since</span>
        <span class="profile-value">${formatDate(profile.contributions.joinDate)}</span>
      </div>
    `;
  }
  
  if (userContributions) {
    const contrib = appData.userProfile.contributions;
    userContributions.innerHTML = `
      <div class="contribution-item">
        <div class="contribution-number">${contrib.issuesReported}</div>
        <div class="contribution-label">Issues Reported</div>
      </div>
      <div class="contribution-item">
        <div class="contribution-number">${contrib.issuesVoted}</div>
        <div class="contribution-label">Issues Voted</div>
      </div>
      <div class="contribution-item">
        <div class="contribution-number">${contrib.reputation}</div>
        <div class="contribution-label">Reputation Points</div>
      </div>
    `;
  }
}

// Populate notification settings
function populateNotificationSettings() {
  const container = document.getElementById('notificationSettings');
  if (!container) return;
  
  const settings = [
    { key: 'weather', name: 'Weather Alerts', desc: 'Severe weather warnings for your city' },
    { key: 'news', name: 'News Updates', desc: 'Breaking news and important announcements' },
    { key: 'civicUpdates', name: 'Civic Updates', desc: 'Updates on reported issues and resolutions' },
    { key: 'emergency', name: 'Emergency Alerts', desc: 'Critical emergency notifications' }
  ];
  
  container.innerHTML = settings.map(setting => `
    <div class="notification-item">
      <div class="notification-label">
        <div class="notification-name">${setting.name}</div>
        <div class="notification-desc">${setting.desc}</div>
      </div>
      <div class="toggle-switch ${appState.notifications[setting.key] ? 'active' : ''}" 
           onclick="toggleNotification('${setting.key}', this)">
      </div>
    </div>
  `).join('');
}

// Toggle notification
function toggleNotification(key, element) {
  appState.notifications[key] = !appState.notifications[key];
  element.classList.toggle('active');
  saveUserPreferences();
  showToast(`${key} notifications ${appState.notifications[key] ? 'enabled' : 'disabled'}`, 'info');
}

// Populate state stats
function populateStateStats() {
  const container = document.getElementById('stateStats');
  if (!container) return;
  
  const stats = appData.stateStats;
  container.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${stats.totalCities}</div>
      <div class="stat-label">Cities</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${stats.totalPopulation.toLocaleString()}</div>
      <div class="stat-label">Population</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${stats.totalIssues.toLocaleString()}</div>
      <div class="stat-label">Total Issues</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${stats.resolvedIssues.toLocaleString()}</div>
      <div class="stat-label">Resolved</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${stats.activeUsers.toLocaleString()}</div>
      <div class="stat-label">Active Users</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${stats.avgResolutionTime}</div>
      <div class="stat-label">Avg Resolution</div>
    </div>
  `;
}

// Initialize charts
function initializeCharts() {
  initializeIssueChart();
  initializePerformanceChart();
}

// Initialize issue resolution chart
function initializeIssueChart() {
  const ctx = document.getElementById('issueChart');
  if (!ctx) return;
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const reported = [45, 52, 48, 61, 58, 67];
  const resolved = [42, 49, 45, 58, 55, 63];
  
  charts.issueChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Issues Reported',
          data: reported,
          borderColor: '#B4413C',
          backgroundColor: 'rgba(180, 65, 60, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        },
        {
          label: 'Issues Resolved',
          data: resolved,
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(94, 82, 64, 0.1)'
          }
        },
        x: {
          grid: {
            color: 'rgba(94, 82, 64, 0.1)'
          }
        }
      }
    }
  });
}

// Initialize performance chart
function initializePerformanceChart() {
  const ctx = document.getElementById('performanceChart');
  if (!ctx) return;
  
  const cities = ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain'];
  const scores = [85, 92, 78, 81, 74];
  
  charts.performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: cities,
      datasets: [{
        label: 'Performance Score',
        data: scores,
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: 'rgba(94, 82, 64, 0.1)'
          }
        },
        x: {
          grid: {
            color: 'rgba(94, 82, 64, 0.1)'
          }
        }
      }
    }
  });
}

// Utility functions
function getWeatherIcon(condition) {
  const icons = {
    'Clear Sky': '☀️',
    'Clear': '☀️',
    'Partly Cloudy': '⛅',
    'Cloudy': '☁️',
    'Misty': '🌫️',
    'Hot': '🌡️',
    'Warm': '🌤️',
    'Cool Breeze': '💨',
    'Sunny': '☀️',
    'Thunderstorms': '⛈️',
    'Rainy': '🌧️',
    'Light Rain': '🌦️'
  };
  return icons[condition] || '🌤️';
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function getStatusClass(status) {
  const statusMap = {
    'Reported': 'warning',
    'In Progress': 'info',
    'Resolved': 'success',
    'Rejected': 'error'
  };
  return statusMap[status] || 'info';
}

// User preference management
function loadUserPreferences() {
  const saved = localStorage.getItem('mpDashboardPrefs');
  if (saved) {
    const prefs = JSON.parse(saved);
    Object.assign(appState, prefs);
    
    // Apply theme
    setTheme(appState.theme);
    
    // Update UI elements
    const languageSetting = document.getElementById('languageSetting');
    if (languageSetting) {
      languageSetting.value = appState.language;
    }
    
    const themeSetting = document.getElementById('themeSetting');
    if (themeSetting) {
      themeSetting.value = appState.theme;
    }
  }
}

function saveUserPreferences() {
  const prefs = {
    currentCity: appState.currentCity,
    theme: appState.theme,
    language: appState.language,
    notifications: appState.notifications
  };
  localStorage.setItem('mpDashboardPrefs', JSON.stringify(prefs));
}

// Auto detect location
function autoDetectLocation() {
  showToast('Detecting your location...', 'info');
  
  // Simulate GPS detection
  setTimeout(() => {
    const randomCity = appData.mpCities[Math.floor(Math.random() * appData.mpCities.length)];
    selectCity(randomCity);
    document.getElementById('citySelector').value = randomCity.name.toLowerCase();
    showToast(`Location detected: ${randomCity.name}`, 'success');
  }, 2000);
}

// Refresh all data
function refreshAllData() {
  showToast('Refreshing data...', 'info');
  
  // Simulate data refresh
  setTimeout(() => {
    updateDashboard();
    updateWeatherSection();
    updateNewsSection();
    updateCivicIssuesSection();
    showToast('Data refreshed successfully', 'success');
  }, 1500);
}

// Check online status
function checkOnlineStatus() {
  const updateOnlineStatus = () => {
    appState.isOnline = navigator.onLine;
    const indicator = document.getElementById('offlineIndicator');
    
    if (!appState.isOnline) {
      if (!indicator) {
        const offlineDiv = document.createElement('div');
        offlineDiv.id = 'offlineIndicator';
        offlineDiv.className = 'offline-indicator show';
        offlineDiv.textContent = 'You are currently offline';
        document.body.appendChild(offlineDiv);
      } else {
        indicator.classList.add('show');
      }
    } else {
      if (indicator) {
        indicator.classList.remove('show');
      }
    }
  };
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

// Start real-time updates
function startRealTimeUpdates() {
  // Update weather data every 5 minutes
  setInterval(() => {
    if (appState.currentCity) {
      // Simulate weather data updates
      const weatherKey = appState.currentCity.name.toLowerCase();
      const weatherData = appData.weatherData[weatherKey];
      if (weatherData) {
        // Small random changes to simulate real updates
        weatherData.current.temperature += (Math.random() - 0.5) * 2;
        weatherData.current.humidity += Math.floor((Math.random() - 0.5) * 10);
        weatherData.current.windSpeed += Math.floor((Math.random() - 0.5) * 4);
        
        updateWeatherWidget();
        updateWeatherSection();
      }
    }
  }, 300000); // 5 minutes
  
  // Check for new issues every minute
  setInterval(() => {
    // Simulate checking for new issues
    if (Math.random() < 0.1) { // 10% chance
      showToast('New civic issues reported in your area', 'info');
    }
  }, 60000); // 1 minute
}

// Analytics section update
function updateAnalyticsSection() {
  // Charts are already initialized, just refresh if needed
  if (charts.issueChart) {
    charts.issueChart.update();
  }
  if (charts.performanceChart) {
    charts.performanceChart.update();
  }
}

// Share functions
function shareNews(newsId) {
  const news = appData.newsData.find(n => n.id === newsId);
  if (news) {
    navigator.clipboard?.writeText(`Check out this news: ${news.title} - Smart MP Dashboard`);
    showToast('News link copied to clipboard', 'success');
  }
}

function shareIssue(issueId) {
  const issue = appData.civicIssues.find(i => i.id === issueId);
  if (issue) {
    navigator.clipboard?.writeText(`Support this civic issue: ${issue.title} in ${issue.city} - Smart MP Dashboard`);
    showToast('Issue link copied to clipboard', 'success');
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    hideToast();
  }
  
  // Alt + number keys for quick navigation
  if (e.altKey && e.key >= '1' && e.key <= '9') {
    e.preventDefault();
    const sections = ['dashboard', 'weather', 'news', 'civic-issues', 'maps', 'emergency', 'analytics', 'profile', 'settings'];
    const sectionIndex = parseInt(e.key) - 1;
    if (sections[sectionIndex]) {
      document.querySelector(`[data-section="${sections[sectionIndex]}"]`)?.click();
    }
  }
});

// Make functions globally available
window.showNewsDetails = showNewsDetails;
window.showIssueDetails = showIssueDetails;
window.voteIssue = voteIssue;
window.submitIssue = submitIssue;
window.toggleNotification = toggleNotification;
window.shareNews = shareNews;
window.shareIssue = shareIssue;
window.closeModal = closeModal;