export const resizeImage = (url, width, height) => {
  if (!url) return '';
  const resizeParams = `resize=${width},${height}`;
  return url.includes('?')
    ? `${url}?${resizeParams}`
    : `${url}?${resizeParams}`;
};
