import './styles_navbar.css'
export const List = ({ title, href }) => {
  return (
    <li className="nav-item ms-5">
        <a className="nav-link active hover_link" aria-current="page" href={href}>{title}</a>
    </li>
  )
}
