export default function Modal({ podcast, onClose }) {
  if (!podcast) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={podcast.image} alt={podcast.title} style={{ width: "100%", marginBottom: "1rem" }} />
        <h2>{podcast.title}</h2>
        <p>{podcast.description}</p>
        <p>Seasons: {podcast.seasons}</p>
        <div>
          Genres: {podcast.genres?.map((id) => <span key={id} className="genre-tag">{id}</span>)}
        </div>
      </div>
    </div>
  );
}