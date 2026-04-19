import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] flex font-inter">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#3a4a49]/30 bg-[#0d0e15] p-6 hidden md:block">
        <div className="font-space-grotesk text-2xl font-bold text-[#00FFFF] mb-12 tracking-widest">DAO_HUB</div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 text-[#00FFFF] border-r-2 border-[#00FFFF] pr-2"><span className="uppercase tracking-widest text-sm">Proposals</span></a>
          <a href="#" className="flex items-center gap-3 text-[#b9cac9] hover:text-[#e3e1ec] transition-colors"><span className="uppercase tracking-widest text-sm">Treasury</span></a>
          <a href="#" className="flex items-center gap-3 text-[#b9cac9] hover:text-[#e3e1ec] transition-colors"><span className="uppercase tracking-widest text-sm">Members</span></a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto p-8">
        {/* Treasury Widget */}
        <section className="mb-12 border-b border-[#3a4a49]/30 pb-8">
          <p className="font-space-grotesk text-[#b9cac9] uppercase tracking-[0.2em] text-xs mb-2">Total Treasury Balance</p>
          <div className="font-space-grotesk text-6xl text-[#00FFFF] font-bold drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
            4,500,000<span className="text-2xl text-[#e3e1ec] ml-2 font-light">.00</span>
          </div>
        </section>

        {/* Proposals Grid */}
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-space-grotesk text-2xl uppercase tracking-widest">Active Proposals</h2>
          <button className="px-6 py-2 bg-[#00FFFF] text-[#003737] font-space-grotesk font-bold uppercase tracking-widest hover:shadow-[0_0_15px_#00FFFF] transition-all">New Proposal</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1a1b22]/60 backdrop-blur-xl border border-[#3a4a49]/30 p-6 relative group hover:bg-[#292931]/60 transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF]/50 text-xs font-space-grotesk uppercase tracking-widest">Active</span>
              <span className="text-[#b9cac9] text-xs font-mono">ID: #0042</span>
            </div>
            <h3 className="font-space-grotesk text-xl mb-6 pr-4">Allocate 5M USDC to Liquidity Provisioning on Curve</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-space-grotesk mb-1"><span className="text-[#00FFFF]">FOR</span><span>78%</span></div>
                <div className="h-1 w-full bg-[#0d0e15]"><div className="h-full bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]" style={{width: '78%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-space-grotesk mb-1"><span className="text-[#ffb4ab]">AGAINST</span><span>22%</span></div>
                <div className="h-1 w-full bg-[#0d0e15]"><div className="h-full bg-[#93000a]" style={{width: '22%'}}></div></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1b22]/60 backdrop-blur-xl border border-[#3a4a49]/30 p-6 relative group hover:bg-[#292931]/60 transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-[#3a4a49]/30 text-[#b9cac9] text-xs font-space-grotesk uppercase tracking-widest">Closed</span>
              <span className="text-[#b9cac9] text-xs font-mono">ID: #0041</span>
            </div>
            <h3 className="font-space-grotesk text-xl mb-6 pr-4">Update Core Protocol Reward Emission Schedule</h3>
            
            <div className="space-y-4 opacity-50">
              <div>
                <div className="flex justify-between text-xs font-space-grotesk mb-1"><span className="text-[#00FFFF]">FOR</span><span>92%</span></div>
                <div className="h-1 w-full bg-[#0d0e15]"><div className="h-full bg-[#00FFFF]" style={{width: '92%'}}></div></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
