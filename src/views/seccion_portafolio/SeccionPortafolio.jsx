import { projectsData } from "../../data/cvData"
import { Fade } from "react-awesome-reveal";
import { Proyecto } from "./components/Proyecto";
import './styles_portafolio.css'

export const SeccionPortafolio = () => {

  return (   
     <>
        <section className='container sobre_proyectos-contenedor' id="Proyectos">
        <div className="row sobre_proyectos">
            <div className="col-12">
                <h2 className='fw-bold text-center pt-5 d-flex justify-content-center sobre_portafolio_text'>
                    P<p className='sobre_portafolio_text_title'>ortafolio</p><img src="./img/portafolio.png" alt="Portafolio" className="img-custom-size"/>
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
