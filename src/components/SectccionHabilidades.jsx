import { Fade } from "react-awesome-reveal"
import { habilitysData } from "../data/cvData"
import { Habilidades } from "./Habilidades"

export const SeccionSobreHabilidades = () => {

  return (
    <Fade>
        <section className="sobre_habilidades_contenedor" id="Habilidades">
            <div className="container text-center sobre_habilidades">
                <div className='row justify-content-center'>
                    <div className='col-12 text-start fs-5'>
                        <h2 className='fw-bold text-center pt-5 text-secondary d-flex justify-content-center sobre_educacion_text'>
                            <p className='text-tittle-nombre-color'>H</p>abilidades<img src="../../public/img/habilidades.png" alt="Sobre mi" className="img-custom-size"/>
                        </h2>
                        <p className='text-center text-secondary'> Tengo conocimientos en las siguientes tecnologías. </p>
                        <div className='d-flex flex-wrap mb-5'>
                            {
                                habilitysData.map( hability => (
                                    <div key={hability.name} className="col-3 text-center"><Habilidades hability={hability}/></div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fade>

  )
}
