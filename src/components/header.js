import React from "react";
import styles from '../styles/header.module.css';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div>
                        <span>MARKET CAT</span>
                        <span>$1.12T</span>
                    </div>
                    <div>
                        <span>EXHANGE VOLUME</span>
                        <span>$36.94B</span>
                    </div>
                    <div>
                        <span>ASSETS</span>
                        <span>2295</span>
                    </div>
                    <div>
                        <span>EXCHANGES</span>
                        <span>73</span>
                    </div>
                    <div>
                        <span>MARKETS</span>
                        <span>12,563</span>
                    </div>
                    <div>
                        <span>BTC DOM INDEX</span>
                        <span>37.4%</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;