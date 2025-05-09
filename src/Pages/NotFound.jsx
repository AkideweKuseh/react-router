import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-subtitle">Page Not Found</p>
      <p className="not-found-text">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="not-found-button">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
