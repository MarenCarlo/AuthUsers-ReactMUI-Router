import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  Route,
  Routes,
  Outlet,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/login', '/registro']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="LogIn" value="/login" to="/login" component={Link} />
      <Tab label="Registrarse" value="/registro" to="/registro" component={Link} />
    </Tabs>
  );
}

function CurrentRoute() {
  // eslint-disable-next-line
  const location = useLocation();
}

export default function TabsRouter() {
  return (
    <>
      <Box sx={{
        width: '100%', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Routes>
          <Route path="*" element={<CurrentRoute />} />
        </Routes>
        <MyTabs />
      </Box>
      <Outlet />
    </>
  );
}
