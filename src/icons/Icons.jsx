import { GithubIcon } from "./icons-file/GithubIcon";
import { LinkedinIcon } from "./icons-file/LinkedinIcon";
import { PdfIcon } from "./icons-file/PdfIcon";
import { WhatsappIcon } from "./icons-file/WhatsappIcon";

export const Icons = ({styles}) => {
  return (
    <div className={styles}>
        <div className="mt-2 me-5">
            <a href="https://www.linkedin.com/in/victorioortega/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon helpertext='Linkedin'/>
            </a>
        </div>
        <div className="mt-2 me-5">
            <a href="https://github.com/vortegar" target="_blank" rel="noopener noreferrer">
                <GithubIcon helpertext='Github'/>
            </a>
        </div>
        <div className="mt-2 me-5">
            <a href="https://api.whatsapp.com/send/?phone=56931372408&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon helpertext='Whatsapp'/>
            </a>
        </div>
        <div className="mt-2">
            <a href="../../public/Download/CV_Victorio_Ortega.pdf" download="CV-Victorio-Ortega" target="_blank" rel="noopener noreferrer">
                <PdfIcon helpertext='Descargar Cv'/>
            </a>
        </div>
    </div>
  )
}
