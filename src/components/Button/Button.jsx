import classes from './Button.module.css';

const Button = ({children, makeAnAppointment}) => {
    return (
        <form action="https://taplink.cc/podocomfort.ptz" target="_blank">
            <button className={classes.button} onClick={makeAnAppointment}>
                {children}
            </button>
        </form>

    )
}

export default Button;