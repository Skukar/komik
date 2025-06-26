import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import { getDetailKomik } from '@/services/api';
import DetailSection from './_component/DetailSection';
import ChapterSection from './_component/ChapterSection';
import Loading from '@/components/common/Loading';
import ScrollTopButton from '@/components/common/ScrollTopButton';

const DetailKomik = () => {
  const { komikId } = useParams();
  const {
    data: komikDetail,
    isLoading,
    error,
  } = useFetch(() => getDetailKomik(komikId));

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="text-white p-3 bg-gray-950 min-h-screen flex items-center justify-center">
        Error: {error}
      </div>
    );

  if (!komikDetail)
    return (
      <div className="text-white p-3 bg-gray-950 min-h-screen flex items-center justify-center">
        No details available
      </div>
    );

  return (
    <div className="p-4 bg-gray-950 min-h-screen text-white">
      <DetailSection komikDetail={komikDetail} />
      <ChapterSection komikDetail={komikDetail} nameKomik={komikId} />

      {/* Top Button */}
      <ScrollTopButton />
    </div>
  );
};

export default DetailKomik;
