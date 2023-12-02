'use client'
import Image from 'next/image'
import Navbar from './ui/navbar'
import Searchbar from './ui/searchbar'
import GridList from './ui/gridlist'
import Footbar from './ui/footbar'
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
