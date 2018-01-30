
export const getPercentageScrolledDown = (window) => {
  const pageHeight = window.document.documentElement.scrollHeight;
  const clientHeight = window.document.documentElement.clientHeight;
  const scrollPos = window.pageYOffset;
  const currentPosition = scrollPos + clientHeight;
  const percentageScrolled = currentPosition / pageHeight;
  return percentageScrolled;
}
