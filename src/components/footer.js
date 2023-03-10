import React from "react";
import styles from '../styles/footer.module.css';


class Footer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <h5>COINCAP.IO</h5>
                    <ul className={styles.ul}>
                        <li><span className={styles.span}>Methodology</span></li>
                        <li><span className={styles.span}>Support</span></li>
                        <li><span className={styles.span}>Our Api</span></li>
                        <li><span className={styles.span}>Rate Comparison</span></li>
                        <li><span className={styles.span}>Carrers</span></li>
                    </ul>
                </div>
                <div >
                    <div style={{ marginBottom: 20 }}>
                        <h5>LEGALS</h5>
                        <ul className={styles.ul}>
                            <li><span className={styles.span}>Terms Of Serice</span></li>
                            <li><span className={styles.span}>Privacy Policy</span></li>
                        </ul>
                    </div>
                    <div >
                        <h5>DISCLAIMER</h5>
                        <span className={styles.span}>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</span>
                    </div>
                </div>
                <div >
                    <h5>FOLLOW US</h5>
                    <img
                        className={styles.img}
                        alt="twitter"
                        src="https://cdn-icons-png.flaticon.com/512/220/220375.png"
                    ></img>
                    <img
                        style={{ marginLeft: 15 }}
                        className={styles.img}
                        alt="facebook"
                        src="https://cdn-icons-png.flaticon.com/512/1077/1077041.png"></img>
                </div>
                <div >
                    <h5>COINS APP AVAILABLE ON</h5>
                    <img
                        className={styles.playstore}
                        alt="playstore"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png">
                    </img>
                    <img
                        className={styles.playstore}
                        alt="playstore"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png">
                    </img>
                </div>
            </div>
        );
    }
}

export default Footer;