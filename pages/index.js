import Searchbar from '../components/searchbar';
import AmiiboList from '../components/amiibolist';
import { AmiiboProvider } from '../context/amiiboContext';

export default function Home() {
  return (
    <div>
      <AmiiboProvider>
        <Searchbar />
        <AmiiboList />
      </AmiiboProvider>
    </div>
  )
}
