import MenuTab from './MenuTab';

export default function AsideNav() {
  return (
    <nav>
      <MenuTab icon="list" />
      <MenuTab icon="replay" />
      <MenuTab icon="assessment" iconCustomStyle="-outlined" />
    </nav>
  );
}
