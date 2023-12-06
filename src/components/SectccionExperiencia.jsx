import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { experienciaData } from "../data/cvData"

import 'swiper/css';
import 'swiper/css/pagination';
import { Fade } from 'react-awesome-reveal';

export const SeccionSobreExperiencia = () => {

  return (    
    <Fade>
      <section className="sobre_experiencia_contenedor" id="Experiencia">
          <div className="container text-center sobre_experiencia">
              <div className='row'>
                  <div className='col-12'>
                      <h2 className='fw-bold text-center pt-5 pb-5 d-flex justify-content-center sobre_experiencia_text'>
                        E<p className='text-secondary'>xperiencia</p><img src="./img/experiencia.png" alt="Experiencia" className="img-custom-size"/>
                      </h2>
                  </div>
                  <div className='mb-2 px-0 col-12 d-flex justify-content-center align-items-center experiencia_contenido'>
                    <Swiper
                      modules={[ Pagination, A11y]}
                      A11y={{
                        delay:3000,
                        disableOnInteraction: false
                      }}
                      pagination={{ 
                        ell:".pagination",
                        clickable: true 
                      }}
                      spaceBetween={10}
                      slidesPerView={4}
                      breakpoints={{
                        "@0.00":{
                          slidesPerView:1,
                        },
                        "@0.50":{
                          slidesPerView:1,
                        },
                        "@1.00":{
                          slidesPerView:2,
                        },
                        "@1.25":{
                          slidesPerView:3,

                        },
                        "@1.50":{
                          slidesPerView:4,

                        },
                        "@1.75":{
                          slidesPerView:4,
                        },

                      }}
                      onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log('slide change')}
                    >
                      {experienciaData.map((data,index)=>(
                        <SwiperSlide key={index}>
                          <div className="card mb-5 mx-auto sobre_experiencia-card">
                            <div className="card-header">
                              <h5 className='text-light'>{data.subtitle}</h5>
                              <p className='text-light'>{data.date}</p>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title text-light mt-2 ps-2 pe-2">{data.title}</h5>
                              <p className="card-text sobre_experiencia-inf mt-4 ps-2 pe-2">{data.description}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="pagination"></div>
              </div>
          </div>
      </section>
    </Fade> 

  )
}
