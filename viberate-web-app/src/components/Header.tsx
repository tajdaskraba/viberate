import Logo from './Logo';
import Navigation from './Navigation';
import '../styles/styles.css';

const Header = () => (
  <header className="header">
    <div className="page">
      <Logo />
      <Navigation />
    </div>
  </header>
);

export default Header;