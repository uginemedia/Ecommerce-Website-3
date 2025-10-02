import React from 'react'
import { instagramFeed } from '../modules';

const InstagramFeed = () => {
  return (
    <section className="instagram-section">
      <h2 className="section-title">@sunic_store</h2>
      <div className="instagram-grid">
        {instagramFeed.map((img, index) => (
          <a href="#" className="insta-post" key={index}>
            <img src={img} alt={`Instagram post ${index + 1}`} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default InstagramFeed