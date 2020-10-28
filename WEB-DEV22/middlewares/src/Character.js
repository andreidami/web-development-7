import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStarWarsCharacter } from "./actionCreators";

export const Character = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const character = useSelector((state) => state.character);
  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsCharacter(1));
  }, []);
  if (errorMessage !== undefined) {
    return <p style={{ color: "red" }}>{errorMessage}</p>;
  }

  return isLoading === true ? (
    <p>loading...</p>
  ) : (
    <div>
      <p>{character.name}</p>
    </div>
  );
};
