import { Fade } from "react-awesome-reveal"

export const SeccionSobreMi = () => {
  return (
    <Fade>
      <section className="container text-center sobre_mi">
          <div className='row justify-content-center'>
              <div className='col-6 fs-5 mt-5'>
                  <h2 className='fw-bold text-start mt-5 sobre_mi_text d-flex'>S
                    <p className='text-secondary'>obre mi</p> <img src="../../public/img/usuario.png" alt="Sobre mi" className="img-custom-size"/>
                  </h2>
                  <p className='mt-4 text-start text-secondary'>
                    Arquitecto con conocimientos en programación orientada a objetos, desarrollo web y metodologías ágiles. Con experiencia en trato con clientes, creación de propuestas técnicas y comerciales, gestión de proyectos trabajando con equipos interdisciplinarios. <br/><br/>
                    Tengo experiencia en el uso de <strong>tecnologías front-end como Html, Css, JavaScript, TypeScript, NodeJs y la biblioteca React.js.</strong> Además, tengo habilidades sólidas en la optimización del rendimiento web y la resolución de problemas relacionados con la compatibilidad entre navegadores. <br/><br/>
                    Poseo una actitud proactiva y un enfoque orientado a la resolución de problemas. Estoy constantemente aprendiendo y manteniéndome actualizada sobre las últimas tendencias y tecnologías en desarrollo web. Busco oportunidades desafiantes que me permitan crecer profesionalmente y contribuir al éxito de la organización a través de la excelencia técnica y la pasión por el desarrollo.
                  </p>
              </div>
              <div className="col-6">
                
              </div>
          </div>
      </section>
    </Fade>

  )
}
