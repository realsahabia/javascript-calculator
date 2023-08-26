import './Output.css';

const Output = ({content, result}) => {
    return (
        <div className='output-wrapper'>
            <div className="result">{ result }</div>
            <div className="input">{ content }</div>
        </div>
    )
}

export default Output;