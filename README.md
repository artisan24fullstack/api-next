## Next.js
Building REST APIs with Next.js 14
```
npx create-next-app@latest .
```

```
TypeScritpt yes
ESLint Yes
Tailwind.css Yes
src No
App router Yes
Customize import alias No
```

## DB 

```
npm install mongodb

npm install mongoose
```
## Learn technos and tools

- postman
- mongoDB
- typescript 
- api rest
- ... TODO video 2.08 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run build

> api-next@0.1.0 build
> next build

  ▲ Next.js 14.2.3
  - Environments: .env

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types    
 ✓ Collecting page data    
 ✓ Generating static pages (8/8)
 ✓ Collecting build traces    
 ✓ Finalizing page optimization    

Route (app)                              Size     First Load JS
┌ ○ /                                    5.29 kB        92.3 kB
├ ○ /_not-found                          871 B          87.8 kB
├ ƒ /api/blogs                           0 B                0 B
├ ƒ /api/blogs/[blog]                    0 B                0 B
├ ƒ /api/categories                      0 B                0 B
├ ƒ /api/categories/[category]           0 B                0 B
└ ƒ /api/users                           0 B                0 B
+ First Load JS shared by all            87 kB
  ├ chunks/23-0627c91053ca9399.js        31.5 kB
  ├ chunks/fd9d1056-2821b0f0cabcd8bd.js  53.6 kB
  └ other shared chunks (total)          1.86 kB


ƒ Middleware                             27 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```
