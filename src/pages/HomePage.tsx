import { useEffect, useState } from "react";
import axios from "axios";
import { GameList } from "../components/GameList";
import { videoGame } from "../models";
import { Loader } from "../components/shared/Loader";

export const HomePage = () => {
  const [videoGames, setvideoGames] = useState<videoGame[]>([]);
  const apiBaseUri: String = "http://localhost:8000/api/";
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    fetchVideoGames();
  }, []);

  // funzione per riempire l'array di videogames con una chiamata axios
  const fetchVideoGames = () => {
    setLoading(true);
    axios
      .get(`${apiBaseUri}videogames`)
      .then((res) => {
        setvideoGames(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <h1 className="text-center text-primary my-2">VideoGames</h1>
      <GameList videoGames={videoGames} />
    </>
  );
};
