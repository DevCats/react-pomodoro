import { useState } from 'react';
import Button from './Button.jsx'

// Component that deals with setting the pomodoro timer
const SetPomodoro = () => {
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()

    const handleChange = _input => {
        const name = _input.target.name
        const value = _input.target.value
        console.log(value + ' ' + name)
        name == 'hours' ? setHour(value) : setMinute(value)
    }

    const handleSubmit = _event => {
        _event.preventDefault()

    }

    return (
        <>
            <div className='text-center'>
                <form noValidate>
                    <div className='m-[1.5rem] h-[10rem] w-[10rem] border border-black border-solid rounded-[50%] flex flex-row justify-center items-center'>
                        <div className='flex flex-col items-center'>
                            <Button className='incrementBtn' />
                            <input className='tInput' type='number' name='hours' placeholder='00' max='12' min='0' disabled onChange={ handleChange } value={ hour } />
                            <Button className='decrementBtn' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <Button className='incrementBtn' />
                            <input className='tInput' type='number' name='minutes' placeholder='00' max='59' min='1' disabled onChange={ handleChange } value={ minute } />
                            <Button className='decrementBtn' />
                        </div>
                    </div>
                    <Button className='submitBtn' title='Set Timer' callbackFn={ handleSubmit } />
                </form>
            </div>
        </>
    )
}

export default SetPomodoro