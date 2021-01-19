export default function preferredUrl(urls) {
  if (!urls || urls.length === 0) return null; 
  const sortedUrls = urls.sort( (a, b) => a.position - b.position); 
  const url = sortedUrls[0]; 
  return `https://www.fmh.de${url.permalink}`;
}

