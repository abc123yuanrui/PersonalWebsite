import React from "react";
import { Carousel } from "react-responsive-carousel";

const gallery = [
  {
    url:"https://live.staticflickr.com/65535/49625616711_e464748c86_b.jpg",
    description: "Sun rise at Flagstaff"
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
      <div>
        <img src={url} />
      <p className="legend">{description}</p>
      </div>

    ))}
  </Carousel>
  </div>
);
