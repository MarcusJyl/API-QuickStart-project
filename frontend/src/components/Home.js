import facade from "../facades/fetchFacade";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [dataFromServer, setDataFromServer] = useState({ isEmpty: true });
  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data));
  }, []);

  return (
    <div>
      <h2>Jokes</h2>
      {dataFromServer.isEmpty ? <p>Loading..</p> : <></>}

      <h3>{dataFromServer.joke1}</h3>
      <h3>{dataFromServer.joke2}</h3>
      <h3>{dataFromServer.joke3}</h3>
      <h3>{dataFromServer.joke4}</h3>
      <h3>{dataFromServer.joke5}</h3>
    </div>
  );
}
