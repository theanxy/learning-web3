import { useEffect } from 'react';
import { ethers } from 'ethers';

import styles from '../styles.module.css';

export default function Home() {
  const checkIfWalletIsConnected = () => {
    /*
     * First make sure we have access to window.ethereum
     */
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className={styles.hello}>
      <p>My first DApp!</p>
      <button className="waveButton" onClick={null}>
        Wave at Me
      </button>
    </div>
  );
}
