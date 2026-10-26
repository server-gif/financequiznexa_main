/**
 * FinanceQuizNexa brand mark — the purple-and-gold emblem (bulb, book, coins,
 * rising chart) served from public/images/brand/ as a 192px PNG so the header
 * and footer share one cached request instead of inlining the same artwork
 * twice. Rendered through <img> rather than an inline <svg> because the
 * artwork is a raster illustration, not vector paths.
 */
export default function Logo({ className = '' }) {
  return (
    <img
      className={className}
      src="/images/brand/financequiznexa-logo.png"
      alt=""
      width="40"
      height="40"
      decoding="async"
    />
  );
}
