/**
 * Page transition. A CSS fade (opacity only) that starts at first paint, so it neither waits
 * for JavaScript nor creates a containing block that would trap fixed-position overlays.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
