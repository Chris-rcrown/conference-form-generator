import PropTypes from "prop-types";

export function Form ({ onSubmit, children, className}) {
    return (
        <form 
            onSubmit={onSubmit}
            className={`p-4 border border-[#0E464F] rounded-4xl ${className}`}
        >
            {children}
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}


Form.defaultProps = {
    onSubmit: (e) => e.preventDefault(),
    className: ' ',
}

export default Form