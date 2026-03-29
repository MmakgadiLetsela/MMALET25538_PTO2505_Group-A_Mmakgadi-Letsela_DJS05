/**
 * @function Home
 * Displays the grid layout of the podcast preview cards.
 * Users can return to the home page after viewing a single podcast detail card. 
 * @param {Array<Object>} props.genres - Array of genre objects used to map genre IDs to titles.
 * @returns {JSX.Element} The grid of podcast cards with controls
 */


import { useEffect, useState } from 'react';
import { fetchPodcasts } from "../api/fetchPodcastData.js";
import  Loading  from '../components/UI/Loading.jsx'
import  Error  from '../components/UI/Error.jsx'
import  PodcastGrid  from '../components/Podcasts/PodcastGrid.jsx'

export default function Home({ genres }) {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()  => {
        fetchPodcasts(setPodcasts, setError, setLoading);
    }, []);

    return (
        <main>
            {loading && <Loading message="Loading podcasts..." />}
            {error && <Error message={`Error occured while fetching podcasts: ${error}`} />}
            {!loading && !error && (
                <PodcastGrid podcasts={podcasts} genres={genres || []} />
            )}
        </main>
    );
}
