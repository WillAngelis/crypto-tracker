import Crypto from '../components/Crypto';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <div>
        <SearchBar type="text" placeholder="Search" />
        <Crypto />
      </div>
    </div>
  );
}

const API =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false';

export const getServerSideProps = async () => {
  const res = await fetch(API);
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};