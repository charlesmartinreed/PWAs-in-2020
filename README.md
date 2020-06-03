# What is a Progressive Web App?

- Essentially, it's a website that can be packaged for local use on your phone, computer or tablet. It works through your web browser, i.e., Chrome, Edge or Safari
- They have added benefits like offline access, push notifications, background sync, etc. though it should be noted that support can vary wildly between browsers, devices and OSes
- Every PWW needs both a **web app manifest** and a **service worker**

## Web App Manifest

- JSON File that informs the browser how the webpage/app how it should behave when installed on a mobile device or desktop.
- Adds the **Add to Home Screen** prompt that allows users to create a shortcut/install link (when supported)
- Has properties, some mandatory and some optional, that describe the layout of the app; _name_, _start_url_, _display_, _orientation_...

## Service Worker

- A script that runs via the browser, on a separate, background trhead
- Because of that, it's completely seperate from the web page and can't directly manipulate the DOM element
- It handles HTTPs for your PWA when running locally
- It can also handle the cache for storage/offline support or send push notifications to users
- In this example, we use it to cache the assets
