
export const Education = ({education}) => {
  return (
        <div className="d-flex educacion_contenido ms-5 mt-1" key={education.course}>
          <i className="fas fa-chevron-right fa-1x mt-1 text-secondary"></i>
          <p className="text-secondary text-start ps-2"> <span className="text-nombre-educacion">{education.course} </span>{education.institute} {education.date}</p>
        </div>
  )
}
