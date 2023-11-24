export function calculateImagesPerPage() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 600) {
    return 2;
  } else {
    return Math.floor(viewportWidth / 300);
  }
}
