import "./skeleton.css";

function Skeleton({ type = "card", count = 1 }) {
  const renderSkeleton = () => {
    if (type === "card") {
      return (
        <article className="skeleton-card">
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text short"></div>
        </article>
      );
    }

    if (type === "detail") {
      return (
        <div className="skeleton-detail">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-backdrop"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text short"></div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}

export default Skeleton;
