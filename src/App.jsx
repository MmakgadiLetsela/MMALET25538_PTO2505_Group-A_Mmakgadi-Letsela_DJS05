
import { PodcastProvider } from "./context/PodcastContext.jsx";
import Header from "./components/UI/Header.jsx";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail"; 
import { Route, Routes } from "react-router-dom";

/**
 * 
 */
export default function App() {
  return (
    <>
    <Header />
    <PodcastProvider> 
      <Routes>
        <Route path = "/" element = {<Home /> } /> 
        <Route path = {`/show/:id`} element = {<ShowDetail />} />
      </Routes>
    </PodcastProvider>
    </>
  );
}
