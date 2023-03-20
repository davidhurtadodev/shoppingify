import { ListFetched } from '@/lib/types/List';
import helper from '@/lib/helper';
import Badge from './Badge';
import Icon from './Icon';
import Button from './Button';
import { List } from 'reselect/es/types';

interface MonthListButtonProps {
  list: ListFetched;
}

export default function MonthListButton({ list }: MonthListButtonProps) {
  return (
    <Button
      customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-6  px-4 w-full rounded-xl mb-7"
      key={list.id}
    >
      <span>{helper.capitalizeString(list.name)}</span>
      <div className="mr-0 ml-auto flex items-center">
        <Icon filled customClasses="text-gray mr-3" icon="event_note" />
        <span className="mr-6 text-xs text-gray">
          {helper.formatDate(list.date)}
        </span>
        <Badge customClasses="mr-8" isCancelled={list.isCancelled} />
        <Icon icon="chevron_right" customClasses="text-primary-accent" />
      </div>
    </Button>
  );
}
