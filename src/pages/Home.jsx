


import { useEffect, useState } from 'react';
import { fetchPodcasts } from "../api/fetchPodcastData.js";
import { Loading, Error, PodcastGrid } from "../components";

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
                <PodcastGrid podcasts={podcasts} genres={genres} />
            )}
        </main>
    );
}
