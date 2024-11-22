import '../styles/landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-overlay" />
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Viberate</h1>
        <p className="landing-subtitle">Choose an artist from the navigation menu to start</p>
      </div>
    </div>
  );
};

export default Landing;