export default function preferredImage(documents, sizeOpt) {
  if (!documents || documents.length === 0) return null; 
  const sortedDocs = documents.sort( (a, b) => a.position - b.position); 
  const doc = sortedDocs[0]; 
  if (!doc || !doc.paper) return null;
  const size = sizeOpt || 'original';
  const assetFormat = doc.paper.asset_formats[size];
  if (!assetFormat) return null;
  return {
    alt: doc.caption || doc.paper.title,
    url: assetFormat.url,
    w: assetFormat.w,
    h: assetFormat.h
  };
}
