import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page not-found-page">
      <h2>404 Not Found</h2>
      <Link to={'/'}>На главную</Link>
    </div>
  );
}

export default NotFoundPage;
