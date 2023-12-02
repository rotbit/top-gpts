import Searchbar from './ui/searchbar'
import GridList from './ui/gridlist'
import Footbar from './ui/footbar'
import Navbar from './ui/navbar'
import Category from './ui/category'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Searchbar />
      <Category />
      <GridList />
      <Footbar />
    </main>
  )
}