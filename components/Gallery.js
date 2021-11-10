import React from "react";
import { Carousel } from "react-responsive-carousel";

const gallery = [
  {
    url:"https://live.staticflickr.com/65535/51331454751_444c91a360_k_d.jpg",
    description: "Mount Lofty in Adelaide"
  },
  {
    url:"https://live.staticflickr.com/65535/51669375705_da1aa077e3_h_d.jpg",
    description: "Morning hiking"
  },
  {
    url:"https://live.staticflickr.com/65535/51330725132_2d7293dcbe_k_d.jpg",
    description: "Korora"
  },
  {
    url:"https://live.staticflickr.com/65535/51669365745_580b888d2c_k_d.jpg",
    description: "Night reflection"
  },
  {
    url:"https://live.staticflickr.com/65535/51668503876_29fa4dc37b_k_d.jpg",
    description: "Immersion show"
  },
  {
    url:"https://live.staticflickr.com/65535/50888874458_afbc012999_k_d.jpg",
    description: "Sun set at Adelaide beach-2"
  },
  {
    url:"https://live.staticflickr.com/65535/49625616771_59324d5dc7_b.jpg",
    description: "A lane near my home"
  },
  {
    url:"https://live.staticflickr.com/65535/51668506786_cbc6c1e891_k_d.jpg",
    description: "AU Asian Festivel lantern show"
  },
  {
    url:"https://live.staticflickr.com/65535/49641503718_f44c513261_k.jpg",
    description:"Level 13 in Melbourne Uni Medical School"
  },
  {
    url:"https://live.staticflickr.com/65535/49642027811_4014c8f7cb_k.jpg",
    description:"Hobart"
  },
  {
    url:"https://live.staticflickr.com/65535/49641508488_e896c0db7b_k.jpg",
    description:"Morning in Melbourne"
  },
  {
    url:"https://live.staticflickr.com/65535/49642315837_6fdaeb5717_k.jpg",
    description:"Scenary at Great Ocean Road"
  }]
export default () => (
   <div className='myGalleryContent'>
  <Carousel autoPlay showArrows>
    {gallery.map(({url,description})=>(
      <div key = {description}>
        <img src={url} />
      <p className="legend">{description}</p>
      </div>

    ))}
  </Carousel>
  </div>
);
