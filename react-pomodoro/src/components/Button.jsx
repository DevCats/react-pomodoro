// Button component
const Button = ({ title, className, callbackFn }) => {
    return (
        <>
            <button className={ className } onClick={ callbackFn }>{ title }</button>
        </>
    )
}

export default Button