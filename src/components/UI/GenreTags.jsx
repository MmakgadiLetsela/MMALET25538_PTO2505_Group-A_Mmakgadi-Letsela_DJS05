



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