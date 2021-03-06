import {
  SET_QUESTIONS,
  SET_SEARCHTERM,
  SET_TRAINING,
  SET_USER,
  SET_TOKEN
} from "./actionConst";

type state = ReturnType<typeof questionReducer>;

export const initialState = {
  categories: [],
  questions: [],
  searchTerm: "javascript",
  trainingSet: [],
  user: {},
  token: ""
};

/* Define a context and a reducer for updating the context */
export const questionReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: [...action.payload]
      };
    case SET_TRAINING:
      return {
        ...state,
        trainingSet: [...action.payload]
      };
    case SET_SEARCHTERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};
