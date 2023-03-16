import MenuTab from './MenuTab';
import Icon from './Icon';
import Tooltip from './Tooltip';

export default function AsideNav() {
  return (
    <nav>
      <MenuTab>
        <Icon icon="list" />
        <Tooltip text="items" />
      </MenuTab>
      <MenuTab>
        <Icon icon="replay" />
        <Tooltip text="history" />
      </MenuTab>
      <MenuTab>
        <Icon icon="assessment" />
        <Tooltip text="statistics" />
      </MenuTab>
    </nav>
  );
}
