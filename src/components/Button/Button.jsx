import './Button.css';

const Button = ({children, makeAnAppointment}) => {
    return (
        <button className="button" onClick={makeAnAppointment}>
            {children}
        </button>

    )
}

export default Button;