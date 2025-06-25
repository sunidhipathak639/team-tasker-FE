export const toggleFullscreen = (element: HTMLElement) => {
  if (!document.fullscreenElement) {
    element.requestFullscreen?.();
    (element as any).webkitRequestFullscreen?.();
    (element as any).mozRequestFullScreen?.();
    (element as any).msRequestFullscreen?.();
  } else {
    document.exitFullscreen?.();
    (document as any).webkitExitFullscreen?.();
    (document as any).mozCancelFullScreen?.();
    (document as any).msExitFullscreen?.();
  }
};
