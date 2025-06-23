import React from 'react';

function CineTabWIP() {
  const projectInfo = {
    name: 'cinetab.art',
    branch: 'main',
    commits: 23,
  };

  // Progresso do projeto baseado nas fases reais definidas nos documentos
  const progressPhases = [
    { name: 'Conceituação', status: 'complete', char: '█' },
    { name: 'Arquitetura', status: 'current', char: '█' },
    { name: 'Prototipagem', status: 'pending', char: '▓' },
    { name: 'MVP Core', status: 'pending', char: '░' },
    { name: 'Testes Beta', status: 'pending', char: '░' },
    { name: 'Lançamento', status: 'pending', char: '░' },
  ];

  const progressPercentage = Math.round(
    (progressPhases.filter(p => p.status === 'complete').length / progressPhases.length) * 100
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header responsivo */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-xs sm:text-sm text-zinc-400 truncate">
                ~/{projectInfo.name}
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono">
              <span className="text-green-600">branch:{projectInfo.branch}</span>
              <span className="text-blue-800">commits:{projectInfo.commits}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* ASCII Logo + Título */}
        <div className="text-center mb-16">
          <pre className="text-amber-400 text-sm font-mono mb-6 overflow-x-auto">
            {`
 ██████╗██╗███╗   ██╗███████╗████████╗ █████╗ ██████╗ 
██╔════╝██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
██║     ██║██╔██╗ ██║█████╗     ██║   ███████║██████╔╝
██║     ██║██║╚██╗██║██╔══╝     ██║   ██╔══██║██╔══██╗
╚██████╗██║██║ ╚████║███████╗   ██║   ██║  ██║██████╔╝
 ╚═════╝╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═════╝
`}
          </pre>
          <p className="text-zinc-400 font-mono text-sm mb-2">// Movimento Anti-Métrica</p>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Uma plataforma <strong>minimalista</strong> de discussão cinematográfica focada em
            texto, comunidade e simplicidade radical. Aqui, filmes são <em>arte</em>, não produtos
            com notas.
          </p>
        </div>

        {/* Manifesto Principal */}
        <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-red-400 text-xl">🎭</span>
            <h2 className="text-lg font-semibold">Manifesto: Por uma Cinefilia Autêntica</h2>
          </div>
          <div className="font-mono text-sm space-y-3 text-zinc-300">
            <div className="text-zinc-500">// O problema que atacamos:</div>
            <div className="ml-4 space-y-2">
              <div className="text-red-400">PROBLEMA_ATUAL:</div>
              <div className="ml-4 text-zinc-300">
                → Críticas reduzidas a estrelas (★★★☆☆)
                <br />
                → Discussões viraram performance social
                <br />
                → Algoritmos priorizando engajamento &gt; curadoria de qualidade
                <br />→ Elitismo disfarçado de intelectualidade ou expertise
              </div>
            </div>

            <div className="ml-4 mt-6 space-y-2">
              <div className="text-green-400">NOSSA_SOLUÇÃO:</div>
              <div className="ml-4 text-zinc-300">
                → <strong>Abaixo as Estrelas!</strong> Sem notas, sem rankings
                <br />→ <strong>Texto &gt; Aesthetic</strong> Conversas profundas, não hot takes
                <br />→ <strong>Anti-Elitismo Radical</strong> Analisar Transformers = analisar 2001
                <br />→ <strong>Moderação Orgânica</strong> Comunidade decide via consenso geral &
                CineCoins
              </div>
            </div>

            <div className="text-zinc-500 mt-6">
              // "Nenhum filme é sagrado. Nenhum espectador é profano."
            </div>
          </div>
        </div>

        {/* Progresso com ASCII Art */}
        <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-cyan-400 text-xl">⚡</span>
            <h2 className="text-lg font-semibold">Progresso do Desenvolvimento</h2>
          </div>

          {/* Barra de progresso ASCII */}
          <div className="font-mono text-sm mb-6">
            <div className="text-zinc-400 mb-2">Build Progress: {progressPercentage}%</div>
            <div className="text-green-400 text-lg">
              [{progressPhases.map(phase => phase.char).join('')}] {progressPercentage}%
            </div>
          </div>

          {/* Fases detalhadas */}
          <div className="space-y-3 font-mono text-sm">
            {progressPhases.map((phase, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-zinc-400">
                  {index + 1}. {phase.name}
                </span>
                <span
                  className={`
                  ${phase.status === 'complete'
                      ? 'text-green-400'
                      : phase.status === 'current'
                        ? 'text-yellow-400'
                        : 'text-zinc-600'
                    }
                `}
                >
                  {phase.status === 'complete'
                    ? '✓ Completo'
                    : phase.status === 'current'
                      ? '→ Em Andamento'
                      : '○ Planejado'}
                </span>
              </div>
            ))}
          </div>

          {/* Próximas tarefas */}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <div className="text-zinc-400 text-sm mb-2">Próximas Tarefas:</div>
            <div className="text-zinc-300 text-sm space-y-1">
              <div>• Implementar sistema de posts em Markdown</div>
              <div>• Criar sistema de tags fixas (#Crítica, #Debate, #Confissão)</div>
              <div>• Desenvolver economia de CineCoins</div>
            </div>
          </div>
        </div>

        {/* Funcionalidades Definidas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-purple-400 text-lg">🎯</span>
              <h3 className="font-semibold">MVP Essencial</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <div className="text-zinc-200 font-medium">Posts em Markdown</div>
                  <div className="text-zinc-400 text-xs">Texto puro, sem aesthetic</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <div className="text-zinc-200 font-medium">Tags Fixas</div>
                  <div className="text-zinc-400 text-xs">
                    #AnaliseProfunda, #ReviewPocket, #ConfissãoCinefila
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <div className="text-zinc-200 font-medium">CineCoins</div>
                  <div className="text-zinc-400 text-xs">
                    Moeda não-comprável para manter a qualidade
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <div>
                  <div className="text-zinc-200 font-medium">Moderação Orgânica</div>
                  <div className="text-zinc-400 text-xs">
                    Comunidade decide via votação nos posts
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-orange-400 text-lg">🛠</span>
              <h3 className="font-semibold">Stack Técnica</h3>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div>
                <div className="text-blue-400 mb-1">Frontend:</div>
                <div className="text-zinc-400 ml-2">Next.js 13 + Tailwind CSS</div>
              </div>
              <div>
                <div className="text-green-400 mb-1">Backend:</div>
                <div className="text-zinc-400 ml-2">Node.js + PostgreSQL</div>
              </div>
              <div>
                <div className="text-amber-400 mb-1">Deploy:</div>
                <div className="text-zinc-400 ml-2">Vercel + Railway (custo zero inicial)</div>
              </div>
              <div>
                <div className="text-purple-400 mb-1">Filosofia:</div>
                <div className="text-zinc-400 ml-2">Performance + Baixo Custo + Simplicidade</div>
              </div>
            </div>
          </div>
        </div>

        {/* Economia Ética */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-yellow-400 text-lg">💰</span>
            <h3 className="font-semibold">Economia Ética & Anti-Commoditização</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-yellow-400 mb-2 font-medium">CineCoins System:</div>
              <div className="text-zinc-300 space-y-1">
                <div>→ Ganhos por qualidade, não quantidade</div>
                <div>→ Não compráveis com dinheiro real</div>
                <div>→ Base para economia comunitária</div>
                <div>→ Posts #AnáliseProfunda valem 2x mais</div>
              </div>
            </div>
            <div>
              <div className="text-green-400 mb-2 font-medium">Receita Sustentável:</div>
              <div className="text-zinc-300 space-y-1">
                <div>→ Ethical Ads que sigam nossa cultura e valores</div>
                <div>→ Licenciamento de dados e pesquisas agregados</div>
                <div>→ Patrocínios culturais transparentes</div>
                <div>→ Revenue share com comunidade</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-lg p-8 border border-zinc-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-red-400 text-xl">🚀</span>
            <h3 className="text-lg font-semibold">Junte-se ao Movimento</h3>
          </div>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Cansado de performar conhecimento por likes? Farto de reduzir filmes a estrelas?
            <strong> Desligue o algoritmo. Acenda o debate.</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="https://github.com/DevTroli/cinetab.art"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
            >
              <span className="text-sm">⚡</span>
              Contribuir no GitHub
            </a>
            <a
              href="https://github.com/DevTroli/cinetab.art/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded transition-colors"
            >
              <span className="text-sm">📖</span>
              Ler Manifesto Completo
            </a>
            <a
              href="https://github.com/DevTroli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded transition-colors"
            >
              <span className="text-sm">☕</span>
              Contato
            </a>
          </div>
        </div>

        {/* Footer com citação */}
        <footer className="mt-12 pt-6 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm font-mono mb-2">
            // Desenvolvido com 💛 pela arte e resistência aos algoritmos
          </p>
          <blockquote className="text-zinc-400 text-sm italic max-w-2xl mx-auto">
            "O CineTab não é perfeito, mas é honesto. Aqui, cinema volta a ser sobre pessoas, não
            números. Aqui sua análise de Debi & Lóide terá o mesmo valor que um ensaio sobre Cidadão
            Kane"
          </blockquote>
          <p className="text-amber-400 text-xs mt-3 font-mono">→ Assista, reflita, dialogue 🎭</p>
        </footer>
      </main>
    </div>
  );
}

export default CineTabWIP;
