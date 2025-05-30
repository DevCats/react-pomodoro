import SetPomodoro from './components/SetPomodoro.jsx'
import './App.css'

const App = () => {

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1>Pomodoro Timer</h1>
        <small>Simple productivity timer.</small>
        <SetPomodoro />
      </div>
    </>
  )
}

export default App