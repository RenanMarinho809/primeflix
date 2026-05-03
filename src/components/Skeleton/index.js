import "./skeleton.css";

export function MovieCardSkeleton() {
  return (
    <article className="skeleton-card">
      <div className="skeleton-title"></div>
      <div className="skeleton-image"></div>
      <div className="skeleton-button"></div>
    </article>
  );
}

export function MovieDetailsSkeleton() {
  return (
    <div className="filme-info">
      <div className="skeleton-details-title"></div>
      <div className="skeleton-details-image"></div>
      <div className="skeleton-details-text"></div>
      <div className="skeleton-details-text"></div>
      <div className="skeleton-details-text"></div>
      <div className="skeleton-details-buttons"></div>
    </div>
  );
}
