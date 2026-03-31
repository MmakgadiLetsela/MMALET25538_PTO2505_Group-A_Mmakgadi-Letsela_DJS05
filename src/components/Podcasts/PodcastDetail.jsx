

import { useState } from 'react';
import GenreTags from '../UI/GenreTags.jsx';
import { formatDate } from '../../utils/formatDate.js';
import { Link } from "react-router-dom";


export default function PodcastDetail({ podcast, image }) {
    const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);

    const seasons = podcast.seasons || [];
    const currentSeason = seasons[currentSeasonIndex];
    const totalEpisodes = seasons.reduce((sum, s) => sum + (s.episodes ? s.episodes.length : 0), 0);


    return (
        <div className="podcast">
            <Link to ="/" className="back-button">Back</Link>
            <div className="podcast-header">
                  <img src={image} alt={podcast.title} className="podcast-details-image" />
                <div className="podcast-details">
                    <h2>{podcast.title}</h2>
                    <p className="description">{podcast.description}</p>
                    
                    <div className="tags">
                        <p className="label">Genres</p>
                        <div className="label-info">
                            <GenreTags genres={podcast.genres || []} />
                        </div>
                    </div>
                    
                    <div className="updated">
                        <p className="label">Last Updated</p>
                        <div className="label-info">{formatDate(podcast.updated)}</div>
                    </div>

                    <div className="podcast-seasons">
                        <p className="label">Total Seasons</p>
                        <div className="label-info">{podcast.seasons.length} Seasons</div>
                    </div>

                    <div className="podcast-episode">
                        <p className="label">Total Episodes</p>
                        <div className="label-info">{podcast.seasons.reduce((sum, s) => sum + s.episodes.length, 0)} Episodes</div>
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
                    <div className="season-header">
                        <img src={currentSeason.image} alt={currentSeason.title} />
                        <h3>{currentSeason.title}</h3>
                        <p>{totalEpisodes} Episodes</p>

                    </div>
              

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
