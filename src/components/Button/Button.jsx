import classes from './Button.module.css';

const Button = ({children, makeAnAppointment}) => {
    return (
        <button className={classes.button} onClick={makeAnAppointment}>
            {children}
        </button>

    )
}

export default Button;