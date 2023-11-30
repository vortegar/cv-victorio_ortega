import { Fade } from "react-awesome-reveal"

export const SeccionSobreMi = () => {
  return (
    <Fade>
      <section className="container text-center sobre_mi">
          <div className='row'>
              <div className='col-6 fs-5 mt-5'>
                <div className="sobre_mi_container mt-5 d-flex justify-content-center">
                  <h2 className='fw-bold text-start sobre_mi_text d-flex pt-4'>
                    S<p className='text-secondary'>obre mi</p> <img src="./img/usuario.png" alt="Sobre mi" className="img-custom-size"/>
                  </h2>
                </div>

                  <p className='mt-4  ps-3 pe-3 text-start text-secondary'>
                    Arquitecto con conocimientos en programación orientada a objetos, desarrollo web y metodologías ágiles. Con experiencia en trato con clientes, creación de propuestas técnicas y comerciales, gestión de proyectos trabajando con equipos interdisciplinarios. <br/><br/>
                    <strong className="text-light">Tengo experiencia en el uso de tecnologías front-end como Html, Css, JavaScript, TypeScript, la biblioteca React, y el framework NextJs. 
                    Del lado del Back-end tengo experiencia usando las tecnologias de NodeJs, Bases de Datos SQL y no SQL. </strong> Además, tengo habilidades sólidas en la optimización del rendimiento web y la resolución de problemas relacionados con la compatibilidad entre navegadores. <br/><br/>
                    Poseo una actitud proactiva y un enfoque orientado a la resolución de problemas. Estoy constantemente aprendiendo y manteniéndome actualizada sobre las últimas tendencias y tecnologías en desarrollo web. Busco oportunidades desafiantes que me permitan crecer profesionalmente y contribuir al éxito de la organización a través de la excelencia técnica y la pasión por el desarrollo.
                  </p>
              </div>
              <div className="col-6 mt-5">
                <div className="mt-5">
                  <img src="./img/sobre-mi.jpg" alt="sobre mi" className="sobre_mi_img" />
                </div>
              </div>
          </div>
      </section>
    </Fade>

  )
}
