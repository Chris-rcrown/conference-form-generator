import PropTypes from "prop-types"

export function Button({
      text,
      onClick,
      disable,
      hidden,
      children,
      link,
      title,
      icon,
      className,
      onMouseEnter,
      onMouseLeave,
}) {
  return (
    
      <button
        onClick = {onClick}
        disabled = {disable}
        hidden = {hidden}
        className = {`button-solid jutify-center items-center px-3 py-3 gap-3 rounded-xl cursor-pointer button ${className}`}
        title= {title}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...(link? {href: link} : {})}
      >
        {icon && <span className={`icon ${icon}`}/>}
        {text}
        {children}
      </button>
       
  )
}
Button.propTypes ={
  text: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  hidden: PropTypes.bool,
  children: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}
Button.defaultProps = {
  text: '',
  disable: false,
  hidden: false,
  className: '',
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {}
}

export default Button
