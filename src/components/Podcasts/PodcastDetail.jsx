

import { useState } from 'react';
import GenreTags from '../UI/GenreTags.jsx';
import { formatDate } from '../../utils/formatDate.js';


export default function PodcastDetail({ podcast, genres }) {
    const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);

    const currentSeason = podcast.seasons[currentSeasonIndex];


    return (
        <div className="podcast">
            <div classname="podcast-header">
                <img src={podcast.image} alt={podcast.title} className="podcast-image" />
                <div className="podcast-details">
                    <h2>{podcast.title}</h2>
                    <p className="description">{podcast.description}</p>
                    
                    <div className="tags">
                        <p className="label">Genres</p>
                        <p classname="label-info">
                            <GenreTags ids={podcast.genres} genres={genres} />
                        </p>
                    </div>
                    
                    <div className="updated">
                        <p classname="label">Last Updated</p>
                        <p className="label-info">{formatDate(podcast.updated)}</p>
                    </div>

                    <div className="podcast-seasons">
                        <p classname="label">Total Seasons</p>
                        <p className="label-info">{podcast.seasons.length}</p>
                    </div>

                    <div className="podcast-episode">
                        <p className="label">Total Episodes</p>
                        <p className="label-info">{podcast.seasons.reduce((sum, s) => sum + s.episodes.length, 0)}</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <h3>Current Season</h3>
                <div className="season-selector">
                    <h3>Browse Seasons</h3>
                    <ul className="season-menu">
                        {podcast.seasons.map((season, index) => (
                        <li key={season.id}>
                            <button className={index === currentSeasonIndex ? "active" : ""} onClick={() => setCurrentSeasonIndex(index)}>
                                Season {season.number}
                            </button>       
                        </li>  
                        ))}
                    </ul>
                </div>
            </div>

            <div classname="season-details">
                <img
                src={image}
                alt={podcast.title}
                className="season=image"
                />
                <h3 className="season-title">{currentSeason.title}</h3>
                <p>{currentSeason.description}</p>
                <p>{currentSeason.episodes.length} Episodes</p>
                
              

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
