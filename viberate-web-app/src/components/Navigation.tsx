import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

interface NavbarArtist {
  artist_uuid: string;
  artist_name: string;
}

const Navigation: React.FC = () => {
  const [artists, setArtists] = useState<NavbarArtist[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('https://mocky.viberate.com/api/v1/navbar');
        if (!response.ok) throw new Error('Failed to fetch artists');
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <nav className="navigation-primary">
      <ul className="menu-sys" style={{paddingRight: '40px'}}>
        <li>
          <button className="btn btn-menu search">Search</button>
        </li>
        <li>
          <button className="btn btn-menu more">More</button>
        </li>
      </ul>
      
      <ul className="menu">
        {artists.map((artist) => (
          <li key={artist.artist_uuid}>
            <Link to={`/${artist.artist_uuid}`}>{artist.artist_name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;