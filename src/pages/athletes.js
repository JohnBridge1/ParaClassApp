import PageLayout from '../components/PageLayout';
import AthleteStories from '../components/AthleteStories';

export default function AthletesPage() {
  return (
    <PageLayout 
      title="Paralympic Athletes" 
      description="Discover inspiring stories of Paralympic athletes"
    >
      <AthleteStories />
    </PageLayout>
  );
} 