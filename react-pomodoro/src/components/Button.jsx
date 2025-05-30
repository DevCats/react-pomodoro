// Button component
const Button = ({ title, id, className, callbackFn }) => {
    return (
        <>
            <button id={id} className={ className } onClick={ callbackFn }>{ title }</button>
        </>
    )
}

export default Button