import {useState, useEffect} from 'react';
import { Server } from 'miragejs';
import { sales, subscriptions } from '../../mocks';

console.log(process.env.REACT_APP_BASE_URL)
new Server({
  routes() {
    this.namespace = process.env.REACT_APP_BASE_URL;

    this.get("/sales", () => {
      return [sales]
    });

    this.get("/subscriptions", () => {
      return [subscriptions]
    })
  }
})

export function useDataFetcher( url ) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then(response => {
        response.json().then(response => {
          setData(response)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }, [url])
  return data
}
