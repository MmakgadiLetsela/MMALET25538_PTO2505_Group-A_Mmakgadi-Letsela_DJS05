import { useEffect, useState } from "react";
import PodcastGrid from "./components/Podcasts/PodcastGrid.jsx";
import { genres } from "./data.js";
import { fetchPodcasts } from "./api/fetchPodcastData.js";
import Header from "./components/UI/Header.jsx";
import { PodcastProvider } from "./context/PodcastContext.jsx";
import { Loading } from "./components/UI/Error.jsx"
import { Error } from "./components/UI/Loading.jsx"

/**
 * App - The root component of the Podcast Explorer application. It handles:
 * - Fetching podcast data from a remote API
 * - Managing loading and error states
 * - Rendering the podcast grid once data is successfully fetched
 * - Displaying a header and fallback UI during loading or error
 * - Podcast Provider is centalised state management for search, filter, sorting and pagination.
 * @returns {JSX.Element} The rendered application interface
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <>
      <Header />
      <main>
        {loading && <Loading/>}

        {error && <Error message = {error} />}

        {!loading && !error && (
          <PodcastProvider initialPodcasts={podcasts}>
            <PodcastGrid genres={genres}/>
          </PodcastProvider>
        )}
      </main>
    </>
  );
}
