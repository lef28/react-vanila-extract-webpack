import React, { useContext } from 'react'

import { MainContext } from '../../../../store/main';
import * as styles from "./style.css";

const RightSide = () => {
    const { message } = useContext(MainContext);
    return (
    <div className={styles.root}>
      <p style={{whiteSpace: "pre"}}>{message}</p>
    </div>
  )
}

export default RightSide
