import { useState, useEffect } from 'react';
import ArtistVisual from '../components/ArtistVisual';
import SocialLinks from '../components/SocialLinks';
import Stats from '../components/Stats';
import { Artist } from '../types/artist';
import VoteSubgenres from './VoteSubgenres';
import '../styles/styles.css';

interface MainContentProps {
  artist: Artist;
}

const MainContent: React.FC<MainContentProps> = ({ artist }) => {
  const [followedArtists, setFollowedArtists] = useState<Record<string, boolean>>(() => {
    const savedFollows = localStorage.getItem('followedArtists');
    return savedFollows ? JSON.parse(savedFollows) : {};
  });
  
  const isFollowing = followedArtists[artist.data.uuid] || false;

  useEffect(() => {
    localStorage.setItem('followedArtists', JSON.stringify(followedArtists));
  }, [followedArtists]);

  const handleFollowClick = () => {
    setFollowedArtists(prev => ({
      ...prev,
      [artist.data.uuid]: !isFollowing
    }));
  };

  const handleBookingRequest = () => {
    alert('Thank you for your booking request! We will contact you soon.');
  };

  return (
    <main className="main">
      <section className="section section-artist-detail trending claimed">
        <div className="page">
          <ArtistVisual artist={artist}/>
          <div className="col-wrapper">
            <div className="col info">
              <div className="col-content">
                <div className="info-wrapper">
                  <div className="title-wrapper">
                    <button 
                      className="btn btn-solid border btn-booking-request"
                      onClick={handleBookingRequest}
                    >
                      Booking Request
                    </button>
                    <h1 className="title">
                      {artist.data.name}
                      <div className="tooltip-wrapper">
                        {artist.data.claimed && 
                          <span className="profile-claimed">Profile claimed</span>
                        }
                      </div>
                      {artist.data.trending && 
                        <span className="trending-icon">Trending</span>
                      }
                    </h1>
                  </div>
                  <div className="row">
                    <button 
                      className={`btn btn-save long ${isFollowing ? 'active' : ''}`}
                      onClick={handleFollowClick}
                    >
                      {isFollowing ? "Unfollow" : "Follow"}
                    </button>
                    <button className="btn btn-share">
                      Share
                      <span>Link copied to clipboard</span>
                    </button>
                  </div>
                  <div className="row">
                    <label>Origin</label>
                    <a className="btn btn-filter-tag">
                      {artist.data.country?.name}
                    </a>
                  </div>
                  <div className="row">
                    <label>Genre</label>
                    <span className="btn btn-filter-tag">
                      {artist.data.genre.name}
                    </span>
                  </div>
                  <div className="row">
                    <label>Subgenres</label>
                    {artist.data.subgenres.map((subgenre) => (
                      <span 
                        key={subgenre.id} 
                        className="btn btn-filter-tag"
                      >
                        {subgenre.name}
                      </span>
                    ))}
                    <VoteSubgenres options={artist.data.beatport_genres}/>
                  </div>
                </div>
                <SocialLinks links={artist.data.social_links} />
              </div>
            </div>
            <Stats data={artist.data.most_popular_in}/>
          </div>
          <button className="btn btn-scroll-down">Scroll down</button>
        </div>
      </section>
    </main>
  );
};

export default MainContent;