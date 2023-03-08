import React, { ButtonHTMLAttributes } from 'react'

import * as styles from "./button.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
};

const Button: React.FC<Props> = ({ title, ...props }) => (
    <button className={styles.root} {...props}>
        {title}
    </button>
)

export default Button
