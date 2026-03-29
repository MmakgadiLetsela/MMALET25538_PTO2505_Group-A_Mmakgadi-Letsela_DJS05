
/**
 * @function Error
 Componenet used to handle error states that may occur during fetching of data from external API.
 
 * @param {string} error - Used to display error message.
 * @returns {JSX.Element} - Error function
 */


export default function Error ({ error }) {
    return (
        <div className="message-container">
            <div className="error">
              Error occurred while trying fetching podcasts: {error}
            </div>
          </div>
    )
}