/**
 * @function Home
 * Displays the grid layout of the podcast preview cards.
 * Users can return to the home page after viewing a single podcast detail card. 
 * @param {Array<Object>} props.genres - Array of genre objects used to map genre IDs to titles.
 * @returns {JSX.Element} The grid of podcast cards with controls
 */


import { useContext } from 'react';
import { PodcastContext } from "../context/PodcastContext.jsx";
import  Loading  from '../components/UI/Loading.jsx'
import  Error  from '../components/UI/Error.jsx'
import  PodcastGrid  from '../components/Podcasts/PodcastGrid.jsx'

export default function Home() {
    
    const {loading, error, podcasts } =useContext(PodcastContext);


    return (
        <main>
            {loading && <Loading message="Loading podcasts..." />}
            {error && <Error message={`Error occured while fetching podcasts: ${error}`} />}
            {!loading && !error && podcasts.length > 0 && (
                <PodcastGrid />
            )}
            {!loading && !error && podcasts.length === 0 && (
                <div className="empty">No podcasts available</div>
            )}
        </main>
    );
}
