export default function Modal({ podcast, onClose }) {
  if (!podcast) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={podcast.image} alt={podcast.title} />
        <h2>{podcast.title}</h2>
        <p>{podcast.description}</p>
        <p>Seasons: {podcast.seasons}</p>
        <div>
          Genres: {podcast.genres.map((id) => <span key={id}>{id}</span>)}
        </div>
      </div>
    </div>
  );
}