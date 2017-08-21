import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 0, name: 'Zero', img: 'http://lorempixel.com/400/200/people/1' },
        { id: 11, name: 'Mr. Nice', img: 'http://lorempixel.com/400/200/people/2'  },
        { id: 12, name: 'Narco', img: 'http://lorempixel.com/400/200/people/3'  },
        { id: 13, name: 'Bombasto', img: 'http://lorempixel.com/400/200/people/4'  },
        { id: 14, name: 'Celeritas', img: 'http://lorempixel.com/400/200/people/5'  },
        { id: 15, name: 'Magneta', img: 'http://lorempixel.com/400/200/people/6'  },
        { id: 16, name: 'RubberMan', img: 'http://lorempixel.com/400/200/people/7'  },
        { id: 17, name: 'Dynama', img: 'http://lorempixel.com/400/200/people/8'  },
        { id: 18, name: 'Dr. IQ', img: 'http://lorempixel.com/400/200/people/9'  },
        { id: 19, name: 'Magma', img: 'http://lorempixel.com/400/200/people/10'  },
        { id: 20, name: 'Tornado', img: 'http://lorempixel.com/400/200/people/11'  }
    ];
    return {heroes};
  }
}