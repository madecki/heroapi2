import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchHeroByName } from '../../services/heroesAPI';
import HeroSimplified from '../HeroSimplified/HeroSimplified';

function SearchView() {
  const { name } = useParams();
  const [ searchList, setSearchListContent ] = useState([]);
  const [ errorInfo, setErrorInfo ] = useState();

  useEffect(() => {
    searchHeroByName(name).then(searchResults => {
      const { data } = searchResults;
      if (data.error) {
        setErrorInfo(data.error)
        return;
      }

      const { results } = data;
      setSearchListContent(results);
      console.log(results)
    })                                         
  }, [name])
  

  return <section>
    { errorInfo && <h2>{errorInfo}</h2>}
    <ul>
      {searchList.map(({name, image, powerstats, id} = {}) => <HeroSimplified key={id} id={id} name={name} imgUrl={image.url} powerstats={powerstats} />)}
    </ul>
  </section>
}

export default SearchView;