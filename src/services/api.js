import axiosInstance from './axiosInstance';

// DATA KOMIK BARU
export const getKomikNew = async () => {
  const response = await axiosInstance.get('/manhwa-new');
  return response.data;
};

// DATA KOMIK POPULAR
export const getKomikPopular = async () => {
  const response = await axiosInstance.get('/manhwa-popular');
  return response.data;
};

// DATA KOMIK TOP
export const getKomikTop = async () => {
  const response = await axiosInstance.get('/manhwa-top');
  return response.data;
};

// DATA KOMIK ON GOING
export const getKomikOngoing = async () => {
  const response = await axiosInstance.get('/manhwa-ongoing');
  return response.data;
};

// DATA GENRE
export const getGenre = async () => {
  const response = await axiosInstance.get('/genres');
  return response.data;
};

// DATA DETAIL KOMIK
export const getDetailKomik = async (manhwaId) => {
  const response = await axiosInstance.get(`/manhwa-detail/${manhwaId}`);
  return response.data;
};

// DATA DETAIL CHAPTER
export const getDetailChapter = async (chapterId) => {
  const response = await axiosInstance.get(`/chapter/${chapterId}`);
  return response.data;
};

// DATA DETAIL GENRE
export const getGenreDetail = async (genreId, pageNumber) => {
  const response = await axiosInstance.get(
    `/genre/${genreId}/page/${pageNumber}`
  );
  return response.data;
};

// DATA SEARCH
export const getSearchResults = async (searchQuery) => {
  const response = await axiosInstance.get(`/search/${searchQuery}`);
  return response.data;
};
