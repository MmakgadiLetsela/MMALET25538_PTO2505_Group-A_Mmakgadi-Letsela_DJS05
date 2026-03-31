
import { PodcastProvider } from "./context/PodcastContext.jsx";
import Header from "./components/UI/Header.jsx";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail"; 
import { Route, Routes } from "react-router-dom";

/**
 * @function App
 * Root component of the podcast explorer app.
 * - Wraps the application in the podcast provider context for global state. 
 * - Includes the Header component, displayed on all pages.
 * - Defines client-side routes using React Router.
 * - Renders home page and showdetail page depending on route chosen.
 *  
 * @returns {JSX.Element} The application component with routing and context.
 */
export default function App({ podcasts }) {
  return (
    <>
    <Header />
    <PodcastProvider initialPodcasts={podcasts}> 
      <Routes>
        <Route path="/" element={<Home /> } /> 
        <Route path={`/show/:id`} element={<ShowDetail />} />
      </Routes>
    </PodcastProvider>
    </>
  );
}
