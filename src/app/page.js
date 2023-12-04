import Searchbar from './ui/searchbar'
import GridList from './ui/gridlist'
import Footbar from './ui/footbar'
import Navbar from './ui/navbar'
import Category from './ui/category'
import Faqs from './ui/faqs'
import React from 'react';

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Searchbar />
      <Category />
      <GridList />
      <Faqs />
      <Footbar />
    </main>
  )
}