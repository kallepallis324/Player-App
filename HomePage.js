import React, { useState } from "react";
import useFetchAPI from "../../Custom Hooks/useFetchAPI";
import classes from "./HomePage.module.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

export default function HomePage() {
  const fetchURL = "http://localhost:5050/players";
  const { apiResults, isLoading } = useFetchAPI(fetchURL);
  const [playerArray, setplayerArray] = useState();
  console.log(apiResults);

  const [pageNumber, setpageNumber] = useState(0);
  const usersPerPage = 1;
  const pageVisited = usersPerPage * pageNumber;
  const pageCount = Math.ceil(playerArray && playerArray.length / usersPerPage);

  const displayPlayer = () => {
    return (
      <div className={classes.cardsWrapper}>
        {playerArray
          ? playerArray
              .slice(pageVisited, pageVisited + usersPerPage)
              .map((data, pos) => {
                const {
                  _id,
                  playerName,
                  from,
                  price,
                  isPlaying,
                  championshipsWon,
                  description,
                  logo,
                  photo,
                } = data;
                return (
                  <Link
                    className={classes.playerCard}
                    to={`/playerdetails/${_id}`}
                  >
                    <div className={classes.cardLeftDiv}>
                      <img src={photo} alt={playerName} />
                    </div>
                    <div className={classes.cardRightDiv}>
                      <h2>{playerName}</h2>
                      <h4>Team: {from}</h4>
                      <h4>Price: {price}</h4>
                      <h4>{isPlaying ? "Playing" : "Not Playing"}</h4>
                      <h4>Role: {description}</h4>
                    </div>
                  </Link>
                );
              })
          : setplayerArray(apiResults.data)}
      </div>
    );
  };

  const changePages = ({ selected }) => {
    setpageNumber(selected);
  };

  return (
    <div className={classes.HomePageWrapper}>
      <h1>Welcome to player app</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {displayPlayer()}

          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={pageCount}
            onPageChange={changePages}
            containerClassName={classes.paginationContainer}
            nextLinkClassName={classes.pgtnNextBtn}
            previousLinkClassName={classes.pgtnPreviousBtn}
            disabledClassName={classes.pgtnDisabled}
            activeClassName={classes.pgtnActive}
          />
        </div>
      )}
    </div>
  );
}
