import { useEffect, useState} from 'react' ;
import { useParams, useLocation } from 'react-router-dom';
import { fetchSinglePodcast } from '../api/fetchPodcastData.js';
import { Loading, Error, PodcastDetail } from '../components';

/**
 *@function ShowDetail
 * Componenent responsible for displaying detailed single podcast pages.
 * Shows detailed podcast page when user clicks on podcast preveiw. 
 * User is able to naviigate back to home page.
 */


export default function ShowDetail() {
    const { id } = useParams();
    const location = useLocation();
    const { image, genres } = location.state || {}; 


    const [podcast, setPodcast] = useState(null);
    const[loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSinglePodcast(id, setPodcast, setError, setLoading);
    }, [id]);


    return (
        <div className="show-detail">
        {loading && <Loading/>}

        {error && (
            <Error message = {error} />
        )}

        {!loading && !error && podcast && (
            <>
            {image && <img src={image} alt="Podcast Cover" />}
            <PodcastDetail podcast = {podcast} genres = {genres} image={image} />
            </>
        )}
        <Link to ="/" className="back-button">Back</Link>
        </div>
    );
}