import randomListIndex from './random-list-index';

export default function randomListInterval(list, cb, intervalOpt) {
  const interval = intervalOpt || 1000; 
  return setInterval(() => {
    const randIndex = randomListIndex(list);
    cb(list[randIndex], randIndex);
  }, interval);

}
