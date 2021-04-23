import CardView from "./card.view";
import { useState, useEffect } from "react";

const Card = ({ data, animal }) => {

  const [showMore, setShowMore] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, []);

  let usersFiltered = [];

  const filterByAnimal = (users, animal) => {
    users.map(user => {
      if (user.animals.includes(animal) && user.isActive) {
        usersFiltered.push(user);
      }
    });
  }

  const showMoreClick = () => setShowMore(!showMore);

  const removeUser = (index) => {
    usersFiltered.splice(index, 1);
    setUsers(usersFiltered);
  };

  const sortByPoints = (users) => users.sort((a, b) => (a.points > b.points) ? -1 : 1);

  const buildUsers = (users) => {
    filterByAnimal(users, animal);
    sortByPoints(users);
  }

  if (users.length && animal) {
    buildUsers(users);
  }
  
  return usersFiltered.length && 
    <CardView 
      users={usersFiltered} 
      animal={animal}
      showMore={showMore}
      removeUser={removeUser}
      showMoreClick={showMoreClick}
    />
}

export default Card;