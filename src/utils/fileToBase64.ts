export const fileToBase64 = (
  file: any,
  callback: (base64String: string | null) => void
) => {
  const selectedFile = file[0];
  if (!selectedFile) {
    callback(null);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const base64String = reader.result as string;
    callback(base64String);
  };
  reader.onerror = () => {
    callback(null);
  };
  reader.readAsDataURL(selectedFile);
};
