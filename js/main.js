window.onload = () => {
  'use strict';

  // console.log('href', window.location.href);

  // const isLocalhost = Boolean(
  //   window.location.hostname === 'localhost' ||
  //   // [::1] is the IPv6 localhost address.
  //   window.location.hostname === '[::1]' ||
  //   // 127.0.0.0/8 are considered localhost for IPv4.
  //   window.location.hostname.match(
  //     /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  //   )
  // );

  // let urlPrefix = ''

  // if (isLocalhost) {
  //   urlPrefix = 'pwa-basic'
  // }
  
  if ('serviceWorker' in navigator) {
    console.log('[main.js] register service worker');
    // navigator.serviceWorker.register('./pwa-basic/sw.js', { scope: './pwa-basic' })
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then(register => {
        console.log('registration succeeded. scope:', register.scope);
      })
      .catch(error => {
        console.log('registration failed. error:');
        console.error(error);
      })
  }
}