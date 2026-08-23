import { PageHeader } from '@/components/page-header';
import { h2, p, ul, li } from '@/lib/styles';

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
        I am a Ph.D. student in Computer Science at the Courant Institute of Mathematical Sciences, New York University, working with <a href="https://cs.nyu.edu/~anirudh/" target="_blank" rel="noopener noreferrer" className="underline">Anirudh Sivaraman</a>. Before NYU, I received my B.E. in Computer Science and Engineering from Tsinghua University. I work on distributed systems and formal verification, and how both can make machine learning systems more reliable.{' '}
        {/* <span style={{ opacity: 0.05 }}>I also think about <a href="https://qinyuxu.me" className="underline">other things</a>.</span> */}
      </p>

      <h2 className={h2}>Research Interests</h2>
      <ul className={ul + ' mt-0'}>
        <li className={li}>Distributed systems</li>
        <li className={li}>Formal verification</li>
        <li className={li}>Machine learning systems</li>
      </ul>

      <h2 className={h2}>Research</h2>
      <p className={p}>
        <strong className="font-bold">vCheck: Verifiable Checkpointing for LLM Training</strong><br />
        New York University, 2025 &ndash; Present. Advisor: Anirudh Sivaraman.
      </p>
      <ul className={ul}>
        <li className={li}>Designed a two-layer checkpointing architecture that separates a general, application-oblivious consistency argument from application-specific state saving.</li>
        <li className={li}>Completed a verified implementation of the application-oblivious layer: wrote the generic library in Go, translated it into Rocq via Goose, and proved in Grove that it satisfies the system&rsquo;s state reachability theorem.</li>
        <li className={li}>Adapted the Chandy&ndash;Lamport snapshot algorithm to capture globally consistent checkpoints asynchronously, without stalling training or requiring programmable-switch support.</li>
      </ul>

      <p className={p + ' mt-4'}>
        <strong className="font-bold">Tactic: Sparse Attention for Long-Context LLM Inference</strong><br />
        University of Washington, 2024 &ndash; 2025. Supervisor: Baris Kasikci.
      </p>
      <ul className={ul}>
        <li className={li}>Proposed and developed a dynamic token-selection method for KV cache optimization in long-context LLM inference.</li>
        <li className={li}>Designed a three-phase approach based on spherical k-means clustering, token ordering, and attention-score distribution modeling.</li>
        <li className={li}>Developed a custom kernel to accelerate k-means clustering performance.</li>
      </ul>

      <p className={p + ' mt-4'}>
        <strong className="font-bold">NanoFlow: High-Throughput LLM Serving</strong><br />
        University of Washington, 2024 &ndash; 2025. Supervisor: Baris Kasikci.
      </p>
      <ul className={ul}>
        <li className={li}>Profiled GPU utilization and operator-level performance for the serving pipeline.</li>
      </ul>

      <p className={p + ' mt-4'}>
        <strong className="font-bold">Open-Structure Table Extraction</strong><br />
        Microsoft Research Asia, 2023 &ndash; 2024. Supervisor: Haoyu Dong.
      </p>
      <ul className={ul}>
        <li className={li}>Built a data pipeline transforming large open-domain corpora into high-quality annotated tables.</li>
        <li className={li}>Designed an evaluation framework for benchmarking models on open-structure table detection.</li>
      </ul>

      <h2 className={h2}>Education</h2>
      <p className={p}><strong className="font-bold">New York University</strong> — New York, NY<br />Ph.D. in Computer Science, 2025 – Present</p>
      <p className={p + ' mt-3'}><strong className="font-bold">Tsinghua University</strong> — Beijing, China<br />B.E. in Computer Science and Engineering, 2021 – 2025</p>

      <h2 className={h2}>Publications and Posters</h2>
      <p className={p}>
        <strong className="font-bold">vCheck: Building Efficient and Verifiable Checkpointing for LLM Training</strong><br />
        <strong className="font-bold">Qinyu Xu</strong>, Jinkun Geng, Joseph Tassarotti, Anirudh Sivaraman<br />
        <em className="font-medium">SOSP 2026 Poster</em>, Prague, Czech Republic
      </p>
      <p className={p + ' mt-4'}>
        <strong className="font-bold">Tactic: Adaptive Sparse Attention with Clustering and Distribution Fitting for Long-Context LLMs</strong><br />
        Kan Zhu, Tian Tang, <strong className="font-bold">Qinyu Xu</strong>, Zhan Jin, Yile Gu, Zhichen Zeng, Rohan Kadekodi, Liangyu Zhao, Ang Li, Arvind Krishnamurthy, Baris Kasikci<br />
        <em className="font-medium">ICLR 2026</em>, Rio de Janeiro, Brazil<br />
        <a href="https://openreview.net/forum?id=tJod11fK1A" target="_blank" rel="noopener noreferrer" className="underline">Paper</a>
      </p>
      <p className={p + ' mt-4'}>
        <strong className="font-bold">NanoFlow: Towards Optimal Large Language Model Serving Throughput</strong><br />
        Kan Zhu, Yufei Gao, Yilong Zhao, Liangyu Zhao, Gefei Zuo, Yile Gu, Dedong Xie, Tian Tang, <strong className="font-bold">Qinyu Xu</strong>, Zihao Ye, Keisuke Kamahori, Chien-Yu Lin, Ziren Wang, Stephanie Wang, Arvind Krishnamurthy, Baris Kasikci<br />
        <em className="font-medium">OSDI 2025</em>, Boston, MA, USA<br />
        <a href="https://www.usenix.org/conference/osdi25/presentation/zhu-kan" target="_blank" rel="noopener noreferrer" className="underline">Paper</a>
      </p>
      <p className={p + ' mt-4'}>
        <strong className="font-bold">OpenTE: Open-Structure Table Extraction from Text</strong><br />
        Haoyu Dong, Mengkang Hu, <strong className="font-bold">Qinyu Xu</strong>, Haochen Wang, Yue Hu<br />
        <em className="font-medium">ICASSP 2024</em>, Seoul, Korea
      </p>
    </div>
  );
}
