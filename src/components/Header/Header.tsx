import * as React from 'react';
import styles from './Header.module.css';

import { Moon } from 'lucide-react';

function Header() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        Where in the world?
      </span>

      <button className={styles.mode}>
        <Moon size={20}/>
        Dark Mode
      </button>
    </div>
  )
}

export default Header;