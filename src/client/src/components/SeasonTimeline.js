import { useQuery } from 'react-query';
import api from '../api';
import { Chrono } from 'react-chrono';

function SeasonTimeline() {
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/seasons/allSeasons').then((res) => {
      console.log(res);
      return res.data.result.sort((a, b) => (a.year > b.year ? 1 : -1));
    })
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading Timeline!</p>
      ) : (
        <Chrono
          items={data.map((season) => {
            return {
              title: season.year,
              cardTitle: season.year,
            };
          })}
          mode="HORIZONTAL"
          theme={{ primary: 'red', secondary: 'white' }}
        >
          {data.map((season) => (
            <div className="season" key={season.year}>
              <p>Year: {season.year} </p>
              <p>Coach: {season.coach}</p>
              <p>
                Record: {season.record.wins}-{season.record.ties}-
                {season.record.losses}
              </p>
              {season.imageIDs.map((image) => (
                <img
                  src={'http://drive.google.com/uc?export=view&id=' + image}
                  alt="Yearbook Photo"
                />
              ))}
              <p>
                {' '}
                <a href={'/season/' + season.year}>Learn More</a>
              </p>
            </div>
          ))}
        </Chrono>
      )}
    </div>
  );
}

export default SeasonTimeline;
