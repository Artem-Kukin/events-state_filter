import { useState } from 'react'
import './App.css'
import Cards from './Cards'
import Toolbar from './Toolbar';

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cards, setCards] = useState(Cards);

  const onSelectedFilter = (e) => {
    let pushedButton = e.target.textContent; 
    setSelectedCategory(pushedButton);

    if(pushedButton === 'All') {
      setCards(Cards)
    } else {
      setCards(Cards.filter((el) => el.category === pushedButton));
    }
  };

  return (
    <>
      <div className="bottons">
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={selectedCategory}
          onSelectFilter={onSelectedFilter}
          />
      </div>
      <div className="cards">
        {cards.map((el, index) => (<img key={index} src={el.img} alt={el.category}/>))}
      </div>
    </>
  );
}

export default Portfolio;