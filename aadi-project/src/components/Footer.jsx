const Footer = () => {
    return (
      <footer
        style={{
          backgroundColor: 'navy',
          color: 'white',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} NSTConnect. All rights reserved.
        </p>
  
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href="https://github.com/addy-2709genius"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}
          >
            🐙 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aaditya-raj-soni-2087b0334/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}
          >
            💼 LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@NewtonSchoolOfTechnology-ADYPU"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}
          >
            📺 YouTube
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  