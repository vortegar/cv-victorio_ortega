import './styles_sobre_mi.css'

export const SeccionSobreMi = () => {
  return (
      <section className="container text-center sobre_mi px-0">
          <div className="sobre_mi_container mt-5 d-flex justify-content-center">
            <h2 className='fw-bold text-start sobre_mi_text d-flex pt-4'>
              S<p className='sobre_mi_text_title'>obre mi</p> 
              <img src="./img/usuario.png" alt="Sobre mi" className="img-custom-size"/>
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-6 fs-5 mt-5'>
              <p className='mt-4  ps-3 pe-3 text-start sobre_mi_text_descp'>
                <span className='text-light'>
                  Arquitecto con conocimientos en programación orientada a objetos, desarrollo web y metodologías ágiles.&nbsp;
                </span> 
                Con experiencia en trato con clientes, creación de propuestas técnicas y comerciales, gestión de proyectos trabajando con equipos interdisciplinarios.
                <br/>
                <br/> 
                  <span className='text-light'>
                    Tengo experiencia en el uso de tecnologías front-end como Html, Css, JavaScript, TypeScript, React, y NextJs.
                    Del lado del Back-end tengo experiencia usando las tecnologias de NodeJs, Python y Ruby, Bases de Datos SQL y no SQL
                  </span>.
              </p>
              <p className='mt-4  ps-3 pe-3 text-start sobre_mi_text_descp d-none d-md-block'> 
                Poseo una actitud proactiva y un enfoque orientado a la resolución de problemas en el desarrollo de aplicaciones. Estoy constantemente aprendiendo y manteniéndome actualizada sobre las últimas tendencias y tecnologías en desarrollo web.
                <br/>
                <br/>
                <span className='text-light'>
                  Busco oportunidades desafiantes que me permitan crecer profesionalmente y contribuir al éxito de la organización a través de la excelencia técnica y la pasión por el desarrollo.
                </span> 
              </p>
            </div>
            <div className="col-lg-6">
                <img src="./img/sobre-mi.jpg" alt="sobre mi" className="sobre_mi_img" />
            </div>
          </div>
      </section>
  )
}
