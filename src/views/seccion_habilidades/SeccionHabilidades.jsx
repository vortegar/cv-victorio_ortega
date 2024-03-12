import { habilitysData } from "../../data/cvData"
import { Habilidades } from "./components/Habilidades"
import './styles_habilidades.css'

export const SeccionSobreHabilidades = () => {

  return (
    <>
        <section className="sobre_habilidades_contenedor" id="Habilidades">
            <div className="container text-center sobre_habilidades">
                <div className='row justify-content-center'>
                    <div className='col-12 text-start fs-5 '>
                        <h2 className='fw-bold text-center pt-5 d-flex justify-content-center sobre_habilidades_text'>
                            H<p className='sobre_habilidades_text_title'>abilidades</p><img src="./img/habilidades.png" alt="Sobre mi" className="img-custom-size"/>
                        </h2>
                        <p className='text-center sobre_habilidades_text_title'> Poseo conocimientos en las siguientes tecnologías. </p>
                        <div className='d-flex flex-wrap mb-5'>
                            {
                                habilitysData.map( hability => (
                                    <div key={hability.name} className=" col-4 col-lg-3 text-center">
                                        <Habilidades hability={hability}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
