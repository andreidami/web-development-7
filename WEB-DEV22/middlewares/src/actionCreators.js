export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const startLoading = () => {
  return {
    type: "START_LOADING",
  };
};

const getStarWarsCharacterSuccess = (character) => {
  return {
    type: "GET_STAR_WARS_CAHARACTER_SUCCESS",
    character,
  };
};
const getStarWarsCharacterError = (errorMessage) => {
  return {
    type: "GET_STAR_WARS_CHARACTER_ERROR",
    errorMessage,
  };
};

export const getStarWarsCharacter = (characterId) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/${characterId}`
      );
      const data = await response.json();
      dispatch(getStarWarsCharacterSuccess(data));
    } catch (error) {
      dispatch(getStarWarsCharacterError(error.errorMessage));
    }
  };
};
