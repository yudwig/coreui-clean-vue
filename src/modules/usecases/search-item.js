import HttpResponse from '../entities/http-response';
import statusCodes from '../entities/status-codes';

class SearchItem {
  query(conditions) {
    if (conditions.id) {
      const data = this._getOne(conditions.id);
    }
    else if (conditions.page && conditions.count) {
      const data = this._getList(conditions.page, conditions.count);
    }
    else {
      const data = null;
    }
    return new HttpResponse({
      code: statusCodes.ok,
    }, data);
  }

  _getList(page, count) {
    return samples.slice(page * count, count * (page * 1));
  }

  _getOne(id) {
    return samples.find(item => item.id === id);
  }
}

const samples = [
  {
    id: 1,
    title: 'A City Park',
    image_url: 'http://localhost:3000/images/1968.88 - A City Park.jpeg'
  },
  {
    id: 2,
    title: 'Paris Street; Rainy Day',
    image_url: 'http://localhost:3000/images/1964.336 - Paris Street; Rainy Day.jpeg'
  },
  {
    id: 3,
    title: 'Seascape',
    image_url: 'http://localhost:3000/images/1922.438 - Seascape.jpeg'
  },
  {
    id: 4,
    title: 'The Bathers',
    image_url: 'http://localhost:3000/images/1942.457 - The Bathers.jpeg'
  },
  {
    id: 5,
    title: 'Fruits of the Midi',
    image_url: 'http://localhost:3000/images/1933.1176 - Fruits of the Midi.jpeg'
  },
];

