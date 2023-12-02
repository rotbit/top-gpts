import Searchbar from './ui/searchbar'
import GridList from './ui/gridlist'
import Footbar from './ui/footbar'
import Navbar from './ui/navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Searchbar />
      <GridList />
      <Footbar />
    </main>
  )
}