# Inspect an HTTP response with curl #

Make an HTTP request with curl that shows the response headers for this URL: https://jsonplaceholder.typicode.com/posts/1/comments

Q: What is the value of the content-type response header?

A: ** $ curl https://jsonplaceholder.typicode.com/posts/1/comments -v **
*   Trying 188.114.97.7:443...
* Connected to jsonplaceholder.typicode.com (188.114.97.7) port 443 (#0)
* ALPN: offers h2
* ALPN: offers http/1.1
*  CAfile: C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
*  CApath: none
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
* ALPN: server accepted h2
* Server certificate:
*  subject: C=US; ST=California; L=San Francisco; O=Cloudflare, Inc.; CN=sni.cloudflaressl.com
*  start date: Jun  6 00:00:00 2022 GMT
*  expire date: Jun  5 23:59:59 2023 GMT
*  subjectAltName: host "jsonplaceholder.typicode.com" matched cert's "*.typicode.com"
*  issuer: C=US; O=Cloudflare, Inc.; CN=Cloudflare Inc ECC CA-3
*  SSL certificate verify ok.
* Using HTTP2, server supports multiplexing
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
* h2h3 [:method: GET]
* h2h3 [:path: /posts/1/comments]
* h2h3 [:scheme: https]
* h2h3 [:authority: jsonplaceholder.typicode.com]
* h2h3 [user-agent: curl/7.83.1]
* h2h3 [accept: */*]
* Using Stream ID: 1 (easy handle 0x254c6c50d90)
> GET /posts/1/comments HTTP/2
> Host: jsonplaceholder.typicode.com
> user-agent: curl/7.83.1
> accept: */*
>
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
* Connection state changed (MAX_CONCURRENT_STREAMS == 256)!
< HTTP/2 200 
< date: Sun, 08 Jan 2023 20:47:58 GMT
< ** content-type: application/json; charset=utf-8 **
< x-powered-by: Express
< x-ratelimit-limit: 1000
< x-ratelimit-remaining: 999
< x-ratelimit-reset: 1673108283
< vary: Origin, Accept-Encoding
< access-control-allow-credentials: true
< cache-control: max-age=43200
< pragma: no-cache
< expires: -1
< x-content-type-options: nosniff
< etag: W/"5e6-4bSPS5tq8F8ZDeFJULWh6upjp7U"
< via: 1.1 vegur
< cf-cache-status: HIT
< age: 4642
< server-timing: cf-q-config;dur=4.9999944167212e-06
< report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=n3iOjsdhIOuRgUSPTkZi630%2FOPkGaNh%2FGp0eTPYDjbjlkeTC2Gvz8rulN2pOpWDPq5my4FWH7dS52vQC9m%2FbGKRhp3g%2FOsTN5urSeoz8QuCkzjm3cPdEO7HO6p0F2aJNQrRcFJ4zDUZH%2F2yw%2B5aw"}],"group":"cf-nel","max_age":604800}
< nel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
< server: cloudflare
< cf-ray: 7867ca937b0f2a28-CDG
< alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
<
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut 
occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  }
]* Connection #0 to host jsonplaceholder.typicode.com left intact