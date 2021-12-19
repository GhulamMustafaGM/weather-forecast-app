import Head from "next/head";
import SearchBox from "../components/SearchBox";
import FavoritePlaces from "../components/FavoritePlaces";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather Forecast App</title>
      </Head>
      <div className="home">
        <div className="container">
          <SearchBox placeholder="Search for a city..." />
          <FavoritePlaces />
        </div>
      </div>
    </div>
  );
}
