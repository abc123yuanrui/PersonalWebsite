import React from "react";
import { Carousel } from "react-responsive-carousel";

const gallery = [
  {
    url:"https://live.staticflickr.com/65535/51331454751_444c91a360_k_d.jpg",
    description: "Mountain view in Adelaide"
  },
  {
    url:"https://live.staticflickr.com/65535/51330725132_2d7293dcbe_k_d.jpg",
    description: "Korora"
  },
  {
    url:"https://live.staticflickr.com/65535/51331669673_f0d5b93a4c_k_d.jpg",
    description: "Waterfall"
  },
  {
    url:"https://live.staticflickr.com/65535/50889587191_f3dd3fc7ad_k_d.jpg",
    description: "Sun set at Adelaide beach-1"
  },
  {
    url:"https://live.staticflickr.com/65535/50888874458_afbc012999_k_d.jpg",
    description: "Sun set at Adelaide beach-2"
  },
  {
    url:"https://live.staticflickr.com/65535/49625616711_e464748c86_b.jpg",
    description: "Sun rise at Flagstaff"
  },
  {
    url:"https://live.staticflickr.com/65535/50889587116_76a416ff8d_k_d.jpg",
    description: "Street art"
  },
  {
    url:"https://live.staticflickr.com/65535/49625616771_59324d5dc7_b.jpg",
    description: "A lane near my home"
  },
  {
    url:"https://live.staticflickr.com/65535/49625098788_d7ac38f7d5_b.jpg",
    description: "Sun set at Flagstaff"
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
