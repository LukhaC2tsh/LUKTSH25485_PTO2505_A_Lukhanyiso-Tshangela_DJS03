import { useState, useEffect } from 'react'
import PodcastPreviewCard from './components/PodcastPreviewCard.jsx'
import Modal from './components/Modal.jsx'

function App() {
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPodcast, setSelectedPodcast] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://podcast-api.netlify.app/')
        if (!res.ok) throw new Error('Failed to fetch podcasts')
        const data = await res.json()
        setPodcasts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div className="status">Loading podcasts...</div>
  if (error) return <div className="status error">{error}</div>
  if (!podcasts.length) return <div className="status">No podcasts found.</div>

  return (
    <div className="container">
      <h1 className="title">Podcast Discovery</h1>
      <div className="grid">
        {podcasts.map(p => (
          <PodcastPreviewCard
            key={p.id}
            podcast={p}
            onClick={() => setSelectedPodcast(p)}
          />
        ))}
      </div>
      {selectedPodcast && (
        <Modal podcast={selectedPodcast} onClose={() => setSelectedPodcast(null)} />
      )}
    </div>
  )
}

export default App