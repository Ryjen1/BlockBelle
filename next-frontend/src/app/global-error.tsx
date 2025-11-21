'use client';

export default function GlobalError() {
  if (typeof window === 'undefined') {
    return null;
  }
  
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
      </body>
    </html>
  );
}