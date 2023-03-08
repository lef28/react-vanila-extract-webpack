import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { darkTheme, lightTheme } from '../../theme/theme.css';
import * as styles from './style.css';
import Nav from '../../components/ui/nav';
import Sidebar from '../../components/ui/sidebar';
import { MainContext } from '../../store/main';

const MainLayout = () => {
  const { theme } = useContext(MainContext);
  console.log('theme: ', theme);
  return (
    <div className={theme === 'dark' ? darkTheme : lightTheme}>
      <Nav />
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
