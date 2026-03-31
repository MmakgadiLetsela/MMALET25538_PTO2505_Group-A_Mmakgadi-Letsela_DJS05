import { useContext } from "react";
import PodcastCard from "../../components/Podcasts/PodcastCard.jsx";
import { PodcastContext } from "../../context/PodcastContext.jsx";
import SearchBar from "../../components/Filters/SearchBar.jsx";
import GenreFilter from "../../components/Filters/GenreFilter.jsx";
import SortSelect from "../../components/Filters/SortSelect.jsx";
import Pagination from "../../components/UI/Pagination.jsx";

/**
 * Displays a grid layout of podcast preview cards with search, genre filtering, sorting and pagination. 
 * Each card includes podcast details such as title, image, genres, season count, and updated date.
 *
 * @returns {JSX.Element} The rendered grid of podcast cards with controls.
 *
 */
export default function PodcastGrid() {
  const {
    podcasts,
    allPodcastsCount,
  } = useContext(PodcastContext);

console.log("Grid podcasts length:", podcasts.length, "all count:", allPodcastsCount);

  return (
    <div className="podcast-grid">
      {/* Controls */}
      <div className="controls">
        <SearchBar />
        <div className="filter-container">
          <GenreFilter />
          <SortSelect />
        </div>
      </div>

      {/* Results info */}
      <div className="results-info">
        Showing {podcasts.length} of {allPodcastsCount} podcasts
      </div>

      {/* Grid */}
      <div className="grid">
        {podcasts.length > 0 ? (
        podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))
      ) : (
        <div className="empty>">No podcasts to show</div>
      )}
      </div>

      {/* Pagination */}
      <Pagination total={allPodcastsCount} />
    </div>
  );
}
