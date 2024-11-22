import { useParams } from 'react-router-dom';
import { useArtist } from '../hooks/useArtist';
import MainContent from '../components/MainContent';
import '../styles/styles.css';

const ArtistDetail: React.FC = () => {
  const { artistUuid } = useParams<{ artistUuid: string }>();
  const { data: artist, error } = useArtist(artistUuid!);

  if (error) return <div className="error">Failed to load artist details</div>;
  if (!artist) return <div className="not-found"></div>;
  
  return <MainContent artist={artist} />;
};

export default ArtistDetail;