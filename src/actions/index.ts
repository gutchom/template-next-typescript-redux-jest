export const INCREMENT = "INCREMENT";
export const RESET = "RESET";

export function increment(num = 1) {
  return { type: INCREMENT, num };
}

export function reset() {
  return { type: RESET };
}
