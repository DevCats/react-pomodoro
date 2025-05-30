import SetPomodoro from './components/SetPomodoro.jsx';
import './App.css';

const App = () => {

  return (
    <>
      <div className='flex flex-col items-center justify-center mt-[3rem]'>
        <h1 className='text-4xl font-bold'>Pomodoro Timer</h1>
        <small className='font-semibold'>Simple productivity timer.</small>
        <SetPomodoro />
      </div>
    </>
  )
}

export default App