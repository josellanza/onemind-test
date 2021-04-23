import styles from './card.module.css'; 

const CardView = ({ users, animal, showMore, showMoreClick, removeUser }) => {
  let usersUpdated = [];
  const getTop = (a) => users.slice(0, a);
  if (showMore) {
    usersUpdated = getTop(25);
  } else {
    usersUpdated = getTop(10);
  }

  return (
    <div className={styles.animalBlock}>
      <div className={styles.titleBlock}>
        {animal}
      </div>
      <ul className={styles.userList}>
        {usersUpdated.map((user, index) =>
          <div className={styles.userDetails}>
            <li>{user.name.given}  {user.name.surname}</li>
            <button className={styles.removeBtn} onClick={e => {
              removeUser(index);
              }}>remove</button>
          </div>
          )}
      </ul>
      <button className={styles.showMoreBtn} onClick={e => showMoreClick(e)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
    );
}

export default CardView;