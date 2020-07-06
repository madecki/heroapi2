import React from 'react';
import './HeroSimplified.css';
import * as icons from '../../assets/icons';
import { Link } from 'react-router-dom';

function HeroSimplified({ imgUrl, name, powerstats, id }) {
  return (
    <article className="featured__hero">
      <h2>{name}</h2>
      <Link to={`hero/${id}`}><img className="featured__hero__img" src={imgUrl} alt={`${name} illustration`}/></Link>
      <div className="featured__hero__stats">
        <div>
          <img className="featured__hero__stats_icon" src={icons.boxingIcon} alt="combat icon" />
          <p>{powerstats.combat}</p>
        </div>

        <div>
          <img className="featured__hero__stats_icon" src={icons.durableIcon} alt="combat icon" />
          <p>{powerstats.durability}</p>
        </div>

        <div>
          <img className="featured__hero__stats_icon" src={icons.thinkingIcon} alt="combat icon" />
          <p>{powerstats.intelligence}</p>
        </div>

        <div>
          <img className="featured__hero__stats_icon" src={icons.speedometerIcon} alt="combat icon" />
          <p>{powerstats.speed}</p>
        </div>

        <div>
          <img className="featured__hero__stats_icon" src={icons.fistIcon} alt="combat icon" />
          <p>{powerstats.strength}</p>
        </div>
      </div>
    </article>
  );
}

export default HeroSimplified;
