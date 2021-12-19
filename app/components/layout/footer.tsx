import {Link} from "remix"

const Footer = () => (
  <footer
    className={`
      bg-transparent
      h-32
      shadow-2xl
      `}
  >
    <Link to="/">
      <strong
        className={`
          transition-all 
          duration-200
          text-3xl
          font-title
          `}
      >
        Wiki Go
      </strong>
    </Link>
  </footer>
)

export default Footer
