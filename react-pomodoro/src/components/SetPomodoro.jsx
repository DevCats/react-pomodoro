import { useState } from 'react';

// Component that deals with setting the pomodoro timer
const SetPomodoro = () => {
    // Setting default state for timers in minutes & the default class for the timer
    const [newTimer, setNewTimer] = useState({
        pomodoro: 25,
        short: 5,
        long: 15,
        active: 'pomodoro'
    });

    const handleChange = _input => {
        // Destructure _input.target to get name and value 
        const {name, value} = _input.target;
        switch (name) {
            case 'pomodoro':
                // Update the relevant key with its changed value
                setNewTimer({
                    ...newTimer,
                    pomodoro: parseInt(value)
                });
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                });
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                });
                break;
            default:
                break;
        }
    }

    const handleSubmit = _event => {
        _event.preventDefault();
    }

    return (
        <>
            <div className='text-center'>
                <form noValidate onSubmit={ handleSubmit }>
                    <div className='m-[1.5rem] flex flex-row justify-center items-center'>
                        <div className='flex flex-col-reverse text-sm font-semibold'>
                            <label htmlFor='pomodoro'>Pomodoro</label>
                            <input id='pomodoro' className='tInput' type='number' name='pomodoro' placeholder='00' max='59' min='0' onChange={ handleChange } value={ newTimer.pomodoro } />
                        </div>
                        <div className='flex flex-col-reverse text-sm font-semibold'>
                            <label htmlFor='shortBreak'>Short Break</label>
                            <input id='shortBreak' className='tInput' type='number' name='shortBreak' placeholder='00' max='59' min='0' onChange={ handleChange } value={ newTimer.short } />
                        </div>
                        <div className='flex flex-col-reverse text-sm font-semibold'>
                            <label htmlFor='longBreak'>Long Break</label>
                            <input id='longBreak' className='tInput' type='number' name='longBreak' placeholder='00' max='59' min='0' onChange={ handleChange } value={ newTimer.long } />
                        </div>
                    </div>
                    <button className='submitBtn' type='submit'>Set Timer</button>
                </form>
            </div>
        </>
    )
}

export default SetPomodoro