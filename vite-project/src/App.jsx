import { useState } from 'react'
import { questions } from "./questions";
import SingleQuestion from "./components/SingeQuestion";
import './App.css'

function App() {
  const [cards] = useState(questions);

  return (
    <>
      <div>
        <h1>
          Challenge Faqs
        </h1>

        <div>
          {cards.map((card, index) => (
            <SingleQuestion  {...card} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
