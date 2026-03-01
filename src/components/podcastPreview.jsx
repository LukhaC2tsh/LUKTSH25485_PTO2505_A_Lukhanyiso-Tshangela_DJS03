import { formatDistanceToNow } from 'date-fns'
import { mapGenreIdsToTitles } from '../utils/mapGenres.js'

export default function PodcastPreviewCard({ podcast, onClick }) {
  const genreTitles = mapGenreIdsToTitles(podcast.genres)

  return (
    <div className="card" onClick={onClick}>
      <img src={podcast.image} alt={podcast.title} className="card-image" />
      <div className="card-content">
        <h2>{podcast.title}</h2>
        <p>{podcast.seasons} Seasons</p>
        <div className="genres">
          {genreTitles.map((g, i) => (
            <span key={i} className="genre-tag">{g}</span>
          ))}
        </div>
        <p className="date">Updated {formatDistanceToNow(new Date(podcast.updated))} ago</p>
      </div>
    </div>
  )
}