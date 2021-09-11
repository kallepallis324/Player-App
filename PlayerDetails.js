import React, { useState } from "react";
import { useParams } from "react-router";
import useFetchAPI from "../../Custom Hooks/useFetchAPI";
import classes from "./PlayerDetails.module.css";

export default function PlayerDetails(props) {
  const id = useParams().id;
  const url = `http://localhost:5050/playerdetails/${id}`;
  const { apiResults, isLoading } = useFetchAPI(url);
  const [playerDetails, setplayerDetails] = useState();
  console.log(apiResults);
  // if(!isLoading){

  // }
  // const {
  //   playerName,
  //   from,
  //   price,
  //   isPlaying,
  //   championshipsWon,
  //   description,
  //   logo,
  //   photo,
  // } = playerDetails ? playerDetails.data : setplayerDetails(apiResults);
  return (
    <div className={classes.playerDetailsWrapper}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.playerDetailsPage}>
          <div className={classes.cardLeftDiv}>
            <img src={apiResults.data.photo} alt={apiResults.data.playerName} />
          </div>
          <div className={classes.cardRightDiv}>
            <h2>{apiResults.data.playerName}</h2>
            <h4>Team: {apiResults.data.from}</h4>
            <h4>Price: {apiResults.data.price}</h4>
            <h4>{apiResults.data.isPlaying ? "Playing" : "Not Playing"}</h4>
            <h4>Role: {apiResults.data.description}</h4>
          </div>
        </div>
      )}
    </div>
  );
}
