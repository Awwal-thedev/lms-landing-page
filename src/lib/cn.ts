/**
 * Tiny class-name joiner. Filters out falsy values so we can write
 * `cn("base", condition && "extra")` without pulling in a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
