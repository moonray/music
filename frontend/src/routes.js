/**
 * React Router compatible routes.
 *
 * The loadData function will allow data to be loaded on the server before being rendered.
 * It returns an array of Redux Thunks.
 */
import AlbumListContainer from './components/AlbumListContainer';
import AlbumContainer from './components/AlbumContainer';

const routes = [
  {
    path: '/',
    component: AlbumListContainer,
    exact: true,
    strict: true,
  },
  {
    path: '/album/:albumId(\\d+)',
    component: AlbumContainer,
    exact: true,
    strict: true,
  },
];

export default routes;
