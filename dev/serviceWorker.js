/* Notes:
-At root so the scope of the service Worker will be the entire origin
-When one of the cached files are updated, update this file. Anything different
in this file will cause the browser to treat this serviceWorker as a new worker
-must be served from https



*/
/*Put this in the main app file*/
if('serviceWorker' in navigator) {
	window.addEventListener('load', function (){
		navigator.serviceWorker
			.register('./serviceWorker.js')
			.then(function(registration) {
				//Registration was successful
				console.log('Service Worker registered with scope: ', registration.scope); 
			}, function (err) {
				//Registration failure
				console.log('Service Worker registration failure: ', err)
			});
		}
	);
}

/*Service worker file should start here*/
var CACHE_NAME = 'weatherPWA-cache-v1';
var urlsToCache = [
	'/',
	'css/weatherApp.css',
	'js/weatherApp.js'
];



self.addEventListener('install', function(e) {
	console.log('serviceWorker.install()');
	e.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Opened cache');
				return cache.addAll(urlsToCache);
			})
	);
})



self.addEventListener('activate', function(event) {
	console.log('serviceWorker.activate()');
	var cacheWhitelist = [];

	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});


self.addEventListener('fetch', function(e) {
	console.log('serviceWorker.fetch()');
	e.respondWith(
		caches.match(e.request)
			.then(function(response) {
				if(response) {
					return response;
				}
				//Clone request
				var fetchRequest = e.request.clone();
				//Return fetch
				return fetch(fetchRequest).then(
					function(response) {
						if(!response || response.status !== 200 || response.type !== 'basic') {
							return response;
						}

						//Clone response
						var responseToCache = response.clone();

						//Send response to cache
						caches.open(CACHE_NAME)
							.then(function(cache) {
								cache.put(e.request, responseToCache);
							});

						//Send response to browser
						return response;
					}
				);
			})
	);
})










