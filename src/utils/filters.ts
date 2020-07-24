export function getNumberUrlParam(name: string) {
  return parseInt(
    new URLSearchParams(window.location?.search).get(name) || '0',
  );
}
