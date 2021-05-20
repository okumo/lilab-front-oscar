import Lechuga from './images/lechuga.jpg';
import Manzana from './images/manzana.jpeg';
import Pepino from './images/pepino.jpg';
import Pera from './images/pera.jpg';
import Pina from './images/pina.jpg';
import Zanahoria from './images/zanahoria.jpg';
 // eslint-disable-next-line 
export default {
  cart: [],
  orders: [],
  buyer: [],
  products: [
    {
      id: '1',
      image: Lechuga,
      title: 'Lechuga',
      price: 25,
      category: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '2',
      image: Manzana,
      title: 'Manzana',
      price: 25,
      category: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '3',
      image: Pepino,
      title: 'Pepino',
      price: 10,
      category: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '4',
      image: Pera,
      title: 'Pera',
      price: 4,
      category: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '5',
      image: Pina,
      title: 'Pina',
      price: 2,
      category: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: '6',
      image: Zanahoria,
      title: 'Zanahoria',
      price: 2,
      category: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
};
