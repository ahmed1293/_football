import {useEffect, useReducer} from "react";
import footballData from "../services/FootballData";
import {AUTH_TOKEN} from "../_token";

function init() {
  return initialState;
}

const initialState = {data: {}, loading: false};

function reducer(state, action) {
  switch (action.type) {
    case 'fetching':
      return {...initialState, loading: true};
    case 'fetched':
      return {...initialState, data: action.data};
    default:
      throw new Error('Unexpected action type!');
  }
}

export default function useFetchData() {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    async function fetchData() {
      dispatch({type: 'fetching'});
      const api = new footballData(AUTH_TOKEN);
      const fixtures = await api.fetchFixtures();
      dispatch({type: 'fetched', data: fixtures});
    }

    fetchData();
  }, []);

  return state;
}