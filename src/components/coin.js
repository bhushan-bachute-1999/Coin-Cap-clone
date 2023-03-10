import styles from '../styles/coins.module.css';
import getExchangeRates from '../Api/exchangeRates'


function Coins(props) {
    const convert = (curr) => {
        // curr = curr == null ? '0' : curr;
        // curr = parseInt(curr);

        // curr = await getExchangeRates('INR', 'USD', curr);

        curr /= 70;
        curr /= 1000000000;
        if (curr > 1) {
            return '$' + Math.round(curr * 100) / 100 + 'B'
        }
        else {
            return '$' + Math.round(curr * 1000 * 100) / 100 + 'M';
        }
    }

    const convertVWAP = (value) => {
        // value = getExchangeRates('INR', 'USD', value).result;
        value /= 70;
        return '$' + Math.round(value * 100) / 100;
    }

    // console.log(props.coin);
    const coin = props.coin;
    const url = `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`
    return (
        <div className={styles.container} >
            <span style={{ width: "5%" }}>{coin.rank}</span>
            <div style={{ width: "22%" }}>
                <img
                    alt='coin-img'
                    src={url}
                ></img>

                <span >{coin.name}</span>
            </div>
            <span style={{ width: "14%" }}>{'$' + Math.round(coin.priceUsd * 100) / 100}</span>
            <span style={{ width: "14%" }}>{convert(coin.marketCapUsd)}</span>
            <span style={{ width: "14%" }}>{convertVWAP(coin.vwap24Hr)}</span>
            <span style={{ width: "11%" }}>{convert(coin.maxSupply)}</span>
            <span style={{ width: "10%" }}>{convert(coin.volumeUsd24Hr)}</span>
            {coin.changePercent24Hr >= 0 && <span style={{ width: "10%", color: 'green' }}>{Math.round(coin.changePercent24Hr * 100) / 100}</span>}
            {coin.changePercent24Hr < 0 && <span style={{ width: "10%", color: 'red' }}>{Math.round(coin.changePercent24Hr * 100) / 100}</span>}
        </div>
    );
}

export default Coins;