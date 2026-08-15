import Link from "next/link";
export default function Dashboard(){
 return <main className="dashboard-page">
  <div className="dash-wrap">
   <Link href="/" className="back">← Back to Kaavu</Link>
   <div className="dash-head"><div><div className="eyebrow">KAAVU HEALTHCARE</div><h1>Health Dashboard</h1><p>Your personal space for health insights and future wellness tracking.</p></div><div className="dash-heart">♥</div></div>
   <div className="dash-grid"><div><span>Wellness Score</span><strong>--</strong><small>Complete a health check to begin</small></div><div><span>Recent Checks</span><strong>0</strong><small>No checks recorded yet</small></div><div><span>Reminders</span><strong>0</strong><small>No reminders added</small></div></div>
   <section className="info-card"><div><div className="eyebrow">PROJECT INFO</div><h2>Created by N. Kathirvel</h2><p>Kaavu Healthcare is designed as an AI-powered health guidance experience.</p></div><div className="links"><a href="https://www.linkedin.com/in/kathirvel12" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/12kathirvel" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://instagram.com/ig_kathir_12" target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:nirmalkathir979@gmail.com">Email ↗</a></div></section>
   <footer className="dash-foot">© 2026 All Rights Reserved.</footer>
  </div>
 </main>
}