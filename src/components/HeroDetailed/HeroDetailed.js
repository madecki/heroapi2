import React, { useEffect, useState } from 'react';
import { getFullHeroById } from '../../services/heroesAPI'
import './HeroDetailed.css';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

function HeroDetailed() {
  const [heroData, setHeroData] = useState({});
  const [isLoading, setLoadingState] = useState(true);
  const { id } = useParams();

  const fetchHero = async () => {
    const fullHeroInfo = await getFullHeroById(id);
    setHeroData(fullHeroInfo)
    setLoadingState(false)
  }

  useEffect(() => {
    fetchHero();
  }, [id])

  return (
    <>
      <section className="featured">
        <h1>Featured Heroes</h1>
        {!isLoading && <div className="featured__list">
          {heroData.name}
        </div>}
        {isLoading && 
          <div className="loader-container">
            <Loader />
          </div>}
      </section>
    </>
  );
}

export default HeroDetailed;
