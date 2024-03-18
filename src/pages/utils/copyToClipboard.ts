export const copyToClipboard = (str: string) => {
  return new Promise<void>(function (resolve, reject) {
    let success = false;

    function listener(e: any) {
      e.clipboardData.setData('text/plain', str);
      e.preventDefault();
      success = true;
    }

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    success ? resolve() : reject();
  });
};
