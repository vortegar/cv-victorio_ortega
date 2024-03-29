import { useState } from "react";
import { projectsData } from "../../../data/cvData";

export const Proyecto = ({ index, project }) => {
    
    const [selectImg, setSelectImg] = useState('');
        
    const changeStyles = (selectProject, index) => {
        
        projectsData.filter( p => {
            
            if(p.title === selectProject.title){
                setSelectImg(document.getElementById(`${index}`));

                if(selectImg){
                    selectImg.classList.remove("img_project_remove")
                    selectImg.classList.add("img_project")
                }else{
                    let temporal = document.getElementById(`${index}`)
                    temporal.classList.remove("img_project_remove")
                    temporal.classList.add("img_project")
                }
                
                
            }
        })
    }           

    const changeStylesDefault = () => {
        selectImg.classList.remove("img_project");
        selectImg.classList.add("img_project_remove");
        setSelectImg('')
    }

  return (
    <div className="col-12 col-md-6">
        <div className="tamanio-card-portafolio my-4 mx-auto text-center">
            <div className='contenedor_project'>
                <img 
                    id={index}
                    src={project.img} 
                    className={`card-img-top text-center}`}
                    alt={project.alt}/>
            </div>
            <div className=" card card-body card_custom">
                <h5 className="card-title fw-bold text-start ms-3 mt-2 text_color">{project.title}</h5>
                <p className="card-text text-start text-light mt-2 ms-3 me-3">{project.description}</p>
                <p className="card-text text-start mt-2 ms-3 text-light">tecnologias:</p>
                <div className='mb-3 ms-3 text-start'>
                    {
                        (project.tech.javascript) && <i className="fa-brands fa-square-js fa-xl me-3 icon_color"></i>
                    }
                    {
                        (project.tech.bootstrap) && <i className="fa-brands fa-bootstrap fa-xl me-3 icon_color"></i>
                    }
                    {
                        (project.tech.nodeJs) && <i className="fa-brands fa-node-js fa-xl me-3 icon_color"></i>
                    }
                    {
                        (project.tech.sass) && <i className="fa-brands fa-sass fa-xl me-3 icon_color"></i>
                    }
                    {
                        (project.tech.react) && <i className="fa-brands fa-react fa-xl me-3 icon_color"></i>
                    }
                    {
                        (project.tech.css) && <i className="fa-brands fa-css3 fa-xl me-3 icon_color"></i>
                    }
                    {
                        (project.tech.html) && <i className="fa-brands fa-html5 fa-xl me-3 icon_color"></i>
                    }
                </div>
                <a href={ project.ref } target='_blanck' >
                    <button 
                        onMouseEnter={() => changeStyles(project, index)} 
                        className="btn color-boton text-light"
                        onMouseLeave={changeStylesDefault}
                    >
                        Visitar
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}
