# WeatherPWA
[WeatherPWA]() is a PWA using FCC practice idea and openweather API, going through google PWA specs

##Features/Implementation
###App Shell
The app shell is 14k or less in order to fit in the first TCP congestion window. The shell includes a loader, a header, and the app container. This is the html included in the index, as well as a short CSS file (generated with SCSS).

###App
The app starts with the second CSS file (also generated with SCSS), and the React application, which is ~136k minified in itself. The app 