import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg"
import "./Carousel.scss"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

import React, { useRef } from 'react'

const Carousel = () => {

  const sliderRef = useRef(null)


  const data = [
    {
      imgColl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Woman Portrait",
      imgProf: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      profName: "@Lofiartist"
    },
    {
      imgColl: "https://images.unsplash.com/photo-1634295912158-9c847b6b3a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjBib3h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "3D Box",
      imgProf: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      profName: "@saymyname"
    },
    {
      imgColl: "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBzaGFwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Gradient Shape",
      imgProf: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      profName: "@Mrslopez"
    },
    {
      imgColl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Man Portrait",
      imgProf: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      profName: "@James"
    },
    {
      imgColl: "https://images.unsplash.com/photo-1633679317861-03829e0a968e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Artwork",
      imgProf: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      profName: "@Robert"
    },
    {
      imgColl: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Art",
      imgProf: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      profName: "@Patricia"
    }
  ]
  var settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    ref: sliderRef,
    arrow: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          arrow: false,

        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrow: false,

        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrow: false,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };


  return (
    <div className="trending__section">
      <div className="trending__section-first">
        <h3>Carousel</h3>
        <div className="trending__section-arrow">
          <div className="first__arrow" onClick={() => sliderRef.current.slickPrev()}><CgArrowLongLeft /></div>
          <div className="second__arrow" onClick={() => sliderRef.current.slickNext()}><CgArrowLongRight /></div>
        </div>
      </div>

      <div className="Slider__section">
        <Slider
          {...settings}
          arrows={false}
        >

          {
            data.map((item) => (
              <div class="container">
                <div class="card">
                  <div class="card__header">
                    <img src={item.imgColl} alt="card__image" class="card__image" width="600" />
                  </div>
                  <div className="card__elements">
                    <div className="card__first-section">
                      <p className="card__title">{item.title}</p>
                      <div className="card__first-section__image">
                        <img src={item.imgProf} alt="" />
                        <p className="card__name">{item.profName}</p>
                      </div>

                      <p className="card__para1">Reserve Price</p>
                      <div className="card__first-section-price">
                        <p>1.05ETH</p>
                        <p className="card__para-small">($3847.56)</p>
                      </div>
                    </div>


                    <div className="card__second-section">
                      <p className="card__second-section__title">Auction ends in</p>
                      <div className="card__second-section-time">
                        <div className="card__second-section-first-div">                                                 <h3>22</h3>                                                 <p className="paragraph">Hours</p>
                        </div>
                        <div className="card__second-section-second-div">                                                 <h3>15</h3>                                                 <p className="paragraph">Mins</p>                                             </div>                                             <div className="card__second-section-third-div">
                          <h3>33</h3>
                          <p className="paragraph">Secs</p>
                        </div>
                      </div>
                      <button>Place Bid <HiOutlineArrowNarrowRight /></button>                                     </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div >
  )
}

export default Carousel