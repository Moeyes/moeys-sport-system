'use client';

import { useEffect } from 'react';

export default function ClientDOMFix() {
  useEffect(() => {
    document.querySelectorAll('[bis_register], [__processed]').forEach((el) => {
      el.removeAttribute('bis_register');
      el.removeAttribute('__processed');
    });
  }, []);

  return null; // no UI, only runs cleanup
}
