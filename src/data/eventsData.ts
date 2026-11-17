// Migrated Upcoming Trade Shows & Events from ITS Cooling (https://www.itscooling.com/pages/events)

export interface TradeShowEvent {
  id: string;
  year: number;
  name: string;
  dates: string;
  location: string;
  logo: string;
  detailsUrl: string;
}

export const TRADE_SHOW_EVENTS: TradeShowEvent[] = [
  {
    id: 'electronica-2026',
    year: 2026,
    name: 'Electronica 2026',
    dates: 'November 10–13, 2026',
    location: 'Munich, Germany',
    logo: '/images/events/electronica-2026.png',
    detailsUrl: 'https://exhibitors.electronica.de/exhibitor-portal/2026/list-of-exhibitors/exhibitordetails/innovative-thermal-solutions-inc/?elb=809.1100.12159.1.111&uls=2'
  },
  {
    id: 'spie-photonics-west-2027',
    year: 2027,
    name: 'SPIE Photonics West',
    dates: 'February 2–4, 2027',
    location: 'San Francisco, California, USA',
    logo: '/images/events/spie-photonics-west.webp',
    detailsUrl: 'https://spie.org/ExhibitorDetail?ExpoID=5037&ExhibitorID=106167'
  },
  {
    id: 'apec-2027',
    year: 2027,
    name: 'APEC 2027',
    dates: 'March 7–11, 2027',
    location: 'New Orleans, Louisiana, USA',
    logo: '/images/events/apec-2027.webp',
    detailsUrl: 'https://apec-conf.org/'
  },
  {
    id: 'pcim-2027',
    year: 2027,
    name: 'PCIM Expo & Conference',
    dates: 'May 11–13, 2027',
    location: 'Nuremberg, Germany',
    logo: '/images/events/pcim-2027.webp',
    detailsUrl: 'https://pcim.mesago.com/nuernberg/en.html'
  },
  {
    id: 'ims-2027',
    year: 2027,
    name: 'IMS 2027',
    dates: 'May 23–28, 2027',
    location: 'San Antonio, Texas, USA',
    logo: '/images/events/ims-2027.png',
    detailsUrl: 'https://ims-ieee.org/'
  }
];
