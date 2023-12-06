import { Icons } from './components/Icons';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SeccionSobreMi } from './components/SectccionSobreMi';
import { SeccionSobreHabilidades } from './components/SectccionHabilidades';
import { SeccionSobreEducacion } from './components/SectccionEducacion';
import { SeccionPortafolio } from './components/SectccionPortafolio';
import { SeccionSobreExperiencia } from './components/SectccionExperiencia';
import './styles.css'

import { Fade } from 'react-awesome-reveal';

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
            <section  className='container name_cv'>
                <div className='row my-5'>
                    <div className=' col-12 d-lg-flex text-center name_cv_text d-block justify-content-center mt-lg-5'> 
                        <p className='text-light'>Victorio</p>
                        <p className='text-light ps-lg-4'>Ortega</p>
                    </div>
                    <div className='mb-2 mt-3'>
                        <div className="h1-first d-flex justify-content-center">
                            <span className="typewriter fs-5 text-secondary"></span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5'>
                <div className='col-12 my-3'>
                    <Icons styles='d-flex justify-content-center align-items-center'/>
                </div>            
            </section>
        </Fade>        

        <SeccionSobreMi/>
        <SeccionSobreExperiencia/>
        <SeccionSobreEducacion/>
        <SeccionSobreHabilidades/>
        <SeccionPortafolio/>            
            
        
        <Footer/>
    </>
        
  )
}
export default Curriculum

