import type { Metadata } from 'next';
import { Ma_Shan_Zheng } from 'next/font/google';
import { PageHeader } from '@/components/page-header';
import { h2, p } from '@/lib/styles';
import { ImageHover } from '@/components/image-hover';

const maShanZheng = Ma_Shan_Zheng({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Me',
  alternates: { canonical: '/me' },
  robots: { index: false, follow: false },
};

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
        PhD student by day. <s>Boring by self-assessment</s> (someone disagrees). Interesting by accident. People say I'm innocent — they're probably right. If you're a cute and interesting guy — or happen to know one you'd recommend — say hi on <a href="https://www.instagram.com/qinyu_xu/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>. I also think about <a href="https://qinyuxu.io" className="underline">serious things</a>.
      </p>

      <h2 className={h2}>Life</h2>
      <p className={p}>Grew up in a <a href="https://maps.app.goo.gl/WSQr3WpBkuDXV6Pp6" target="_blank" rel="noopener noreferrer" className="underline">small town near Shanghai</a>. Native speaker of <a href="https://en.wikipedia.org/wiki/Lower_Yangtze_Mandarin" target="_blank" rel="noopener noreferrer" className="underline"><span className={maShanZheng.className} style={{fontSize: '0.9em'}}>苏北</span>nese</a>, which you've never heard of. Moved to New York in 2025 for grad school, which means I traded one kind of not-knowing-what-I'm-doing for another, but in English this time. </p>
      <p className={p + ' mt-3'}>Also recently started learning how to be gay, which is its own kind of grad school.</p>
      <p className={p + ' mt-3'}>Most of my life happens at <ImageHover src="/desk.jpeg" alt="my desk">a desk on 60 5th Ave</ImageHover>. The rest happens on any random corners around the city.</p>
      <p className={p + ' mt-3'}>I'm still figuring out most things.</p>

      <h2 className={h2}>Now</h2>
      <ul className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1">
        <li className="pl-1">figuring out how to make friends outside of school as an adult for the first time</li>
        <li className="pl-1">wondering why the entire world decided to do MLSys at the same time</li>
        <li className="pl-1">rotating Harry Styles's new album — <a href="https://www.youtube.com/watch?v=g0O9q3ycL7U" target="_blank" rel="noopener noreferrer" className="underline">Season 2 Weight Loss</a> especially</li>
        <li className="pl-1">bouldering from scratch (currently: v1)</li>
        <li className="pl-1">trying to make <ImageHover src="/latte.jpeg" alt="latte art">latte</ImageHover> and <ImageHover src="/matcha.jpeg" alt="matcha art">matcha</ImageHover> art, better than <a href="https://akutagawa1998.github.io/people/" className="underline">this guy</a></li>
        <li className="pl-1">learning to run faster with people who are already fast</li>
        <li className="pl-1">can't figure out how to afford Roosevelt Island Racquet Club</li>
        <li className="pl-1">weekly pilgrimage to Flushing for <ImageHover src="/luosifen.jpeg" alt="螺蛳粉"><span className={maShanZheng.className} style={{fontSize: '0.9em'}}>螺蛳粉</span></ImageHover> and <ImageHover src="/yaxuefensi.jpeg" alt="鸭血粉丝"><span className={maShanZheng.className} style={{fontSize: '0.9em'}}>鸭血粉丝</span></ImageHover>(unfortunately I don't have enough time to do so now)</li>
        <li className="pl-1">obsessed with the 8th Ave express structure under Central Park, want to build a max flow simulator for mta, unfortunately I don't have time either</li>
      </ul>
      <br />
      This website strictly follows the rules of software engineering. If you don't believe me, go check my commit messages. <br />
      None of the links on this page will install malware or lead you to unexpected places. That's a promise.
    </div>
  );
}
