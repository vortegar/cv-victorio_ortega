import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { experienciaData } from "../../data/cvData"

import './styles_experiencia.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

export const SeccionSobreExperiencia = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (    
    <>
      <section className="sobre_experiencia_contenedor" id="Experiencia">
          <div className="container text-center sobre_experiencia">
              <div className='row'>
                  <div className='col-12'>
                      <h2 className='fw-bold text-center pt-5 pb-5 d-flex justify-content-center sobre_experiencia_text'>
                        E<p className='sobre_experiencia_text-title'>xperiencia</p><img src="./img/experiencia.png" alt="Experiencia" className="img-custom-size"/>
                      </h2>
                  </div>
                  <div className='mb-2 px-0 col-12 justify-content-center align-items-center experiencia_contenido'>
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
                      spaceBetween={20}
                      slidesPerView={isMobile ? 1 : 3}
                    >
                      {experienciaData.map((data,index)=>(
                        <SwiperSlide key={index}>
                          <div className="card mb-5 mx-auto sobre_experiencia-card">
                            <div className="sobre_experiencia-card-header">
                              <h5 className='sobre_experiencia-card-subtitle mt-3'>{data.subtitle}</h5>
                              <p className='text-center sobre_experiencia-card-date'>{data.date}</p>
                            </div>
                            <div className="card-body sobre_experiencia-card-body">
                              <h5 className="text-center card-title sobre_experiencia-company mt-2 px-2">{data.title}</h5>
                              <p className="card-text text-center sobre_experiencia-inf mt-4 px-2">{data.description}</p>
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
    </> 
  )
}
