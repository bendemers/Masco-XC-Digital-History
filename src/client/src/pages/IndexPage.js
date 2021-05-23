import { useQuery } from 'react-query';
import api from '../api';
import { Chrono } from 'react-chrono';
import SeasonTimeline from '../components/SeasonTimeline';

function IndexPage() {
  return (
    <div className="container center">
      <header className="hero">
        <div className="hero-body">
          <h1 className="title">
            Welcome to the Masconomet Cross Country Digital Histroy Site!
          </h1>
          <h2 className="subtitle">
            Please feel free to look around and enjoy the history of the
            program.
          </h2>
        </div>
      </header>
      <SeasonTimeline />
    </div>
  );
}

export default IndexPage;
