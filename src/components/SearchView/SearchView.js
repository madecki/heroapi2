import React from 'react';
import { searchHeroByName } from '../../services/heroesAPI';
import HeroSimplified from '../HeroSimplified/HeroSimplified';

export default class SearchView extends React.Component {
  constructor(props) {
    super();
    console.log(props.match.params.name);
    this.state = {
      searchName: props.match.params.name,
      searchList: [],
      errorInfo: ''
    }
  }

  seatchForHero = () => {
    const {searchName} = this.state
    searchHeroByName(searchName).then(searchResults => {
      const { data } = searchResults;
      if (data.error) {
        this.setState({errorInfo: data.error})
        this.setState({searchList: []})
        return;
      }

      const { results } = data;
      this.setState({searchList: results})
      this.setState({errorInfo: ''})
      console.log(results)
    })   
  }

  componentDidMount() {
    this.seatchForHero();                   
  };

  // componentDidUpdate = () =>  {
  //   this.seatchForHero();
  // }
  
  render() {
    return (
      <section>
        { this.state.errorInfo && <h2>{this.state.errorInfo}</h2>}
        <ul>
          {this.state.searchList.map(({name, image, powerstats, id} = {}) => <HeroSimplified key={id} id={id} name={name} imgUrl={image.url} powerstats={powerstats} />)}
        </ul>
      </section>
    )
  }
}
