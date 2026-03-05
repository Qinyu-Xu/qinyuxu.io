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
        PhD student by day. Boring by self-assessment. Interesting by accident. People say I'm innocent — they're probably right. If you're a cute and interesting guy — or happen to know one you'd recommend — say hi on <a href="https://www.instagram.com/qinyu_xu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300">Instagram</a>. I also think about <a href="https://qinyuxu.io" className="underline">serious things</a>.
      </p>

      <h2 className={h2}>Life</h2>
      <p className={p}>Grew up in a small town near Shanghai. Moved to New York in 2025 for grad school, which means I traded one kind of not-knowing-what-I'm-doing for another, but in English this time. </p>
      <p className={p + ' mt-3'}>Also recently started learning how to be gay, which is its own kind of grad school.</p>
      <p className={p + ' mt-3'}>Most of my life happens at a desk on the 4th floor of 60 5th Ave. The rest happens on any random corners around the city.</p>
      <p className={p + ' mt-3'}>I'm still figuring out most things.</p>

      <h2 className={h2}>Now</h2>
      <ul className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1">
        <li className="pl-1">figuring out English after yet another day of not knowing my research direction</li>
        <li className="pl-1">wondering why the entire world decided to do MLSys at the same time</li><li className="pl-1">listening to Aperture on repeat</li>
        <li className="pl-1">bouldering from scratch (currently: v1)</li>
        <li className="pl-1">trying to make latte and matcha art (currently: milk foam)</li>
        <li className="pl-1">learning to run faster with people who are already fast</li>
        <li className="pl-1">can't figure out how to afford Roosevelt Island Racquet Club</li>
        <li className="pl-1">weekly pilgrimage to Flushing for 螺蛳粉 and 鸭血粉丝</li>
      </ul>
      <br />
      This website strictly follows the rules of software engineering. If you don't believe me, go check my commit messages.
    </div>
  );
}
