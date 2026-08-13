import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  const [health, setHealth] = React.useState(null)
  const [message, setMessage] = React.useState('')
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:8000/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch(() => setHealth('error'))

    fetch('http://localhost:8000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Could not load message'))

    fetch('http://localhost:8000/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => setItems([]))
  }, [])

  return (
    <div className="app">
      <h1>FastAPI + React Demo</h1>

      <div className="card">
        <p><strong>Backend health:</strong> {health || 'Loading...'}</p>
        <p><strong>Message:</strong> {message || 'Loading...'}</p>
      </div>

      <h2>Products</h2>
      <ul className="product-list">
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <strong>${item.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
