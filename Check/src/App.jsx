import React, { useEffect } from 'react';
import './APP.css';

function App() {
  // Initialize canvas after component mounts
  useEffect(() => {
    const canvas = document.getElementById('demoCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#FF9A8B');
      gradient.addColorStop(1, '#FF6A88');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw text
      ctx.fillStyle = 'white';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('HTML5 Canvas Demo', canvas.width / 2, canvas.height / 2);
      
      // Draw a simple shape
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
      ctx.fill();
    }
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1>MULTIMEDIA GALLERY</h1>
        <p></p>
      </header>

      <main className="multimedia-container">
        {/* Image Section */}
        <section className="media-section">
          <h2>Images</h2>
          <div className="media-grid">
            <figure className="media-item">
              <img 
                src="view1.webp" 
                alt="Sample landscape"
                className="responsive-image"
              />
              <figcaption>IMAGE 1</figcaption>
            </figure>
            
            <figure className="media-item">
              <img 
                src="view2.webp" 
                alt="Nature scene"
                className="responsive-image"
              />
              <figcaption>IMAGE 2</figcaption>
            </figure>
          </div>
        </section>

        {/* Audio Section */}
        <section className="media-section">
          <h2>Audio</h2>
          <div className="media-grid">
            <div className="media-item">
              <audio controls className="audio-player">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p> Audio Track 1</p>
            </div>
            
            <div className="media-item">
              <audio controls className="audio-player">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p> Audio Sample 2</p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="media-section">
          <h2>Videos</h2>
          <div className="media-grid">
            <div className="media-item">
              <video controls className="responsive-video">
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>Big Buck Bunny Video</p>
            </div>
            
            <div className="media-item">
              <video controls className="responsive-video" muted>
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>Elephants Dream Video</p>
            </div>
          </div>
        </section>

        {/* YouTube Video (iframe) */}
        <section className="media-section">
          <h2>Embedded Video</h2>
          <div className="media-item full-width">
            <iframe 
              width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="youtube-embed"
            ></iframe>
            <p>Embedded YouTube Video</p>
          </div>
        </section>

        
      </main>

      <footer className="app-footer">
        <p>React Multimedia App &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;