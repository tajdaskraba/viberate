import '../styles/styles.css';
import { Artist } from '../types/artist';

interface ArtistVisualProps {
  artist: Artist;
} 

const ArtistVisual: React.FC<ArtistVisualProps> = ({ artist }) => (
  <div className="col visual">
    <figure style={{ backgroundImage: `url(${artist.data.image})` }}>
      <figcaption>
        <button className="btn btn-claim-music-id">Claim music_id</button>
      </figcaption>
    </figure>
  </div>
);

export default ArtistVisual;