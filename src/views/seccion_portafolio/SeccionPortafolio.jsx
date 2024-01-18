import { useState } from "react";
import { projectsData } from "../../data/cvData"
import { Fade } from "react-awesome-reveal";
import { Proyecto } from "./components/Proyecto";

export const SeccionPortafolio = () => {

    const [selectImg, setSelectImg] = useState('');

  return (   
     <>
        <section className='container sobre_proyectos-contenedor' id="Proyectos">
        <div className="row sobre_proyectos">
            <div className="col-12">
                <h2 className='fw-bold text-center pt-5 text-secondary d-flex justify-content-center sobre_educacion_text'>
                    <p className='text-tittle-nombre-color'>P</p>ortafolio<img src="./img/portafolio.png" alt="Portafolio" className="img-custom-size"/>
                </h2>
            </div>
            <div className='col-12 d-flex flex-wrap gap-3 justify-content-center'>
                    
                { projectsData.map( (project, index) => (    
                    <div key={project.title} className="d-flex flex-wrap">
                        <Fade>              
                            <Proyecto index={index} project={project}/>
                        </Fade>
                    </div>
                    ))
                }
            </div>
        </div>
        </section>
    </>

  )
}
