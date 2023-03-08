import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import * as styles from './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPersonDigging, faTools } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  const [isExpand, setIsExpand] = useState(localStorage.getItem('sidebar') === 'expand');
  useEffect(() => {
    if(isExpand) {
      localStorage.setItem('sidebar', 'expand')
    } else {
      localStorage.setItem('sidebar', 'fold')
    }
  }, [isExpand])
  return (
    <div className={classNames(styles.sidebar, isExpand ? styles.expandSidebar:styles.foldSidebar)}>
      <div className={classNames(styles.logo, isExpand ? {}:styles.foldLogo)}>
        <span>
          {isExpand === true ? 'Pioneering ProgrammersTest App' : ''}
        </span>
        <div onClick={() => setIsExpand(prev => !prev)}>
          <FontAwesomeIcon icon={faBars} className={styles.hamburger} />
        </div>
      </div>
      <div>
        <NavLink className={({isActive}) => classNames(styles.link, {[styles.activeLink]: isActive, [styles.foldLink]:!isExpand})} to="/page1">
          <FontAwesomeIcon icon={faPersonDigging} className={styles.linkIcon} />
          {isExpand === true ? 'Page 1' : ''}
        </NavLink>
        <NavLink className={({isActive}) => classNames(styles.link, {[styles.activeLink]: isActive, [styles.foldLink]:!isExpand})} to="/page2">
          <FontAwesomeIcon icon={faTools} className={styles.linkIcon} />
          {isExpand === true ? 'Page 2' : ''}
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
