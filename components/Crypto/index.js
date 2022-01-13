import Link from 'next/link';
import styles from './Crypto.module.css';

const Crypto = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_title}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>R${price.toLocaleString()}</p>
              <p className={styles.coin_volume}>R${volume.toLocaleString()}</p>
              {priceChange < 0 ? (
                <p className={styles.percentRed}>{priceChange.toFixed(2)}%</p>
              ) : (
                <p className={styles.percentGreen}>{priceChange.toFixed(2)}%</p>
              )}
              <p className={styles.coin_marketcap}>
                Mkt Cap : R${marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Crypto;
