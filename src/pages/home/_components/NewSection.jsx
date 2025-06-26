import React from 'react';
import CardNew from '@/components/common/card/CardNew';
import useFetch from '@/hooks/useFetch';
import { getKomikNew } from '@/services/api';
import { MdNewReleases } from 'react-icons/md';
import {
  NewSectionError,
  NewSectionSkeleton,
} from '@/components/common/Skeleton/NewSectionSkeleton';

const NewSection = () => {
  const { data: komikData, isLoading, error } = useFetch(getKomikNew);

  if (isLoading) return <NewSectionSkeleton />;
  if (error) return <NewSectionError error={error} />;
  return (
    <div className="p-4 bg-gray-900 my-2">
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <MdNewReleases />
        <h1>New Komik</h1>
      </div>
      <CardNew komikData={komikData} />
    </div>
  );
};

export default NewSection;
