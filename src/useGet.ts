import { useEffect, useState } from "react";

import makeGet, { RequestError } from "./makeGet";

type GetState<T> = (
  | { error: null; getting: true; got: null }
  | { error: null; getting: false; got: T }
  | { error: RequestError; getting: false; got: null }
);

const useGet = <T extends any>(path: string): GetState<T> => {
  const [state, setState] = useState<GetState<T>>({
    error: null,
    getting: true,
    got: null
  });

  useEffect(
    () => {
      let cancelled = false;
      setState({ error: null, getting: true, got: null });

      makeGet<T>(path)
        .then(got => {
          if (!cancelled) {
            setState({ error: null, getting: false, got });
          }
        })
        .catch(error => {
          if (!cancelled) {
            setState({ error, getting: false, got: null });
          }
        });

      return () => {
        cancelled = true;
      };
    },
    [path]
  );

  return state;
};

export default useGet;
