import Assets from '../Assets';

const gamesArray = [
  {
    id: '001',
    description:
      'A legendary open world action game that changed the game industry forever',
    title: 'Grand Theft Auto III',
    genre: 'Action',
    rating: 5,
    platform: ['PC', 'XBOX', 'PLAYSTATION 2'],
    image: Assets.gameCovers.gtaIIICover,
  },
  {
    id: '002',
    description:
      'A legendary open world action game that changed the game industry forever',
    title: 'Grand Theft Auto San Andreas',
    genre: 'Action',
    platform: ['PC', 'XBOX', 'PLAYSTATION 2'],
    image: Assets.gameCovers.gtaSACover,
  },
  {
    id: '003',
    description:
      'A legendary open world action game that changed the game industry forever',
    title: 'Grand Theft Auto V',
    genre: 'Action',
    platform: ['PC', 'XBOX', 'PLAYSTATION 2'],
    image: Assets.gameCovers.gtaVCover,
  },
];

export default gamesArray;
