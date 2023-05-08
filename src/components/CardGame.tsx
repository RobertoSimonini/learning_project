import { NavLink } from "react-router-dom";
import { videoGame } from "../models";

type PropsGame = {
  game: videoGame;
  isDetail?: boolean;
};
export const CardGame = (props: PropsGame) => {
  const { game, isDetail } = props;
  return (
    <>
      {!isDetail ? (
        <div className="card text-center">
          <img src={game.img_url} className="card-img-top" alt={game.title} />
          <div className="card-body">
            <h2 className="card-title">{game.title}</h2>
          </div>
          <NavLink to={`/details/${game.id}`}>
            <button className="btn btn-success my-2">View more details</button>
          </NavLink>
        </div>
      ) : (
        <div className="card mb-3 w-75 mx-auto my-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={game.img_url}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.description}</p>
                <p className="card-text">
                  <small className="text-body-secondary"></small>
                </p>
                <div>
                  <strong>Producer:</strong> <span>{game.producer}</span>
                </div>
                <div>
                  <strong>Pegi:</strong> <span>{game.pegi}</span>
                </div>
                <div>
                  <strong>Platform:</strong> <span>{game.platform}</span>
                </div>
                <div>
                  <strong>Vote:</strong> <span>{game.vote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
