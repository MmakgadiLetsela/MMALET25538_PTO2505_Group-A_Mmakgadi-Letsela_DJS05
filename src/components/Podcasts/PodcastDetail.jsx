

import { useState } from 'react';
import GenreTags from '../UI/GenreTags.jsx';
import { formatDate } from '../../utils/formatDate.js';


export default function PodcastDetail({ podcast, genres, image }) {
    const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);

    const currentSeason = podcast.seasons[currentSeasonIndex];


    return (
        <div className="podcast">
            <div className="podcast-header">
                 {image && <img src={image} alt={podcast.title} className="podcast-image" />}
                <div className="podcast-details">
                    <h2>{podcast.title}</h2>
                    <p className="description">{podcast.description}</p>
                    
                    <div className="tags">
                        <p className="label">Genres</p>
                        <p className="label-info">
                            <GenreTags ids={podcast.genres} genres={genres} />
                        </p>
                    </div>
                    
                    <div className="updated">
                        <p className="label">Last Updated</p>
                        <p className="label-info">{formatDate(podcast.updated)}</p>
                    </div>

                    <div className="podcast-seasons">
                        <p className="label">Total Seasons</p>
                        <p className="label-info">{podcast.seasons.length} Seasons</p>
                    </div>

                    <div className="podcast-episode">
                        <p className="label">Total Episodes</p>
                        <p className="label-info">{podcast.seasons.reduce((sum, s) => sum + s.episodes.length, 0)} Episodes</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <h3>Current Season</h3>
                <div className="season-selector">
                    <h3>Browse Seasons</h3>
                    <ul className="season-menu">
                        {podcast.seasons.map((season, index) => (
                        <li key={season.season}>
                            <button className={index === currentSeasonIndex ? "active" : ""} onClick={() => setCurrentSeasonIndex(index)}>
                                Season {season.season}
                            </button>       
                        </li>  
                        ))}
                    </ul>
                </div>
            </div>

            <div className="season">
                {currentSeason.seasons.map((season) => (
                    <div key={season.season} className="season-header">
                        <img src={season.image} />
                        <h3>{season.title}</h3>
                        <p>{season.episodes.count} Episodes</p>

                    </div>
                ))}
              

                <div className="episodes-grid">
                    {currentSeason.episodes.map((episode) =>  (
                        <div key={episode.episode} className="episode-card">
                            <h4>{episode.title}</h4>
                            <p>{episode.description}</p>
                            <p>Episode: {episode.episode}</p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
