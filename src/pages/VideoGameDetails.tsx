import axios from "axios";
import { useEffect, useState } from "react";
import { videoGame } from "../models";
import { useParams } from "react-router-dom";
import { CardGame } from "../components/CardGame";
import { Loader } from "../components/shared/Loader";
export const VideoGameDetails = () => {
  const apiBaseUri: String = "http://localhost:8000/api/videogames/";
  const [videogame, setVideoGame] = useState<Partial<videoGame>>({});
  const { id } = useParams();
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    getVideoGame();
  }, []);

  const getVideoGame = () => {
    setLoading(true);
    axios
      .get(`${apiBaseUri}${id}`)
      .then((res) => setVideoGame(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {isLoading ? <Loader /> : <CardGame game={videogame} isDetail={true} />}
    </>
  );
};
