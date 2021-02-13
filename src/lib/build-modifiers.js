export default function buildModifiers(base, modifiers) {
  if (!base || !modifiers) {
    return base;
  }
  let l = modifiers.split(/ .*/).map(m => `${base}--${m}`);
  l.splice(0, 0, base);
  return  l.join(' ');
}
