export interface Packet {
  type: string;
  offered: boolean;
}

export interface Service {
  name: string;
  price: string;
  billing: string;
  packets: Packet[];
}

export const Packets: Service[] = [
  {
    name: 'Start here',
    price: '0',
    billing: 'Per month',
    packets: [
      {
        type: 'Type of threat',
        offered: true,
      },
      {
        type: 'Online presence',
        offered: true,
      },
      {
        type: 'Access to all modules',
        offered: true,
      },
      {
        type: 'Notability',
        offered: false,
      },
      {
        type: 'Optimize existing websites',
        offered: false,
      },
      {
        type: 'Search autocomplete',
        offered: false,
      },
    ],
  },
  {
    name: 'Single',
    price: '56',
    billing: 'Per month',
    packets: [
      {
        type: 'Type of threat',
        offered: true,
      },
      {
        type: 'Online presence',
        offered: true,
      },
      {
        type: 'Access to all modules',
        offered: true,
      },
      {
        type: 'Notability',
        offered: true,
      },
      {
        type: 'Optimize existing websites',
        offered: true,
      },
      {
        type: 'Search autocomplete',
        offered: true,
      },
    ],
  },
  {
    name: 'Family',
    price: '124',
    billing: 'Per month',
    packets: [
      {
        type: 'Type of threat',
        offered: true,
      },
      {
        type: 'Online presence',
        offered: true,
      },
      {
        type: 'Access to all modules',
        offered: true,
      },
      {
        type: 'Notability',
        offered: true,
      },
      {
        type: 'Optimize existing websites',
        offered: true,
      },
      {
        type: 'Search autocomplete',
        offered: true,
      },
    ],
  },
];
