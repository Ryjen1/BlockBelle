import EngagementRewardsTest from '@/components/EngagementRewardsTest';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function TestIntegrationPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Engagement Rewards Testing</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EngagementRewardsTest />
      </main>
    </div>
  );
}