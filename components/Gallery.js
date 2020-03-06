import React from "react";
import { Carousel } from "react-responsive-carousel";

const galleryUrl = {
    sunset:"https://drive.google.com/uc?id=0Bwezf3fxXVZkZlNqM2ExY19uUlVrNW0teUF0dTZZNXJuSjE4",
    lane:"https://drive.google.com/uc?id=1yDjSSwl4x1TgPFWCOhdPfQHSzum8FGqx",
    sunrise:"https://drive.google.com/uc?id=1fh2KU25-JT_iL6PT_u8mHrxPgfiXBzZ_"
}
export default () => (
   <div className='myGalleryContent'>
  <Carousel autoPlay showArrows>
    <div>
      <img src="https://live.staticflickr.com/65535/49625616711_e464748c86_b.jpg" />
      <p className="legend">Sun rise at Flagstaff</p>
    </div>
    <div>
      <img src="https://live.staticflickr.com/65535/49625616771_59324d5dc7_b.jpg" />
      <p className="legend">A lane near my home</p>
    </div>
    <div>
      <img src="https://live.staticflickr.com/65535/49625098788_d7ac38f7d5_b.jpg" />
      <p className="legend">Sun set at Flagstaff</p>
    </div>
  </Carousel>
  </div>
);
