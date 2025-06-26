import React from 'react';
import PopularSection from './_components/PopularSection';
import TopSection from './_components/TopSection';
import NewSection from './_components/NewSection';
import Genres from '@/components/layouts/Genres';
import OngoingSection from './_components/OngoingSection';
import ScrollTopButton from '@/components/common/ScrollTopButton';

const HomePage = () => {
  return (
    <div className="grid-cols-12 grid gap-2 overflow-x-hidden p-2 bg-gray-950">
      <div className="col-span-full sm:col-span-9">
        <PopularSection />
        <NewSection />
      </div>

      <div className="col-span-full sm:col-span-3">
        <TopSection />
        <Genres />
      </div>

      <div className="col-span-full">
        <OngoingSection />
      </div>

      {/* Top Button */}
      <ScrollTopButton />
    </div>
  );
};

export default HomePage;
