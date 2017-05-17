# WeatherPWA
[WeatherPWA]() is a App Shell using FCC practice idea and openweather API, going through google PWA specs

## Features/Implementation
### App Shell
The app shell is 14k or less in order to fit in the first TCP congestion window. The shell includes a loader (which is a clone of the google PWA loader), a header, and the app container. This is the html included in the index, as well as a short CSS file (generated with SCSS).

The CSS for the shell is 3kb, and with the HTML, which is 2kb, the shell is 5kb, and fits within the congestion window.

### Service Workers
The service worker is configured to cache core files of the app shell. This allows users to work offline if the rest of the data is saved, which we will do with IDB.

### Manifest
The manifest enables app install banners when the user visits the page twice within a small window of time. It also specifies icons for use when it is installed.

### Push Messaging (Not Implemented)
The use of [push](https://developers.google.com/web/fundamentals/getting-started/codelabs/push-notifications/) will allow the app to notify the user when certain events occur, and also feel more like a native application.

### IndexedDB (IDB) (Not Implemented)
The use of indexedDB allows the app to run offline with data loaded from a previous session.

### App (Unfinished)
The app starts with the second CSS file (also generated with SCSS), and the React application, which is ~136k minified in itself. 