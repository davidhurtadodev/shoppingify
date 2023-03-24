import { useRouter } from 'next/router';
import MainHistoryList from '@/components/MainHistoryList';

export default function ListPage() {
  const router = useRouter();
  const listId = router.query.list as string;

  return listId ? <MainHistoryList listId={listId} /> : null;
}
