import './Buttons.css';

const Button = ({value, handleClick}) => {

    return (
        <div className="btn-wrapper" onClick={() => handleClick(value)}>
            {value}
        </div>
    )
}

export default Button;