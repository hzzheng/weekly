/* eslint-disable */
const CACHE_NAME = 'site-cache-v1'
const urlsToCache = [
  '/api/fex/issues',
  '/api/qiwu/issues'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        if (response) {
          return response
        }

        const fetchRequest = event.request.clone()

        return fetch(fetchRequest).then(
          function(res) {
            if (!res || res.status !== 200 || res.type !== 'basic') {
              return res
            }

            const resToCache = res.clone()
            caches
              .open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, resToCache)
              })
            
            return res
          }
        )
      })
  )
})