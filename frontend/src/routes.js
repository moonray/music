/**
 * React Router compatible routes.
 *
 * The loadData function will allow data to be loaded on the server before being rendered.
 * It returns an array of Redux Thunks.
 */
import AlbumsContainer from './components/AlbumsContainer';
import Album from './components/Album';

const routes = [
  {
    path: '/',
    component: AlbumsContainer,
    exact: true,
    strict: true,
  },
  {
    path: '/album/:albumId(\\d+)',
    component: Album,
    exact: true,
    strict: true,
  },
];

export default routes;
