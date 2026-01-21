import HomePage from '@/components/HomePage';

// Force dynamic rendering to avoid Next.js 16 static generation issues
export const dynamic = 'force-dynamic';

export default function Page() {
  return <HomePage />;
}