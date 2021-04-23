import Card from './card/card.container';
import styles from './home.module.css';

const HomeView = ({ data, animalsList }) => 
  <div>
    <div className={styles.postContainer} >
      {data && animalsList.map(animal => 
        <Card animal={animal} data={data} />
      )}
    </div>
  </div>

export default HomeView;