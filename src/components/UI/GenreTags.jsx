
/** 
 * @function GenreTags
 * Maps the array of genre objects using the individual genre IDs that each podcast card has to get the genre titles. 
 * Each podcast card thus get genre titles such as News and History instead of displaying ids.
 * @param {Array<Object>} props.genre - Array of genre objects for mapping IDs to titles.
 * @param {Object} props.podcast - The podcast data object that has genre IDs and other podcast data.
 * @returns {JSX.Element} The mapped genre titles ready to be displayed on the podcast card.
*/
export default function GenreTags ({ podcast,genres }) {
   return (
        <div className="tags">

            {podcast.genres.map((id) => {
                const match = genres.find((genre)  => genre.id === id);
                return (
                    <span key = {id} className = "tag">
                        {match ? match.title : `Unknown (${id})`}
                    </span>
                );
            
            })} 
 
        </div>
   )

} 