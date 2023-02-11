import MenuTab from './MenuTab';
import Icon from './Icon';

export default function AsideNav() {
  return (
    <nav>
      <MenuTab>
        <Icon icon="list" />
      </MenuTab>
      <MenuTab>
        <Icon icon="replay" />
      </MenuTab>
      <MenuTab>
        <Icon icon="assessment" />
      </MenuTab>
    </nav>
  );
}
