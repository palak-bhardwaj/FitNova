import React from "react";
import Slider from "react-slick";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="gallery" className="bg-black py-20 px-6">
      <h1 className="text-center text-[#0095ff] text-3xl font-bold mb-10">
        Better Beats Best
      </h1>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {gallery.map((src, i) => (
            <div key={i} className="px-2">
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
