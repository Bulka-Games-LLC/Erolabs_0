self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // Access the request headers
  console.log('Request Headers:', request.headers);

  // You can even modify or respond to the request here if needed
  event.respondWith(fetch(request));
});
