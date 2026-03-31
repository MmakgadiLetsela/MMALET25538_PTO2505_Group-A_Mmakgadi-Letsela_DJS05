import { useEffect, useState} from 'react' ;
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchSinglePodcast } from '../api/fetchPodcastData.js';
import   PodcastDetail  from '../components/Podcasts/PodcastDetail.jsx';
import  Loading  from '../components/UI/Loading.jsx'
import  Error  from '../components/UI/Error.jsx'


/**
 *@function ShowDetail
 * Componenent responsible for displaying detailed single podcast pages.
 * Shows detailed podcast page when user clicks on podcast preveiw. 
 * User is able to naviigate back to home page.
 */


export default function ShowDetail() {
    const { id } = useParams();
    const location = useLocation();
    const { image } = location.state || {}; 


    const [podcast, setPodcast] = useState([]);
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

            {!loading && !error && (
                <>
                {image && <img src={image} alt="Podcast Cover" />}
                <PodcastDetail podcast={podcast} image={image} />
                </>
            )}
        </div>
    );
}