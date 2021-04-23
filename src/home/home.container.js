import HomeView from "./home.view";
import React, { useState } from 'react';

const Home = () => {
  const response = require('../users.json'); //I tried httpsRequest but I got restricted by COrs policy.
  const [animalsList, setAnimalsList] = useState([]);
  let data = [];

  if (response.length && !data.length) {
    data = response;
  }

  const buildAnimals = (data) => {
    const buildAnimalsLength = getData(data);
    const lengths = buildAnimalsLength.map(a => a.length);
    setAnimalsList(getAllAnimals(data, lengths));
  }

  const getData = data => data.map(user => user.animals);
  
  const getAllAnimals = (data, lengths) => data[lengths.indexOf(Math.max(...lengths))].animals;

  if (!animalsList.length && data.length) {
    buildAnimals(data);  
  }

  return animalsList.length && data ? <HomeView animalsList={animalsList} data={data} /> : <div>loading...</div>;
}

export default Home;