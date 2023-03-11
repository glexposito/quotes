import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const heightClass = 'h-100'
    document.body.classList.add(heightClass)
    const root = document.getElementById('root');
    if (root != null) {
      root.classList.add(heightClass);
    }
  })

  return (
    <div className="App">
      <main className="px-3">
        <h1>Aristotle</h1>
        <p className="lead">Knowing yourself is the beginning of all wisdom.</p>
      </main>
    </div>
  )
}

export default App
