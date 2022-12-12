import React from 'react';
import styles from './index.module.scss';
import ReactIcon from './assets/react.png';

export default function App() {
  console.log('hello console')

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World!</h1>
      <img className={styles.icon} src={ReactIcon} />
    </div>
  );
}
