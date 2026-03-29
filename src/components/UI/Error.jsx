



export default function Error ({ error }) {
    return (
        <div className="message-container">
            <div className="error">
              Error occurred while trying fetching podcasts: {error}
            </div>
          </div>
    )
}