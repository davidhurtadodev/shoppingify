import { Inter } from '@next/font/google';

import Layout from '@/components/Layout';
import MainItems from '@/components/MainItems';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <MainItems />
    </Layout>
  );
}
