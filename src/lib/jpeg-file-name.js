export default function jpegFileName(fileName) {
  if (!fileName) return "";
  return fileName.replace(/gif$|png$/, "jpg");
}
