import Link from 'next/link';
import MenuTab from './MenuTab';
import Icon from './Icon';
import Tooltip from './Tooltip';

export default function AsideNav() {
  const routesArray = [
    {
      routeRef: '/',
      icon: 'list',
      tooltip: 'items',
    },
    {
      routeRef: '/history',
      icon: 'replay',
      tooltip: 'history',
    },
    {
      routeRef: '#',
      icon: 'assessment',
      tooltip: 'statistics',
    },
  ];
  return (
    <nav className="mt-20">
      {routesArray.map((route) => (
        <Link key={route.routeRef} href={route.routeRef}>
          <MenuTab hrefReference={route.routeRef}>
            <Icon icon={route.icon} />
            <Tooltip text={route.tooltip} />
          </MenuTab>
        </Link>
      ))}
    </nav>
  );
}
