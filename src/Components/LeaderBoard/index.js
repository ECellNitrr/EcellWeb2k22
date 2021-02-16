import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../api_loader/api_loader";
const LeaderBoard = () => {
  const [contributors, setContributors] = useState([]);
  const [pageState, setPageState] = useState({
    loading: true,
    error: false,
  });

  const getContributors = async () => {
    try {
      const { data } = await axios.get(
        "http://159.65.158.103:8000/leaderboard/"
      );
      setContributors(data);
      setPageState({
        ...pageState,
        loading: false,
      });
    } catch (error) {
      setPageState({
        ...pageState,
        loading: false,
        error: "Some error occured please try later",
      });
    }
  };

  useEffect(() => {
    getContributors();
  }, []);

  const LoadingState = () => <Loader />;

  const ContributorsState = () => {
    return contributors.map((contributor, index) => <h1 key={index}>{contributor.username}</h1>);
  };

  const ErrorState = () => {
    return <div>Some Error occured</div>;
  };

  const { loading, error } = pageState;

  return (
    <div>
      {loading ? LoadingState() : error ? ErrorState() : ContributorsState()}
    </div>
  );
};

export default LeaderBoard;