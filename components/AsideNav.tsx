import Link from 'next/link';
import MenuTab from './MenuTab';
import Icon from './Icon';
import Tooltip from './Tooltip';

export default function AsideNav() {
  return (
    <nav>
      <Link href="/">
        <MenuTab>
          <Icon icon="list" />
          <Tooltip text="items" />
        </MenuTab>
      </Link>
      <Link href="/history">
        <MenuTab>
          <Icon icon="replay" />
          <Tooltip text="history" />
        </MenuTab>
      </Link>
      <Link href="/statistics">
        <MenuTab>
          <Icon icon="assessment" />
          <Tooltip text="statistics" />
        </MenuTab>
      </Link>
    </nav>
  );
}
