export default function randomListIndex(list) {
  if (!list || !list.length) return -1;
  const rand = Math.floor(Math.random() * (list.length - 1));
  return rand;
}
