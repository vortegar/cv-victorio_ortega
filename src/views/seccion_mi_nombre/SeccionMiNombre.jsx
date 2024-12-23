import { Icons } from "../../icons/Icons"
import './styles_mi_nombre.css'

export const SeccionMiNombre = () => {
  return (
    <>
        <section  className='container name_cv'>
            <div className='row my-5'>
                <div className=' col-12 d-lg-flex text-center name_cv_text d-block justify-content-center mt-lg-5'> 
                    <p className='text-color-name'>Victorio</p>
                    <p className='text-color-name ps-lg-4'>Ortega</p>
                </div>
                <div className='mt-3'>
                    <div className="h1-first mt-5 d-flex justify-content-center">
                        <span className="typewriter fs-5 text-secondary"></span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='col-12 my-3'>
                <Icons styles='d-flex justify-content-center align-items-center'/>
            </div>            
        </section>
    </>
  )
}
