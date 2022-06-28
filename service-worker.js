/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "44810050cbffc6f73f98b03258afa9e9"
  },
  {
    "url": "assets/css/0.styles.4e146a84.css",
    "revision": "98a4da0a7749fb81dbc344f7ef707689"
  },
  {
    "url": "assets/img/delete.af660dc1.png",
    "revision": "af660dc1421f1cd3c6bc87ccd278626c"
  },
  {
    "url": "assets/img/insert.a4d7706b.png",
    "revision": "a4d7706b262f64f4442d0595157c0bca"
  },
  {
    "url": "assets/img/insert2.fb075a6e.png",
    "revision": "fb075a6eb486c8df37d32987d9d4589a"
  },
  {
    "url": "assets/img/link.bc124aa8.png",
    "revision": "bc124aa8e7f5fe82220a070b8fa28cb2"
  },
  {
    "url": "assets/img/link2.cfcf7762.png",
    "revision": "cfcf7762a3157ad79683726bdcf4afa6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/singleLink.b5613a60.png",
    "revision": "b5613a600c9e2117bc0ad5df2919f3dd"
  },
  {
    "url": "assets/img/singleLink2.9f45748a.png",
    "revision": "9f45748a24d3c295f978b642f920f1f6"
  },
  {
    "url": "assets/img/singleLink3.46746260.png",
    "revision": "46746260ed60ac4ff1143547a1e92f00"
  },
  {
    "url": "assets/js/10.b86b6a10.js",
    "revision": "c384e31ff4b7e26bf0fa25f088ef16cd"
  },
  {
    "url": "assets/js/11.a48e462d.js",
    "revision": "42f8368c4be4024ce81defbcdcaf4a38"
  },
  {
    "url": "assets/js/12.a3e73192.js",
    "revision": "4d538b17ea8639a85db3588964b5e91a"
  },
  {
    "url": "assets/js/13.26e13fae.js",
    "revision": "ca2e6b65fe6f940f0a04f831dddbaf94"
  },
  {
    "url": "assets/js/14.27e40bf7.js",
    "revision": "6a1ef4ff83f8a55c3d8073fe66827ca6"
  },
  {
    "url": "assets/js/15.4dd9ddc9.js",
    "revision": "c485b57aecb2b5c84eed77de3caa4dd2"
  },
  {
    "url": "assets/js/16.d611a16f.js",
    "revision": "b72a019f1f187b99c47038009f6dfc8e"
  },
  {
    "url": "assets/js/17.a2a12035.js",
    "revision": "c2cd7d4419b0b7e5f3878b0cd78addf5"
  },
  {
    "url": "assets/js/18.5475b38e.js",
    "revision": "671613b91e1db1d37942486e01b68595"
  },
  {
    "url": "assets/js/19.6463e10c.js",
    "revision": "dfecd0384d026575bd80d629ade5c83e"
  },
  {
    "url": "assets/js/2.7693c2e8.js",
    "revision": "a36c9c7421a626e7811e4c19537566f2"
  },
  {
    "url": "assets/js/20.213cf635.js",
    "revision": "fa9ae15e63536063cf98e89ed1c33b91"
  },
  {
    "url": "assets/js/21.94eb2c75.js",
    "revision": "cd7ddecbdbc8bf9657deea6b09b1d6fa"
  },
  {
    "url": "assets/js/22.5ee0c9ff.js",
    "revision": "66c9d199222ca3e013225dae2ce6d6f4"
  },
  {
    "url": "assets/js/23.c2c25004.js",
    "revision": "14da12f2fc9f89470ecb2bab514b9829"
  },
  {
    "url": "assets/js/24.8177cd2b.js",
    "revision": "345f34f23ca9fcc58bd046dbb5eb2f43"
  },
  {
    "url": "assets/js/25.9b064cde.js",
    "revision": "35055009e9ebfa559802f15736aaa10c"
  },
  {
    "url": "assets/js/26.80f58140.js",
    "revision": "50081b83ed42f6d077bedb77b74c0951"
  },
  {
    "url": "assets/js/27.69aaa9a0.js",
    "revision": "c05b85a040a88ff9d297dcbd318081cc"
  },
  {
    "url": "assets/js/28.24c1315a.js",
    "revision": "e8cbf772b06863bbb0ec136eb544ef58"
  },
  {
    "url": "assets/js/29.d97ea833.js",
    "revision": "0066f6fd243a9553da38a5850c81b7ab"
  },
  {
    "url": "assets/js/3.bfb906ec.js",
    "revision": "76d71e76baa7ffe7426f984430ec1426"
  },
  {
    "url": "assets/js/4.355e1467.js",
    "revision": "688f4560d6be67d8b080a19af1bc1971"
  },
  {
    "url": "assets/js/5.bbda145a.js",
    "revision": "e3b5a7b19dafe083f341b20a5fac0f11"
  },
  {
    "url": "assets/js/6.14cd0af8.js",
    "revision": "a2ed2769adaab85b52c09e8f644d3053"
  },
  {
    "url": "assets/js/7.b171d745.js",
    "revision": "8ac7911dd38968541bfbee8fa0497c6d"
  },
  {
    "url": "assets/js/8.264b9635.js",
    "revision": "fd5acf640e96625f0031da28a83478db"
  },
  {
    "url": "assets/js/9.9a0acde5.js",
    "revision": "54014f4598c135703efcc2316a606cf3"
  },
  {
    "url": "assets/js/app.091491f4.js",
    "revision": "514654311907928030063097eaea1c5e"
  },
  {
    "url": "base/1.sortAlgorithm.html",
    "revision": "36c966f02c1f0083080231b931cdfdb9"
  },
  {
    "url": "base/10.arrayCorrelationAlgorithm.html",
    "revision": "d93c44343158d77d97dc5f1d32d4a0a9"
  },
  {
    "url": "base/11.linkedListCorrelationAlgorithm.html",
    "revision": "593d7f61b38d2697afda1351419f06d2"
  },
  {
    "url": "base/12.treeCorrelationAlgorithm.html",
    "revision": "6ffde02d4577789ebe5c1e4bcc43c82a"
  },
  {
    "url": "base/2.greedyAlgorithm.html",
    "revision": "f6e528fa371c9a43d727aee21a79ca7b"
  },
  {
    "url": "base/3.recursiveAlgorithm.html",
    "revision": "df791c644f1098a795ac60a845e91266"
  },
  {
    "url": "base/4.dynamicProgramming.html",
    "revision": "eadf1708d872330fdfb4c8f489c34931"
  },
  {
    "url": "base/5.divideAndConquerAlgorithm.html",
    "revision": "e14142fb88b6a131d801cbfe98c0d0b3"
  },
  {
    "url": "base/6.backtrackingMethod.html",
    "revision": "6db477bc4f9cbb073542bac708e5b5e8"
  },
  {
    "url": "base/7.branchAndBoundMethod.html",
    "revision": "c127a63ad9ef5c9f862541731f0ba154"
  },
  {
    "url": "base/8.topologicalSorting.html",
    "revision": "334dd9c203b5a4b80d5c95d740b47a09"
  },
  {
    "url": "base/9.stringCorrelationAlgorithm.html",
    "revision": "7b0ddfb155496954e59391e7771ad814"
  },
  {
    "url": "base/knowledge/1.index.html",
    "revision": "68a7356fe2592935fbe96c49bbef2121"
  },
  {
    "url": "base/knowledge/2.html",
    "revision": "fa58411f1b4e8e77a2e71c7a86c1a04f"
  },
  {
    "url": "base/knowledge/3.html",
    "revision": "9be018da6eab9359028043fd8c1b5555"
  },
  {
    "url": "base/knowledge/4.html",
    "revision": "33fb6991a59cfed0d29f5b4c12b188a8"
  },
  {
    "url": "books/1/1.index.html",
    "revision": "d4c020a9e4f13c6d929c38e1b50d8930"
  },
  {
    "url": "books/2/1.index.html",
    "revision": "a10b938247923ddfcb8119ecef46096b"
  },
  {
    "url": "books/3/1.index.html",
    "revision": "4657c5ca175c497485f7424a84ee3cd2"
  },
  {
    "url": "books/4/1.index.html",
    "revision": "7324641dd57e15b9a2ebe839f397c6f3"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "efb492c7e3626fbb6f12f4e4b2e10a55"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
