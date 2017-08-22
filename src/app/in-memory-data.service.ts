import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        {
          id: 0,
          name: 'Zero',
          img: 'http://lorempixel.com/400/200/people/1',
          desc: 'Proin laoreet at metus at tincidunt. Curabitur euismod scelerisque nisl.' },
        { id: 1,
          name: 'Mr. Nice',
          img: 'http://lorempixel.com/400/200/people/2',
          desc: 'Vestibulum vel orci vitae quam pharetra lobortis.'
        },
        {
          id: 2,
          name: 'Narco',
          img: 'http://lorempixel.com/400/200/people/3',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 3,
          name: 'Bombasto',
          img: 'http://lorempixel.com/400/200/people/4',
          desc: 'Suspendisse cursus, dui sed pellentesque viverra, magna diam consectetur nibh, eget ultricies tortor purus sed urna.'
        },
        {
          id: 4,
          name: 'Celeritas',
          img: 'http://lorempixel.com/400/200/people/5',
          desc: 'Praesent ut nisi id risus posuere euismod.'
        },
        {
          id: 5,
          name: 'Magneta',
          img: 'http://lorempixel.com/400/200/people/6',
          desc: 'Nulla laoreet sapien augue, sagittis fringilla magna euismod ut. Maecenas vitae pellentesque risus, ut rutrum ipsum.'
        },
        {
          id: 6,
          name: 'RubberMan',
          img: 'http://lorempixel.com/400/200/people/7',
          desc: 'Integer scelerisque posuere turpis at dignissim.'
        },
        {
          id: 7,
          name: 'Dynama',
          img: 'http://lorempixel.com/400/200/people/8',
          desc: 'Donec tincidunt lectus enim, ut molestie magna placerat ac.'
        },
        {
          id: 8,
          name: 'Dr. IQ',
          img: 'http://lorempixel.com/400/200/people/9',
          desc: 'Nulla ut commodo lorem, et tincidunt nisi. '  },
        {
          id: 9,
          name: 'Magma',
          img: 'http://lorempixel.com/400/200/people/10',
          desc: 'Curabitur tellus ex, consequat vel ultricies ac, ultrices non lectus.'
        },
        {
          id: 10,
          name: 'Tornado',
          img: 'http://lorempixel.com/400/200/city/1',
          desc: 'Curabitur tellus ex, consequat vel ultricies ac, ultrices non lectus.'
        }
    ];
    return {heroes};
  }
}