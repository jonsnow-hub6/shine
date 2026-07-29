export function isTabHidden() {
  return document.hidden;
}

export function onVisibilityChange(callback: (hidden: boolean) => void) {
  const handler = () => {
    callback(document.hidden);
  };

  document.addEventListener('visibilitychange', handler);

  return () => {
    document.removeEventListener('visibilitychange', handler);
  };
}
