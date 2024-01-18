import { Icons } from "../../icons/Icons"

export const Footer = () => {
  return (
    <footer className="container  text-center mb-2 sobre_footer">
        <div className='row'>
          <div className='col-12'>
            <h2 className='fw-bold sobre_footer_text'>Materializando ideas</h2>
            <p className='text-secondary mb-0'>Muchas gracias por visitar mi portafolio. No dudes en contactarme si me necesitas.</p>
            <Icons styles='d-flex justify-content-center gap-4 mt-2 mb-2'/>
            <hr/>
            <p className='text-secondary'>Elaborado por 🎖️ Victorio Ortega</p>
          </div>
        </div>
    </footer>
  )
}
