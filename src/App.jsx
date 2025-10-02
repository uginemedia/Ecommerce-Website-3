import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import FullWidthBanner from "./components/FullWidthBanner";
import CreateLook from "./components/CreateLook";
import CollectionBanners from "./components/CollectionBanners";
import Beliefs from "./components/Beliefs";
import BlogPosts from "./components/BlogPosts";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";

// Import Modules
import { bestSellers, recentArrivals } from "./modules";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid title="Best Sellers" products={bestSellers} />
        <FullWidthBanner />
        <CreateLook />
        <ProductGrid title="Recent Arrivals" products={recentArrivals} />
        <CollectionBanners />
        <Beliefs />
        <BlogPosts />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
};

export default App;
