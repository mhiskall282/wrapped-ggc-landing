"use client";

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-gold-600 to-gold-300 flex items-center justify-center text-neutral-950 font-bold tracking-tighter text-xs shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              GGC
            </div>
            <span className="text-neutral-200 font-medium tracking-tight group-hover:text-white transition-colors">Ghana Gold</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Reserves</a>
            <a href="#" className="hover:text-white transition-colors">Audit</a>
            <a href="#" className="hover:text-white transition-colors">Banking</a>
            <a href="#" className="hover:text-white transition-colors">Institutional</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:text-white transition-colors hidden sm:block">Log in</a>
            <button className="bg-white text-neutral-950 px-4 py-2 rounded text-xs font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Open Account
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-radial from-gold-500/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gold-400 mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse"></span>
              Live GGC Price: $2,341.50 / oz
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
              Sovereign wealth,<br />digitized.
            </h1>

            <p className="text-lg text-neutral-400 mb-10 leading-relaxed max-w-xl mx-auto">
              The stability of Ghana's gold reserves meets the speed of modern finance. Send, save, and spend real gold instantly with GGC.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-950 rounded font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                Start Banking
                <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
              </button>
              <button className="w-full sm:w-auto px-8 py-3 glass text-white rounded font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
                Read Whitepaper
              </button>
            </div>
          </div>
        </div>

        {/* Mock Interface / App Preview */}
        <div className="mt-20 max-w-5xl mx-auto px-6 relative">
          <div className="absolute inset-0 bg-gold-500/5 blur-3xl -z-10 rounded-full"></div>

          {/* Dashboard Container */}
          <div className="glass rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-slide-up">
            {/* App Header */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-900/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
              </div>
              <div className="mx-auto text-xs font-mono text-neutral-500 flex items-center gap-1">
                <span className="iconify" data-icon="lucide:lock" data-width="10"></span>
                app.ggc.finance
              </div>
            </div>

            {/* App Body */}
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] min-h-[500px] bg-neutral-950/80">
              {/* Sidebar */}
              <div className="border-r border-white/5 p-4 hidden md:flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Platform</div>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-white bg-white/5 border border-white/5">
                    <span className="iconify text-gold-400" data-icon="lucide:layout-dashboard" data-width="18"></span>
                    Overview
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                    <span className="iconify" data-icon="lucide:wallet" data-width="18"></span>
                    Wallets
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                    <span className="iconify" data-icon="lucide:arrow-left-right" data-width="18"></span>
                    Exchange
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                    <span className="iconify" data-icon="lucide:landmark" data-width="18"></span>
                    Vaults
                  </button>
                </div>

                <div className="p-4 rounded border border-white/5 bg-gradient-to-br from-neutral-900 to-neutral-950">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="iconify text-green-500" data-icon="lucide:shield-check" data-width="16"></span>
                    <span className="text-xs font-medium text-white">Audit Verified</span>
                  </div>
                  <p className="text-xs text-neutral-500">Reserves verified by Deloitte. Last check: 2 hrs ago.</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-sm font-medium text-neutral-400 mb-1">Total Balance</h2>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl text-white font-medium tracking-tight">1,240.50 GGC</span>
                      <span className="text-sm text-green-500 font-medium">+2.4%</span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">≈ $2,904,630.75 USD</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">Deposit</button>
                    <button className="px-4 py-2 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 transition-colors">Send</button>
                  </div>
                </div>

                {/* Chart Area Mockup */}
                <div className="h-48 w-full rounded border border-white/5 bg-white/[0.02] mb-8 relative overflow-hidden">
                  <svg className="absolute bottom-0 left-0 w-full h-full text-gold-500/20" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 V 70 Q 20 50 40 75 T 80 40 T 100 20 V 100 Z" fill="currentColor"></path>
                    <path d="M0 70 Q 20 50 40 75 T 80 40 T 100 20" stroke="#f59e0b" strokeWidth="0.5" fill="none"></path>
                  </svg>
                  <div className="absolute top-4 left-4 flex gap-4 text-xs text-neutral-500">
                    <span className="text-white">1H</span>
                    <span>1D</span>
                    <span>1W</span>
                    <span>1M</span>
                    <span>1Y</span>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-white">Recent Transactions</h3>
                    <button className="text-xs text-neutral-500 hover:text-white">View All</button>
                  </div>
                  <div className="space-y-1">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between p-3 rounded hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-black transition-colors">
                          <span className="iconify" data-icon="lucide:arrow-down-left" data-width="14"></span>
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">Received Gold</div>
                          <div className="text-xs text-neutral-500">From 0x4a...9f2b</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-500 font-medium">+25.00 GGC</div>
                        <div className="text-xs text-neutral-500">2 mins ago</div>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center justify-between p-3 rounded hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                          <span className="iconify" data-icon="lucide:shopping-bag" data-width="14"></span>
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">Merchant Payment</div>
                          <div className="text-xs text-neutral-500">Starlink Internet</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-neutral-300 font-medium">-0.05 GGC</div>
                        <div className="text-xs text-neutral-500">5 hrs ago</div>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-center justify-between p-3 rounded hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                          <span className="iconify" data-icon="lucide:repeat" data-width="14"></span>
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">Swap USDC to GGC</div>
                          <div className="text-xs text-neutral-500">Uniswap V3</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-green-500 font-medium">+10.00 GGC</div>
                        <div className="text-xs text-neutral-500">1 day ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Backing */}
      <section className="border-y border-white/5 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-center text-xs text-neutral-500 mb-8 uppercase tracking-widest font-medium">Audited &amp; Backed By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-white rounded-sm"></div>
              <span className="text-lg font-bold text-white tracking-tighter">VENTURE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 border-2 border-white rounded-full"></div>
              <span className="text-lg font-bold text-white tracking-tighter">Circle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-white rotate-45"></div>
              <span className="text-lg font-bold text-white tracking-tighter">BLOCK</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-neutral-500 to-white"></div>
              <span className="text-lg font-bold text-white tracking-tighter">ORACLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Designed for the <br /><span className="text-neutral-500">future of finance.</span></h2>
            <p className="text-lg text-neutral-400 max-w-lg">Unlike ETF derivatives, GGC offers direct ownership of physical gold bars securely stored in Accra's sovereign vaults.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-xl border border-white/10 flex flex-col justify-between min-h-[300px] group transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="iconify text-gold-400" data-icon="lucide:scale" data-width="24"></span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">1:1 Physical Backing</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Every token represents 1 gram of 99.99% LBMA standard gold. Redeemable for physical bullion upon request.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-8 rounded-xl border border-white/10 flex flex-col justify-between min-h-[300px] group transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="iconify text-blue-400" data-icon="lucide:zap" data-width="24"></span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Instant Settlement</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Move millions in gold value globally in seconds, 24/7/365. No banking hours, no cross-border delays.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 rounded-xl border border-white/10 flex flex-col justify-between min-h-[300px] group transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="iconify text-green-400" data-icon="lucide:shield" data-width="24"></span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Institutional Security</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Audited by top-tier firms. Vaults insured by Lloyd's of London. Smart contracts verified by Certik.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-24 border-t border-white/5 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <div className="text-4xl font-medium text-white tracking-tight mb-2">$500M+</div>
            <div className="text-sm text-neutral-500 font-medium">Gold Reserves Tokenized</div>
          </div>
          <div>
            <div className="text-4xl font-medium text-white tracking-tight mb-2">0.1s</div>
            <div className="text-sm text-neutral-500 font-medium">Transaction Latency</div>
          </div>
          <div>
            <div className="text-4xl font-medium text-white tracking-tight mb-2">100%</div>
            <div className="text-sm text-neutral-500 font-medium">Backing Ratio</div>
          </div>
          <div>
            <div className="text-4xl font-medium text-white tracking-tight mb-2">24/7</div>
            <div className="text-sm text-neutral-500 font-medium">Audit Trail Access</div>
          </div>
        </div>
      </section>

      {/* Use Case / Developer Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-medium text-white tracking-tight mb-6">Built for Developers &amp;<br />Institutions.</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Integrate gold payments into your application with our robust API. GGC is an ERC-20 standard token, fully composable with the DeFi ecosystem.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="iconify text-gold-500 mt-1" data-icon="lucide:check-circle-2" data-width="18"></span>
                <div>
                  <h4 className="text-white text-sm font-medium">Programmable Money</h4>
                  <p className="text-neutral-500 text-xs mt-1">Automate payroll, hedging, and settlements in gold.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="iconify text-gold-500 mt-1" data-icon="lucide:check-circle-2" data-width="18"></span>
                <div>
                  <h4 className="text-white text-sm font-medium">Yield Generating</h4>
                  <p className="text-neutral-500 text-xs mt-1">Lend GGC on major protocols to earn interest on your gold.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="#" className="text-white border-b border-white pb-0.5 hover:text-gold-400 hover:border-gold-400 transition-colors inline-flex items-center gap-1 text-sm font-medium">
                View API Documentation
                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
              </a>
            </div>
          </div>

          {/* Code Snippet Visual */}
          <div className="rounded-xl bg-[#0d0d0d] border border-white/10 p-6 relative group">
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="font-mono text-xs leading-relaxed overflow-x-auto">
              <div className="text-neutral-500 mb-2">// Transfer Gold Programmatically</div>
              <div><span className="text-purple-400">const</span> <span className="text-blue-400">transferGold</span> <span className="text-white">=</span> <span className="text-purple-400">async</span> (<span className="text-orange-300">amount</span>, <span className="text-orange-300">recipient</span>) <span className="text-white">=&gt;</span> {"{"}
              </div>
              <div className="pl-4 text-neutral-400">try {"{"}
              </div>
              <div className="pl-8"><span className="text-purple-400">const</span> <span className="text-blue-400">tx</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-blue-400">ggcContract</span>.<span className="text-yellow-300">transfer</span>(</div>
              <div className="pl-12 text-orange-300">recipient,</div>
              <div className="pl-12 text-white">ethers.utils.<span className="text-yellow-300">parseUnits</span>(<span className="text-orange-300">amount</span>, <span className="text-green-400">18</span>)</div>
              <div className="pl-8 text-white">);</div>
              <div className="pl-8"><span className="text-purple-400">await</span> <span className="text-blue-400">tx</span>.<span className="text-yellow-300">wait</span>();</div>
              <div className="pl-8"><span className="text-blue-400">console</span>.<span className="text-yellow-300">log</span>(<span className="text-green-400">{`\`Successfully sent \${amount} GGC\``}</span>);</div>
              <div className="pl-4 text-neutral-400">{"}"} catch (error) {"{"}
              </div>
              <div className="pl-8"><span className="text-blue-400">console</span>.<span className="text-yellow-300">error</span>(<span className="text-green-400">"Transaction failed"</span>);</div>
              <div className="pl-4 text-neutral-400">{"}"}
              </div>
              <div className="text-white">{"}"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-medium text-white tracking-tight mb-8">Ready to secure your wealth?</h2>
          <p className="text-neutral-400 mb-10 max-w-xl mx-auto">Join thousands of investors using GGC to protect their portfolio against inflation and currency volatility.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-950 rounded font-medium hover:bg-neutral-200 transition-all">
              Create Free Account
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-neutral-900 border border-neutral-800 text-white rounded font-medium hover:bg-neutral-800 transition-all">
              Talk to Sales
            </button>
          </div>
          <p className="mt-6 text-xs text-neutral-600">No credit card required for account creation. KYC required for trading.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-gold-600 to-gold-300 flex items-center justify-center text-neutral-950 font-bold tracking-tighter text-[10px]">
                  GGC
                </div>
                <span className="text-white font-medium tracking-tight">Ghana Gold Token</span>
              </div>
              <p className="text-sm text-neutral-500 mb-6">The world's most trusted digital gold currency. Backed by sovereign reserves, secured by blockchain technology.</p>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
                <a href="#" className="text-neutral-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
                <a href="#" className="text-neutral-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
              </div>
            </div>

            <div>
              <h4 className="text-white text-sm font-medium mb-4">Platform</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Exchange</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Vault Map</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-medium mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-gold-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Reserves</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-medium mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Licenses</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-600">© 2024 Ghana Gold Company. All rights reserved.</p>
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
