import { educationData } from "../../data/cvData"
import { Education } from "./components/Education"
import './styles_educacion.css'
export const SeccionSobreEducacion = () => {
  return (    
    <>
        <section className="sobre_educacion_contenedor" id="Educacion">
            <div className="container text sobre_educacion">
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='fw-bold text-center pt-5 pb-5 d-flex justify-content-center sobre_educacion_text'>
                          E<p className='sobre_educacion_text-title'>ducación</p><img src="./img/gorro-de-graduacion.png" alt="Educacion" className="img-custom-size"/>
                        </h2>
                    </div>
                    <div className='mb-5 col-12 d-flex flex-column justify-content-center align-items-start'>
                        {
                            educationData.map( education => (
                                <Education key={education.course} education={education}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>

  )
}
