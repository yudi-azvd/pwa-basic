window.onload = () => {
  'use strict';

  console.log('href', window.location.href);

  if ('serviceWorker' in navigator) {
    console.log('[main.js] register service worker');
    navigator.serviceWorker.register('./pwa-basic/sw.js', { scope: './pwa-basic' })
  }
}