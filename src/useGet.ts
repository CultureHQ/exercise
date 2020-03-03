import { useEffect, useState } from "react";

class RequestError extends Error {
  public status: number;

  constructor(responseText: string, status: number) {
    super(responseText);
    this.status = status;
  }
}

type Parsed = ReturnType<typeof JSON.parse>;
const makeGet = <T extends Parsed>(path: string): Promise<T> => (
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new RequestError(xhr.responseText, xhr.status));
      }
    };

    xhr.open("GET", `http://localhost:9292${path}`);
    xhr.send();
  })
);

type GetState<T> = (
  | { error: null; getting: true; got: null }
  | { error: null; getting: false; got: T }
  | { error: RequestError; getting: false; got: null }
);

const useGet = <T extends any>(path: string) => {
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
