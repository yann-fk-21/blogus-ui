import React from 'react';

import Header from '@/components/layout/header';
import Hero from '@/components/specific/hero';
import Gallery from '@/components/specific/gallery';
import Pagination from '@/components/common/pagination';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Gallery />
      <Pagination />
      <Footer />
    </React.Fragment>
  );
}
