import React from 'react';
import LeftSide from '../../components/ui/page1/leftside';
import RightSide from '../../components/ui/page1/rightside';

import * as styles from "./style.css";

const Page1 = () => {
  return (
    <div className={styles.root}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Page1;
