import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Me',
  alternates: { canonical: '/me' },
};

const h2 = 'text-[11px] uppercase tracking-[0.14em] font-medium text-gray-400 dark:text-zinc-500 border-b border-gray-200 dark:border-zinc-700 pb-1.5 mt-10 mb-4';
const p = 'text-gray-800 dark:text-zinc-300 leading-snug';

export default function Me() {
  return (
    <div className="space-y-0">
      <PageHeader
        name="Qinyu Xu"
        title="Normal People"
        institution="Random Corner"
        university="New York City"
        email="qinyuxu.me@gmail.com"
        photo="/profile2.jpg"
        instagram="https://www.instagram.com/qinyu_xu/"
      />

      <h2 className={h2}>About</h2>
      <p className={p}>
        I also think about <a href="/" style={{ opacity: 0.25 }} className={p}>serious things</a>.
      </p>

      <h2 className={h2}>Life</h2>
      <p className={p}>[Placeholder]</p>

      <h2 className={h2}>Now</h2>
      <p className={p}>[Placeholder — currently reading / watching / obsessing over]</p>
    </div>
  );
}
