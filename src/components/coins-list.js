import React from "react";
import styles from '../styles/coins-list.module.css';
import Coins from "./coin";


class CoinsList extends React.Component {
    constructor() {
        super();
        this.state = {
            coins: []
        }
    }

    async componentDidMount() {
        const url = 'https://api.coincap.io/v2/assets';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();
            if (data) {

                this.setState({
                    coins: data.data
                }, () => {
                    // console.log("Data", this.state.coins);
                });
                return {
                    data: data.data,
                    success: true
                }
            }

            throw new Error(data.message);
        }
        catch (error) {
            console.error(error);
            return {
                message: error.message,
                success: false
            }
        }
    }

    render() {
        const { coins } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <span style={{ width: "5%" }}>Rank</span>
                    <span style={{ width: "22%", marginLeft: 30, marginRight: -30 }}>Name</span>
                    <span style={{ width: "14%" }}>Price</span>
                    <span style={{ width: "14%" }}>Market Cap</span>
                    <span style={{ width: "14%" }}>VWAP(24Hr)</span>
                    <span style={{ width: "11%" }}>Supply</span>
                    <span style={{ width: "10%" }}>Volume(24Hr)</span>
                    <span style={{ width: "10%" }}>Change(24Hr)</span>
                </div>
                {coins.map((c) => {
                    return <Coins coin={c} key={c.id} />
                })}
            </div>
        );
    }
}

export default CoinsList;