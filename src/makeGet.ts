export class RequestError extends Error {
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

export default makeGet;
