import React from 'react';
import CardTop from '@/components/common/card/CardTop';
import useFetch from '@/hooks/useFetch';
import { getKomikTop } from '@/services/api';
import { IoMdMedal } from 'react-icons/io';
import {
  TopSectionError,
  TopSectionSkeleton,
} from '@/components/common/Skeleton/TopSectionSkeleton';

const TopSection = () => {
  const { data: komikData, isLoading, error } = useFetch(getKomikTop);
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  if (isLoading) return <TopSectionSkeleton />;
  if (error) return <TopSectionError error={error} />;

  return (
    <>
      <div className="flex items-center gap-1.5 text-white p-3 bg-gray-900">
        <IoMdMedal />
        <h1>Top Komik</h1> - <h1>{currentMonth}</h1>
      </div>

      <CardTop komikData={komikData} />
    </>
  );
};

export default TopSection;
