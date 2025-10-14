## Error Type
Build Error

## Error Message
Module not found: Can't resolve '@gsap/react'

## Build Output
./components/AnimatedCopy.tsx:8:1
Module not found: Can't resolve '@gsap/react'
   6 | import { ScrollTrigger } from 'gsap/ScrollTrigger';
   7 | import { SplitText } from 'gsap/SplitText';
>  8 | import { useGSAP } from '@gsap/react';
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   9 |
  10 | gsap.registerPlugin(ScrollTrigger, SplitText);
  11 |

Import traces:
  Client Component Browser:
    ./components/AnimatedCopy.tsx [Client Component Browser]
    ./components/About.tsx [Client Component Browser]
    ./app/page.tsx [Client Component Browser]
    ./app/page.tsx [Server Component]

  Client Component SSR:
    ./components/AnimatedCopy.tsx [Client Component SSR]
    ./components/About.tsx [Client Component SSR]
    ./app/page.tsx [Client Component SSR]
    ./app/page.tsx [Server Component]

https://nextjs.org/docs/messages/module-not-found

Next.js version: 15.5.5 (Turbopack)
