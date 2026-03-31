import { formatDate } from "../../utils/formatDate.js";
import  GenreTags  from "../../components/UI/GenreTags.jsx"
import { Link } from "react-router-dom";
/**
 * Renders a single podcast preview card with image, title, number of seasons,
 * genres (as styled tags), and the last updated date.
 *
 * @param {Object} props
 * @param {Object} props.podcast - The podcast data object to display.
 * @param {string} props.podcast.id - Unique ID of the podcast.
 * @param {string} props.podcast.title - Title of the podcast.
 * @param {string} props.podcast.image - URL of the podcast image.
 * @param {number} props.podcast.seasons - Number of seasons available.
 * @param {string} props.podcast.updated - ISO date string for the last update.
 *
 * @returns {JSX.Element} The rendered podcast card component.
 */
export default function PodcastCard({ podcast }) { 

  console.log("Card podcast", podcast);
  
  return (
    <div className="card">
      <Link to={`/show/${podcast.id}`}
      state={{ image: podcast.image }}
      >
        <img src={podcast.image} alt={podcast.title} />
        <h3>{podcast.title}</h3>
        <p className="seasons">{podcast.seasons} seasons</p>
        <div className="tags">
          <GenreTags genres={podcast.genres || []} />
        </div>
        <p className="updated-text">Updated {formatDate(podcast.updated)}</p>
      </Link>
    </div>
  );
}