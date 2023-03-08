import React, { useContext, useState } from 'react'
import moment from 'moment'

import { MainContext } from '../../../../store/main';
import Button from '../../common/button';
import * as styles from "./style.css";

const LeftSide = () => {
    const { theme, toggleTheme, setMessage } = useContext(MainContext);
    const [text, setText] = useState('');
    const [cntButton, setCountButton] = useState(1);
    return (
        <div className={styles.root}>
            <Button
                title = {theme === 'light' ? 'Set Dark Theme' : 'Set Light Theme'}
                onClick={() => {
                    toggleTheme();
                    setMessage((prev: string) => `${prev}${moment(new Date()).format('MM-DD-YY HH:mm:ss')}    ${theme === 'light' ? 'Theme was set to Light' : 'Theme was set to Dark'}\n`)
                }}
            />
            <Button title = "Send Message" disabled={!text} onClick={() => setMessage((prev: string) => `${prev}${moment(new Date()).format('MM-DD-YY HH:mm:ss')}    Message Sent: ${text}\n`)} />
            <textarea value={text} rows={10} cols={50} onChange={(e) => setText(e.target.value)} ></textarea>
            <Button
                title = {`Add Button ${cntButton}`}
                onClick={() => {
                    setCountButton(cntButton + 1);
                    setMessage((prev: string) => `${prev}${moment(new Date()).format('MM-DD-YY HH:mm:ss')}    Button ${cntButton} added\n`)
                }}
            />
            {
                [...Array(cntButton-1).keys()].map((item) => <Button
                    title = {`Button ${item + 1}`}
                    onClick={() => {
                        setMessage((prev: string) => `${prev}${moment(new Date()).format('MM-DD-YY HH:mm:ss')}    Button ${item + 1} clicked\n`)
                    }}
                />
                )
            }
            
        </div>
    );
}

export default LeftSide
