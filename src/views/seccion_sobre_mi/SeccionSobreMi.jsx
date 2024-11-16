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
                  Desarrollador frontend con conocimientos en backend, fomación autodidacta y en constante desarrollo.&nbsp;
                </span> 
                Me mantengo investigando constantemente sobre las nuevas tecnologías del mercado para mantenerme actualizado.
                <br/>
                <br/> 
                  <span className='text-light'>
                    Tengo experiencia en el uso de tecnologías front-end como Html, Css, JavaScript, TypeScript, React, y NextJs.
                    Del lado del Back-end tengo experiencia usando las tecnologias de NodeJs, Python y Ruby, Bases de Datos SQL y no SQL
                  </span>.
              </p>
              <p className='mt-4  ps-3 pe-3 text-start sobre_mi_text_descp d-none d-md-block'> 
              <span className='text-light'>
                Me considero una persona comprometida, responsable, honesta y en continuo aprendizaje.&nbsp;
              </span>
              Disfruto colaborar en equipo, aportando ideas y soluciones innovadoras a los proyextos en que participo.
              </p>
            </div>
            <div className="col-lg-6">
                <img src="./img/sobre-mi.jpg" alt="sobre mi" className="sobre_mi_img" />
            </div>
          </div>
      </section>
  )
}
