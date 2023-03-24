import Link from 'next/link';
import MenuTab from './MenuTab';
import Icon from './Icon';
import Tooltip from './Tooltip';

export default function AsideNav() {
  return (
    <nav>
      <Link href="/">
        <MenuTab hrefReference="/">
          <Icon icon="list" />
          <Tooltip text="items" />
        </MenuTab>
      </Link>
      <Link href="/history">
        <MenuTab hrefReference="/history">
          <Icon icon="replay" />
          <Tooltip text="history" />
        </MenuTab>
      </Link>
      <Link href="#">
        <MenuTab hrefReference="/statistics">
          <Icon icon="assessment" />
          <Tooltip text="statistics" />
        </MenuTab>
      </Link>
    </nav>
  );
}
