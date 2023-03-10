import React from "react";
import styles from '../styles/navbar.module.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.leftContainer}>
                        <span>Coins</span>
                        <span>Exchanges</span>
                        <span>Swap</span>
                    </div>
                    <div className={styles.logoContainer}>
                        <img
                            alt="logo"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvKg2ErEgiOD2iqyKXu_wim1ViP0y4f88F_LlRvlay9o_2i3-yr-hYNO6mfWbGIusbJY&usqp=CAU">
                        </img>
                    </div>
                    <div className={styles.rightContainer}>
                        <span>USD</span>
                        <span>English</span>
                        <img
                            id="search"
                            alt="search-icon"
                            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                        ></img>
                        <img
                            id="search"
                            alt="search-icon"
                            src="https://cdn-icons-png.flaticon.com/512/484/484613.png"
                        ></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;