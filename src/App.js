import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
const App = () => {
  const [data, setData] = useState([])
  const [word, setWord] = useState('')

  const add = () => {
    setWord('')
    setData([...data, {id: uuidv4(), item: word, len: word.length}])
  }

  return (
    <div className="main-container">
      <div className="ans-container">
        <div className="cap-container">
          <h1 className="head1">Count the characters like a Boss...</h1>
        </div>
        <div className="sol-container">
          {data.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              className="image"
              alt="no user inputs"
            />
          ) : (
            <ul className="item-container">
              {data.map(each => (
                <li key={each.id} className="item">
                  <p className="name">{each.item} :&nbsp;&nbsp;</p>
                  <p className="name"> {each.len}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="input-container">
        <div className="i">
          <h1 className="head2">Character Counter</h1>
          <div className="input">
            <form>
              <input
                type="text"
                placeholder="Enter the characters here"
                className="form-input"
                value={word}
                onChange={e => setWord(e.target.value)}
              />
              <button type="button" className="button" onClick={add}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
