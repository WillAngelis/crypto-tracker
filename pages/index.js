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
