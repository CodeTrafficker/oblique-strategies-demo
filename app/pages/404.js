
// Can you do this in next.config.js instead?

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    console.log('one-stop 404 rerouting from 404.js');
    router.push("/")
  })

  return null
}