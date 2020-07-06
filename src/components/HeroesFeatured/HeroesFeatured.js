import React, { useEffect, useState } from 'react';
import { getHeroPreviewById } from '../../services/heroesAPI'
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import './HeroesFeatured.css';
import Loader from '../Loader/Loader';

const featuredIds = [
  "644",
  "70",
  "720",
];

function HeroesFeatured() {
  const [featuredHeroes, setFeaturedHeroes] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const fetchHeroes = async () => {
    const heroesArray = [];
    for (const id of featuredIds) {
      const data = await getHeroPreviewById(id);
      heroesArray.push(data);
    }

    setFeaturedHeroes(heroesArray)
    setLoadingState(false)
  }

  useEffect(() => {
    fetchHeroes();
  }, [])

  return (
    <>
      <section className="featured">
        <h1>Featured Heroes</h1>
        {!isLoading && <div className="featured__list">
          {featuredHeroes.map(({name, imgUrl, powerstats, id}) => {
            return (
              <HeroSimplified key={id} id={id} name={name} imgUrl={imgUrl} powerstats={powerstats}/>
            )
          })}
        </div>}
        {isLoading && 
          <div className="loader-container">
            <Loader />
          </div>}
      </section>
    </>
  );
}

export default HeroesFeatured;
