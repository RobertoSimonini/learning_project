import { useEffect } from "react";
import { videoGame } from "../models";
import { CardGame } from "./CardGame";

type GameListProps = {
  videoGames: videoGame[];
};

export function GameList(props: GameListProps) {
  const { videoGames } = props;

  useEffect(() => {
    console.log(videoGames);
  });

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          {videoGames.map((game: videoGame) => {
            return (
              <div key={game.id} className="col-3 d-flex">
                <CardGame game={game} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
