 /**
  * @function Loading
  * Loading function used to handle loading state when podcast data is fetched from APIs.
  * @returns {JSX.Element} - Loading component.
  */



 export default function Loading() {
 
 return (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        );
    }
      