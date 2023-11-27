
export const List = ({ title, href }) => {
  return (
    <li className="nav-item link_hover ms-5">
        <a className="nav-link active color_link hover_link"  aria-current="page" href={href}>{title}</a>
    </li>
  )
}
