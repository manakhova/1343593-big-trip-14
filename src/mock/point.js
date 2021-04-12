import {getRandomInteger, shuffleArray, generateDate} from '../utils/common';
import {types, cities} from '../const';
import {nanoid} from 'nanoid';

const generateCity = () => {
  const randomIndex = getRandomInteger(0, cities.length - 1);

  return cities[randomIndex];
};

const generateDescription = () => {
  const propositions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'Cras aliquet varius magna, non porta ligula feugiat eget. ',
    'Fusce tristique felis at fermentum pharetra. ',
    'Aliquam id orci ut lectus varius viverra. ',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
  ];
  const randomPropositions = shuffleArray(propositions);
  const randomQuantity = getRandomInteger(1, propositions.length - 1);

  return randomPropositions.slice(randomQuantity);
};

const generatePicture = () => {
  return {
    src: `http://picsum.photos/248/152?r=${getRandomInteger(1, 200)}`,
    description: 'Some text',
  };
};

const generatePictures = () => {
  const randomQuantity = getRandomInteger(1, 10);
  return new Array(randomQuantity).fill().map(generatePicture);
};

const generateTitle = () => {
  const titles = [
    'Add luggage',
    'Switch to comfort class',
    'Add meal',
    'Choose seats',
    'Travel by train',
  ];
  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generateDestination = () => {
  return {
    description: generateDescription(),
    name: generateCity(),
    pictures: generatePictures(),
  };
};

const generateOffer = () => {
  return {
    title: generateTitle(),
    price: getRandomInteger(0, 50),
  };
};

const generateType = () => {
  const randomIndex = getRandomInteger(0, types.length - 1);
  return types[randomIndex];
};

const generateOffers = () => {
  const randomQuantity = getRandomInteger(1, 5);
  return {
    type: generateType(),
    offers: new Array(randomQuantity).fill().map(generateOffer),
  };
};

export const generatePoint = () => {
  return {
    basePrice: getRandomInteger(0, 1000),
    dateFrom: generateDate(`2021-04-10T0${getRandomInteger(1, 9)}:${getRandomInteger(10, 59)}:00.000Z`),
    dateTo: generateDate(`2021-04-10T${getRandomInteger(10, 23)}:${getRandomInteger(10, 59)}:00.000Z`),
    destination: generateDestination(),
    id: nanoid(),
    offers: generateOffers(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    type: generateType(),
  };
};