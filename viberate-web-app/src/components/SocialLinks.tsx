import React from 'react';
import { SocialLink } from '../types/social';
import '../styles/styles.css';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const filteredLinks = links.filter(link => !link.channel.toLowerCase().includes('vevo'));
  const homePageLink = filteredLinks.find(link => link.channel === 'home_page');
  const otherLinks = filteredLinks.filter(link => link.channel !== 'home_page');

  const renderSocialLink = (link: SocialLink) => (
    <li key={link.channel}>
      <a 
        href={link.link} 
        className={`social-icon ${link.channel}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.channel}
      />
    </li>
  );

  return (
    <div className="footer-detail">
      <ul className="social-list">
        {homePageLink && renderSocialLink(homePageLink)}
        {otherLinks.map(link => renderSocialLink(link))}
      </ul>
      <div className="tooltip-wrapper">
        <button className="btn btn-add">Add links</button>
        <div className="tooltip">
          <h3>Got more info?</h3>
          <p>Add Place's links so everyone can see their social media highlights.</p>
          <p>
            <button className="btn btn-shadow">Add links</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;