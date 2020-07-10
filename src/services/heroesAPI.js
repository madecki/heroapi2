import axios from 'axios';

const accessToken = 3658742804152352;

export const getFullHeroById = async id => {
  const {data} = await axios.get(`https://superheroapi.com/api/${accessToken}/${id}`)
  return data;
}

export const searchHeroByName = name => {
  return axios.get(`https://superheroapi.com/api/${accessToken}/search/${name}`)
}

export const getHeroPreviewById = async id => {
  const {data:powerstats} = await axios.get(`https://superheroapi.com/api/${accessToken}/${id}/powerstats`);
  const {data:image} = await axios.get(`https://superheroapi.com/api/${accessToken}/${id}/image`);
  return { name: powerstats.name, powerstats, imgUrl: image.url, id };
}