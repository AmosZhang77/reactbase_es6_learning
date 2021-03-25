import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App () {
  const [ok, setOk] = useState(1)
  const d1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1)
        resolve()
      }, 2001)
    })
  }
    const d2 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(2)
          resolve()
        }, 2000)
      })
    }
    const d3 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(3)
          resolve()
        }, 2000)
      })
    }
    const start = async () => {
      await d1()
      await d2()
      await d3()
      setOk((old) => {return old += 1})
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>{ok}
          </p>
          <button onClick={start}>start</button>

        </header>
      </div>
    )
  }

  export default App
