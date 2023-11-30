import { Fade } from "react-awesome-reveal"
import { educationData } from "../data/cvData"
import { Education } from "./Education"

export const SeccionSobreEducacion = () => {
  return (    
    <Fade>
        <section className="sobre_educacion_contenedor" id="Educacion">
            <div className="container text sobre_educacion">
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='fw-bold text-center pt-5 pb-5 text-secondary d-flex justify-content-center sobre_educacion_text'>
                            <p className='text-tittle-nombre-color'>E</p>ducación<img src="./img/gorro-de-graduacion.png" alt="Educacion" className="img-custom-size"/>
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
    </Fade>

  )
}
