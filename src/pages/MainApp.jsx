import "./MainApp.css";
import requests from "../requests";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MainApp() {
  const { isAuth, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && !isLoading) navigate("/sign-in");
  }, [isAuth, navigate, isLoading]);

  return (
    <div className="mainApp">
      <Navbar />
      <Banner />
      <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
    </div>
  );
}
