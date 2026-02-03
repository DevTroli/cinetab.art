# CineTab

> Uma plataforma minimalista de discussão cinematográfica. Sem notas. Sem algoritmos. Apenas cinema e conversa.

## O que é?

CineTab é um fórum focado em **texto** para discutir filmes de forma honesta e democrática. Aqui, *Transformers* pode ser analisado com a mesma seriedade que *Cidadão Kane*.

**Problema que resolvemos:**  
Plataformas como Letterboxd e Twitter reduziram cinema a notas de 1-5 e hot takes rasas.

**Nossa solução:**  
- ❌ Sem sistema de notas/estrelas  
- ✍️ Posts em Markdown (texto > aesthetic)  
- 🪙 CineCoins (moeda comunitária não-comprável)  
- 🎭 Anti-elitismo: todas as opiniões têm espaço

## Stack

```
Frontend:  Next.js 13 + Tailwind CSS
Backend:   Node.js + PostgreSQL
Deploy:    Vercel + Railway (custo zero inicial)
```

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/DevTroli/cinetab.art
cd cinetab.art

# Instale as dependências
npm install

# Suba o banco de dados + servidor
npm run dev
```

Acesse: `http://localhost:3000`

## Status do projeto

```
[█▓░░░░] 16% — Fase de Arquitetura
```

**Concluído:**  
✓ Conceituação e manifesto  
✓ Definição da stack técnica

**Em andamento:**  
→ Estrutura básica do backend  
→ Sistema de posts em Markdown

**Próximos passos:**  
○ Sistema de tags (#Crítica, #Debate, #Confissão)  
○ Economia de CineCoins  
○ Moderação comunitária

## Filosofia

*"Nenhum filme é sagrado. Nenhum espectador é profano."*

- **Sem métricas vazias:** Proibido posts tipo "dê uma nota de 0 a 10"
- **Respeito ≠ Concordância:** Critique a obra, não o usuário
- **Sem gatekeeping:** Não precisa ter visto 500 filmes do Tarkovsky pra opinar

## Contribuindo

Veja a [issue de Inception](https://github.com/DevTroli/cinetab.art/issues/7) para entender a visão completa do projeto.

```bash
# Fork → Clone → Branch → Code → PR
git checkout -b feature/sua-contribuicao
```

## Contato

Criado por [@DevTroli](https://github.com/DevTroli)  
Domínio futuro: `cinetab.art`

---

**Licença:** MIT  
**Status:** 🚧 Work in Progress — Fase de Arquitetura
