export function newRectPoint<T extends HTMLElement, Y extends HTMLElement>(
  originEl: T,
  toEl: Y,
) {
  const {
    left: xOrigin,
    top: yOrigin,
    width: WOrigin,
    height: HOrigin,
  } = originEl.getBoundingClientRect();
  const {
    left: xTo,
    top: yTo,
    width: WTo,
    height: HTo,
  } = toEl.getBoundingClientRect();

  return {
    x: xTo - xOrigin,
    y: yTo - yOrigin,
    width: WTo,
    height: HTo,
  };
}
