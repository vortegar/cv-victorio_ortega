import { Footer } from './views/seccion_footer/Footer';
import { SeccionSobreMi } from './views/seccion_sobre_mi/SeccionSobreMi';
import { SeccionPortafolio } from './views/seccion_portafolio/SeccionPortafolio';
import { SeccionSobreEducacion } from './views/seccion_educacion/SeccionEducacion';
import { SeccionSobreExperiencia } from './views/seccion_experiencia/SeccionExperiencia';
import { SeccionSobreHabilidades } from './views/seccion_habilidades/SeccionHabilidades';

import './styles.css'

import { Fade } from 'react-awesome-reveal';

import { Navbar } from './views/seccion_navbar/Navbar';
import { SeccionMiNombre } from './views/seccion_mi_nombre/SeccionMiNombre';

function Curriculum() {

    return(
    <>    
    <header>
        <div className="icon_menu"></div>
        <div className="scroll-line"></div>
    </header>
        
    <Navbar/>
    <div id="Nombre"></div>
        <Fade>
            <SeccionMiNombre/>
            <SeccionSobreMi/>
            <SeccionSobreExperiencia/>
            <SeccionSobreEducacion/>
            <SeccionSobreHabilidades/>
            <SeccionPortafolio/>            
        </Fade>        
        <Footer/>
    </>
        
  )
}
export default Curriculum

