/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/blog2017/09/05/see-your-bill-to-improve-your-cibil/index.html","06cab92e58691b5341815be04911c13f"],["/blog2017/09/12/emergency-funds-dont-keep-idle/index.html","334ff1beb78896db646d5050a8f8ed49"],["/blog2017/09/18/Beware-Government-keeping-eye-on-your-transactions/index.html","6cfa22f54e24abba5ee7eed17be49459"],["/blog2017/09/25/if-you-are-individual-HUF-paying-rent-over-INR-50k-read-this/index.html","ec1a9455888e677807fac0edabda1e5c"],["/blog2017/10/03/Startups-SMEs-enhance-your-cash-liquidity/index.html","a4fa34fd007656bcb03726f2a0a01c20"],["/blog2017/10/18/Insurance-Policy-A-lesser-known-loan-instrument/index.html","a92990d4f298c1de3412ca09e58598a5"],["/blog2017/11/10/Taxation-of-Cryptocurrency-Gains-in-India/index.html","0bc4dbc9520470e65b33b0e0c8d661ac"],["/blog2017/11/21/opt-for-debt-funds-optimize-returns/index.html","10c6d9368b23ef02f5c4f7f6bd51d7c9"],["/blog2017/11/28/Taxation-of-ESOPs-A-tricky-tale/index.html","367046459f9e710f372dc2b88becf634"],["/blog2017/12/05/ot-all-Gifts-are-tax-free/index.html","f9f8bca6a679dafc4070d2a14b414dd6"],["/blog2017/12/12/Business-Legal-Entity-Forming-a-Company-and-other-options/index.html","65bbf28aa509076195579e99f1a1c5fc"],["/blog2017/12/19/Taxes-aren-t-excused-even-after-death/index.html","ae5b4c686623e2fbd9f7ffdf092ee2c3"],["/blog2017/12/27/time-to-declare-house-rent-payments/index.html","173f7803099d38ea82090fca70e9b18e"],["/blog2018/01/02/Are-your-bank-deposits-safe--now-and-after-bail-in-clause/index.html","f0da05c5b1a908222e97b577addf5f2a"],["/blog2018/01/09/Tax-benefits-on-your-new-home-might-get-revoked/index.html","1120333ae00ec1ebae60b53a0c018c77"],["/blog2018/01/16/Employee-vs-Consultant-The-Pros-and-Cons/index.html","e685652582886d311ba32def0cbbc626"],["/blog2018/01/30/Build-healthy-credit-score-with-your-credit-card-s-1/index.html","a0c8929d97953236fc659a8756e37942"],["/blog2018/02/01/Understanding-the-proposed-Long-Term-Capital-Gains-Tax-1/index.html","2d5a20a22324472d6f20fa84794ae937"],["/blog2018/02/06/Actual-cost-of-buying-selling-a-share/index.html","ae66060420eb51670af9236659f99d83"],["/blog2018/02/27/All-you-need-to-do-before-31-March-2018/index.html","e43769f8631be9087015ca76c4eaba08"],["/blog2018/03/08/ent-payers-time-to-deposit-TDS-on-Rent-1/index.html","9146ebcaf4c938bc11fdfad95d664a8b"],["/blog2018/03/14/enefits-of-filing-Income-Tax-Return-before-31-March-2018/index.html","64c1aa0127e1832a1300565a2d145351"],["/blog2018/04/02/How-can-a-home-loan-save-taxes-for-you/index.html","0cdd6a0acfd013c34a15b266d8d19083"],["/blog2018/04/19/Save-up-to-10k-penalty-on-timely-filing-of-Income-Tax-Returns/index.html","3790eda62e752c6490792b41f363ab41"],["/blog2018/06/07/posit-advance-tax-by-15th-June-to-avoid-interest/index.html","e8fac55904fae7aa17ea809293d7d249"],["/blog2018/07/06/he-Marshmallow-Test-Self-control-in-managing-your-finances/index.html","bfe3b63af9aea2ccb93eccc0236b135b"],["/blog2019/03/14/Complete-KYC-by-25-April-2019-to-retain-“Active”-status-for-your-Company/index.html","9d6481c586b2c95ee0cef2c5140602b4"],["/blog404.html","762ec1147358a769ee90bed2baa4176f"],["/blogarchives/index.html","e5b0dd0ca8d1f6ba00f2adf9e32dad0c"],["/blogcategories/Finance/Credit/index.html","655f4895be14b3bd8b706ee7d146bfde"],["/blogcategories/Finance/index.html","e3ccbe1beea69fc749cee94ef337bbf4"],["/blogcss/bootstrap.css","caf3fd2abeb9eb828d8c506680df988f"],["/blogcss/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/blogcss/highlight.css","7ea7b291786d0728fdd29f60f6565038"],["/blogcss/hux-blog.css","a714e8157ed65bd19691348374d59515"],["/blogcss/hux-blog.min.css","e04b3364d8535252126822c45f56be37"],["/blogfonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/blogfonts/glyphicons-halflings-regular.svg","f0ea477ef046ba5fef9249ec3172903e"],["/blogfonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/blogfonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/blogi_dont_wanna_use_default_archives/2017/09/index.html","a7963609105bb0914f4d18d82a29e4a8"],["/blogi_dont_wanna_use_default_archives/2017/10/index.html","22ceb3b54d45b2ebe147a21ca908010c"],["/blogi_dont_wanna_use_default_archives/2017/11/index.html","53c8cea8a91d9d6bf21de4611d447288"],["/blogi_dont_wanna_use_default_archives/2017/12/index.html","c2d25228346d6681f581cdfc9bbb6790"],["/blogi_dont_wanna_use_default_archives/2017/index.html","e42a4f26b46ae2a5c78de77b3d4b3d9c"],["/blogi_dont_wanna_use_default_archives/2017/page/2/index.html","07b679af94f55eed415f6f4ac2abef61"],["/blogi_dont_wanna_use_default_archives/2018/01/index.html","ca3ad9f48d6b09ca53f20c46d2577d52"],["/blogi_dont_wanna_use_default_archives/2018/02/index.html","faaeb74ca6ecd6869a20699905284b0a"],["/blogi_dont_wanna_use_default_archives/2018/03/index.html","7d0305206c677b8df5c42eed9d0fe894"],["/blogi_dont_wanna_use_default_archives/2018/04/index.html","07215444c3a1d1e423c71affb0afd174"],["/blogi_dont_wanna_use_default_archives/2018/06/index.html","5d0df22dade541c94628865a8d39b957"],["/blogi_dont_wanna_use_default_archives/2018/07/index.html","04309d74b6fe9068994b1dec3dd90a84"],["/blogi_dont_wanna_use_default_archives/2018/index.html","2ba2b060b7b28cc6aab855f52250b87b"],["/blogi_dont_wanna_use_default_archives/2018/page/2/index.html","f2e2ebaea3c7e2fe2fa56acb10024a0f"],["/blogi_dont_wanna_use_default_archives/2019/03/index.html","80844a57ea6d82db8630e49afb9a2009"],["/blogi_dont_wanna_use_default_archives/2019/index.html","0bc1d81058a5823fe5551124ef42a748"],["/blogi_dont_wanna_use_default_archives/index.html","806abdcc98de6093c756012d0bb26277"],["/blogi_dont_wanna_use_default_archives/page/2/index.html","1a58675f7d3e78ee1b57695edab5fb4b"],["/blogi_dont_wanna_use_default_archives/page/3/index.html","3575b3098e4b54a1af3bd9b87739e09d"],["/blogimages/image.png","4781d35bcdd36e5fdec7f918191c2840"],["/blogimages/pasted-0.png","5c37786e177bf152b4fc666e18fad47e"],["/blogimages/pasted-1.png","4226cb752ec5d274ff31be49727a6400"],["/blogimages/pasted-10.png","190a89e023f0ae8f2abda1d09d6356db"],["/blogimages/pasted-11.png","22a5d68f0ec6783c899813440aaf045f"],["/blogimages/pasted-12.png","8564c69df4321f231edb6664cd1b798f"],["/blogimages/pasted-13.png","8564c69df4321f231edb6664cd1b798f"],["/blogimages/pasted-14.png","61347085d0ade8bcbf5ec15153af7ebc"],["/blogimages/pasted-15.png","47affbc836a5bc555db808723b9deb3e"],["/blogimages/pasted-16.png","47affbc836a5bc555db808723b9deb3e"],["/blogimages/pasted-17.png","db1a2a0f0d373ed2cba11d699a7dd13d"],["/blogimages/pasted-18.png","330ca641b0ad595d1beef8d9165f57f4"],["/blogimages/pasted-19.png","20e2622421d27c9293d16975d80bc8fb"],["/blogimages/pasted-2.png","b41a2ee2a471947d5b5eda0d4ca513b2"],["/blogimages/pasted-20.png","0d3c31df3b943f6e45c4ea1bd687f3e7"],["/blogimages/pasted-21.png","f219875810e3747ab54076585bbd444b"],["/blogimages/pasted-22.png","b7056424d467d28d32e3d994054d38f2"],["/blogimages/pasted-23.png","fba697bceb27091e29500d2b35ae2944"],["/blogimages/pasted-24.png","004fe0e155d4a7ec48823d32d6b87c46"],["/blogimages/pasted-25.png","d5565527d8610433a4ceb1fc843db21a"],["/blogimages/pasted-26.png","2e654baf60a910519a786fbf7d4885c6"],["/blogimages/pasted-27.png","3219473f86d650d55d4b07f08cefb12e"],["/blogimages/pasted-28.png","179ccb8724417697e6b30c0dbf715074"],["/blogimages/pasted-29.png","4cafa04590f3691362122943afe1f0f7"],["/blogimages/pasted-3.png","70137596375f9f37d9f3031f6a0d332c"],["/blogimages/pasted-30.png","fa044a9174b2dc6d692da48e523da6d8"],["/blogimages/pasted-31.png","fa044a9174b2dc6d692da48e523da6d8"],["/blogimages/pasted-32.png","7f46a3a071120d687e11f64bfba86413"],["/blogimages/pasted-33.png","7caf69b8e5658a3fb32d168962e2a2fb"],["/blogimages/pasted-34.png","1c6c900d8c504b6c8a2a2721defe3ac7"],["/blogimages/pasted-35.png","4c006c49204e2b1e03f7713b8f9c0932"],["/blogimages/pasted-36.png","05bcf377225f2a722e707b911bdcede1"],["/blogimages/pasted-37.png","6ad51c5825f81bf7e9ee2db10b6e49f9"],["/blogimages/pasted-38.png","03ff0c37b9b7de7fe5dad31012099033"],["/blogimages/pasted-39.png","fac38e0664973945b3379bf640c0b4af"],["/blogimages/pasted-4.png","226bdae42f7d0c9fb6c547bcb8d23e97"],["/blogimages/pasted-40.png","3e8ddf2d2eee7eb3e23e91c7ea21ead1"],["/blogimages/pasted-41.png","49bf48a15b693b2cf3b72dbe43a4881c"],["/blogimages/pasted-42.png","cbb94acb745b7307a67a48e2875d23f6"],["/blogimages/pasted-43.png","b77e1f57f42ae885b03c24ffabea965a"],["/blogimages/pasted-44.png","fbb22bfd0cc1d3b3af8107cc46194db2"],["/blogimages/pasted-45.png","f0a71c9ab6156be4f407f31712120c0b"],["/blogimages/pasted-5.png","bcd106898a5082b2c5cd5a41c913e5d7"],["/blogimages/pasted-6.png","1f96c02096719afa09778fa231772502"],["/blogimages/pasted-7.png","16f294104ed8c8f9112526d58e563388"],["/blogimages/pasted-8.png","60ef72b5523c29d1cb042f9becf61189"],["/blogimages/pasted-9.png","60ef72b5523c29d1cb042f9becf61189"],["/blogimg/404-bg.jpg","21981527383e2e4e9272bf2794dc72fe"],["/blogimg/about-bg.jpg","a1dc68e13215d2a4ff2792f5d4322df4"],["/blogimg/avatar.jpg","306d1a880620d740f344e39a2596204a"],["/blogimg/contact-bg.jpg","53836743ddafcab08b130b23dcc5d61d"],["/blogimg/home-bg-o.jpg","2cb98c848074c79595a2c506f74da13e"],["/blogimg/home-bg.jpg","e7d1479c05091caadd0c4e42ce7ec65a"],["/blogimg/tag-bg.jpg","32c211038c3658bd01be01a0a8ce4833"],["/blogindex.html","06228447f8d1843a512e2ddcec782730"],["/blogjs/bootstrap.js","94ffb7f0c8f344393f765caa1bb033af"],["/blogjs/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/blogjs/hux-blog.js","e581a2c32b91d0976d363ae1509391f0"],["/blogjs/hux-blog.min.js","ff75a16cd1565f54ef00144fcb294ea1"],["/blogjs/jquery.js","d4956eeef87afcac1ea39f53d78c86d4"],["/blogjs/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/blogjs/jquery.nav.js","3a776b13854665d65a2058c21ab1aa19"],["/blogjs/jquery.tagcloud.js","12d68b53dbee7708247b1729bdf0e654"],["/blogpage/2/index.html","f157ea2d526c423d02c5fa031cafa8b9"],["/blogpage/3/index.html","3270fcb4b287fdd842ae207144d1bfc4"],["/blogtags/CIBIL/index.html","41288f03be64d60d020b4d6b3d434980"],["/blogtags/Credit-score/index.html","537f6621e346f2c06f4b29aaa2646c71"],["/blogtags/Financial-planing/index.html","44cc9b1c12d824cb0f62e20ad4a62fcf"],["/blogtags/index.html","f259f7d73503b337e400cfbbb4bc492a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







