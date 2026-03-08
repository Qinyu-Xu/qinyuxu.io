import { PageHeader } from '@/components/page-header';
import { h2, p } from '@/lib/styles';

export default function Page() {
  return (
    <div>
      <PageHeader
        name="Qinyu Xu"
        title="Ph.D. Student"
        institution="Courant Institute of Mathematical Sciences"
        university="New York University"
        email="qinyu.xu@nyu.edu"
        photo="/profile.jpg"
        googleScholar="https://scholar.google.com/citations?user=tGcgxQQAAAAJ&hl=en"
        github="https://github.com/Qinyu-Xu"
        linkedin="https://www.linkedin.com/in/qinyu-xu-10b324380/"
      />

      <h2 className={h2}>About</h2>
      <p className={p}>
        I am a Ph.D. student at the Courant Institute of Mathematical Sciences, New York University, advised by <a href="https://cs.nyu.edu/~apanda/" target="_blank" rel="noopener noreferrer" className="underline">Aurojit Panda</a>. My research focuses on systems for machine learning, with an emphasis on efficient LLM inference and serving.{' '}
        <span style={{ opacity: 0.05 }}>I also think about <a href="https://qinyuxu.me" className="underline">other things</a>.</span>
      </p>

      <h2 className={h2}>Research Interests</h2>
      <p className={p}>Systems for machine learning.</p>

      <h2 className={h2}>Education</h2>
      <p className={p}><strong className="font-bold">New York University</strong> — New York, NY<br />Ph.D. in Computer Science, 2025 – Present</p>
      <p className={p + ' mt-3'}><strong className="font-bold">Tsinghua University</strong> — Beijing, China<br />B.S. in Computer Science and Engineering, 2021 – 2025</p>

      <h2 className={h2}>Publications</h2>
      <p className={p}>
        <strong className="font-bold">Tactic: Adaptive Sparse Attention with Clustering and Distribution Fitting for Long-Context LLMs</strong><br />
        Kan Zhu, Tian Tang, <strong className="font-bold">Qinyu Xu</strong>, Yile Gu, Zhichen Zeng, Rohan Kadekodi, Liangyu Zhao, Ang Li, Arvind Krishnamurthy, Baris Kasikci<br />
        <em className="font-medium">ICLR 2026</em><br />
        <a href="https://openreview.net/forum?id=tJod11fK1A" target="_blank" rel="noopener noreferrer" className="underline">Paper</a>
      </p>
      <p className={p + ' mt-4'}>
        <strong className="font-bold">NanoFlow: Towards Optimal Large Language Model Serving Throughput</strong><br />
        Kan Zhu, Yilong Zhao, Liangyu Zhao, Gefei Zuo, Yile Gu, Dedong Xie, Yufei Gao, <strong className="font-bold">Qinyu Xu</strong>, Tian Tang, Zihao Ye, Keisuke Kamahori, Chien-Yu Lin, Stephanie Wang, Arvind Krishnamurthy, Baris Kasikci<br />
        <em className="font-medium">OSDI 2025</em><br />
        <a href="https://www.usenix.org/conference/osdi25/presentation/zhu-kan" target="_blank" rel="noopener noreferrer" className="underline">Paper</a>
      </p>
    </div>
  );
}
