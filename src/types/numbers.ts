export type NonNegative = number & { __nonNegative: true };
export type AssertPositive<N extends number> = number extends N
  ? NonNegative
  : `${N}` extends `-${string}`
  ? never
  : N;

export function sqrt<N extends number>(n: AssertPositive<N>): number {
  return Math.sqrt(n);
}
