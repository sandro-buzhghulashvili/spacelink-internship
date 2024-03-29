import { CheckCircle } from 'lucide-react';
import Card from '../UI/Card';

import classes from './Pricing.module.scss';
import { Packets, Service } from './DUMMY_PACKETS';

interface ServiceComponentType extends Service {
  active: number;
  onActive: (index: number) => void;
}

export default function ServiceComponent({
  name,
  price,
  billing,
  packets,
  active,
  onActive,
}: ServiceComponentType) {
  return (
    <Card
      onClick={() =>
        onActive(Packets.findIndex((service) => service.name === name))
      }
      className={`w-3/4 sm:w-1/2 m-5 lg:w-1/3 xl:w-1/4 ${classes.packet} ${
        active === Packets.findIndex((service) => service.name === name)
          ? classes.active
          : null
      }`}
    >
      <h1 className="text-center mb-2 text-lg text-primary_typo">{name}</h1>
      <h1 className="text-center mb-2 text-5xl font-bold text-primary_typo">
        {price}$
      </h1>
      <p className="text-center mb-5 text-primary_typo">{billing}</p>
      <ul className="text-primary_typo">
        {packets.map((packet, index) => (
          <li key={index}>
            <CheckCircle
              className={`${classes.icon} ${
                packet.offered ? 'fill-green-600' : null
              } `}
            />
            {packet.type}
          </li>
        ))}
      </ul>
      <button className=" text-primary_typo">Request access</button>
    </Card>
  );
}
