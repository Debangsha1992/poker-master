<template>
<div class="bg-elements">
    <div class="orb orb-teal"></div>
    <div class="orb orb-magenta"></div>
    <div class="grid-overlay"></div>
  </div>

  <div class="page-shell">
    <header class="top-bar glass">
      <div class="logo-mark">PM</div>
      <nav class="nav">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#play">Play</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="chip-counter glass">Beta · Live coach</div>
    </header>

    <main>
      <section class="hero" id="about">
        <div class="hero-grid">
          <div class="hero-copy glass">
            <p class="eyebrow">Premium poker coach</p>
            <h1>Modern Poker Mentor</h1>
            <p class="lede">Glass-smooth UI, guided hands that glow. Learn faster with motion, clarity, and a calm coach voice.</p>
            <div class="cta-row">
              <button class="cta primary" id="start-guided">Start coaching</button>
              <button class="cta ghost">Watch demo</button>
            </div>
            <div class="mode-tabs">
              <button class="mode-btn active" data-mode="guided">Guided Play</button>
              <button class="mode-btn" data-mode="practice">Practice</button>
              <button class="mode-btn" data-mode="scenario">Scenario Lab</button>
              <button class="mode-btn" data-mode="library">Concept Library</button>
            </div>
            <div class="micro-metrics">
              <div class="metric">
                <span class="dot"></span>
                Real-time ranges
              </div>
              <div class="metric">
                <span class="dot"></span>
                Micro-animations on every street
              </div>
              <div class="metric">
                <span class="dot"></span>
                Adaptive hint intensity
              </div>
            </div>
            <div class="ticker glass">
              <div class="ticker-track">
                <span>Daily Quest: Win 3 pots with float bets •</span>
                <span>New Deck: Neon Drift Pack •</span>
                <span>Coach Tip: Bet smaller on paired boards •</span>
                <span>Unlock: Blind Shield drills •</span>
              </div>
            </div>
          </div>

          <div class="hero-visual glass parallax">
            <div class="floating-tag glass">Featured hands carousel</div>
            <div class="carousel-window">
              <div class="carousel-track">
                <article class="poke-card active">
                  <div class="card-header">
                    <span class="card-rank">A♠</span>
                    <span class="card-tag">Legendary</span>
                  </div>
                  <div class="card-hero">
                    <div class="card-glow"></div>
                    <div class="card-art">Button Blitz</div>
                  </div>
                  <div class="card-body">
                    <p class="card-title">Button Blitz</p>
                    <p class="card-copy">Open wide on the button, pressure blinds with 2.2x raises, and c-bet high boards.</p>
                  </div>
                </article>
                <article class="poke-card">
                  <div class="card-header">
                    <span class="card-rank">K♥</span>
                    <span class="card-tag">Epic</span>
                  </div>
                  <div class="card-hero">
                    <div class="card-glow"></div>
                    <div class="card-art">Cutoff Control</div>
                  </div>
                  <div class="card-body">
                    <p class="card-title">Cutoff Control</p>
                    <p class="card-copy">Steal when folded to you, mix 3-bets vs late opens, and float vs small c-bets.</p>
                  </div>
                </article>
                <article class="poke-card">
                  <div class="card-header">
                    <span class="card-rank">Q♦</span>
                    <span class="card-tag">Rare</span>
                  </div>
                  <div class="card-hero">
                    <div class="card-glow"></div>
                    <div class="card-art">Blind Shield</div>
                  </div>
                  <div class="card-body">
                    <p class="card-title">Blind Shield</p>
                    <p class="card-copy">Defend with suited connectors and pairs; 3-bet hands that hate multiway pots.</p>
                  </div>
                </article>
                <article class="poke-card">
                  <div class="card-header">
                    <span class="card-rank">J♣</span>
                    <span class="card-tag">Hero</span>
                  </div>
                  <div class="card-hero">
                    <div class="card-glow"></div>
                    <div class="card-art">Stack Ninja</div>
                  </div>
                  <div class="card-body">
                    <p class="card-title">Stack Ninja</p>
                    <p class="card-copy">Adjust to SPR: small pots with one-pair hands, big pots with nutted combos.</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="carousel-dots">
              <button class="dot-btn active" aria-label="Slide 1"></button>
              <button class="dot-btn" aria-label="Slide 2"></button>
              <button class="dot-btn" aria-label="Slide 3"></button>
              <button class="dot-btn" aria-label="Slide 4"></button>
            </div>
            <div class="stat-bubble glass">
              <p class="label">Coach callout</p>
              <p class="value">Card names are your cues. Swipe the carousel to see how each spot plays.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="sim glass" id="sim">
        <div class="section-head">
          <div>
            <p class="eyebrow">Simulated Table</p>
            <h2>Play cash or tournament hands vs AI crews.</h2>
          </div>
          <div class="wallet glass">
            <span>Bankroll</span>
            <strong id="sim-wallet">500</strong>
            <button class="cta ghost small" id="sim-bankroll-boost">Daily boost</button>
          </div>
        </div>
        <div class="sim-controls">
          <label>Mode
            <select id="sim-mode">
              <option value="cash">Cash</option>
              <option value="tournament">Tournament</option>
            </select>
          </label>
          <label>Seats
            <select id="sim-seat-count">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4" selected>4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
          <label>Difficulty
            <select id="sim-ai-mix">
              <option value="balanced">Balanced</option>
              <option value="aggressive">Aggressive</option>
              <option value="chill">Relaxed</option>
              <option value="exploit">Exploitative</option>
            </select>
          </label>
          <label>Blinds
            <input type="number" id="sim-blinds" value="1" min="0.5" step="0.5">
          </label>
          <label>Starting stack
            <input type="number" id="sim-stack" value="120" min="40" step="10">
          </label>
          <button class="cta ghost" id="sim-start">Start table</button>
          <button class="cta ghost" id="sim-deal" disabled>Deal hand</button>
        </div>
        <div class="sim-missions">
          <article class="mission glass">
            <p class="label">Mission</p>
            <h4 id="sim-mission-title">Win 30 chips defending blinds</h4>
            <p id="sim-mission-progress">Progress: 0 / 30</p>
          </article>
          <article class="mission glass">
            <p class="label">XP</p>
            <h4 id="sim-xp">0 XP</h4>
            <p id="sim-xp-note">Earn XP for solid decisions.</p>
          </article>
        </div>
        <div class="sim-table">
          <div class="sim-info glass">
            <p id="sim-status">Table idle. Configure and start.</p>
            <p id="sim-pot">Pot: 0</p>
            <p id="sim-dealer">Dealer: --</p>
          </div>
          <div class="sim-main">
            <div class="sim-board glass">
              <div class="board-block">
                <p class="label">Board</p>
                <div class="cards-row" id="sim-board"></div>
              </div>
              <div class="board-block">
                <p class="label">Hero hand</p>
                <div class="cards-row" id="sim-hero-cards"></div>
              </div>
              <div class="hint-toggle">
                <label>
                  <input type="checkbox" id="sim-hint-toggle" checked>
                  Show hints
                </label>
              </div>
            </div>
            <div class="sim-history glass">
              <p class="label">Hand history</p>
              <div class="history-feed" id="sim-history"></div>
            </div>
          </div>
          <div class="sim-seats" id="sim-seats"></div>
          <div class="sim-actions" id="sim-actions"></div>
          <div class="sim-log glass" id="sim-log"></div>
          <div class="chip-layer" id="chip-layer"></div>
        </div>
      </section>

      <section class="gamified glass" id="play">
        <div class="section-head">
          <div>
            <p class="eyebrow">Gamified coaching</p>
            <h2>Every decision animated, explained, rewarded.</h2>
          </div>
          <button class="cta ghost" id="launch-table">Launch table</button>
        </div>

        <div class="gamified-grid">
          <article class="panel glass session">
            <div class="panel-top">
              <span class="pill live" id="mode-label">Live hand</span>
              <span class="pill hint" id="hint-label">Hints on</span>
            </div>
            <div class="table-visual">
              <div class="hole">
                <div>
                  <p class="label">Hero cards</p>
                  <div class="cards-row" id="hero-cards"></div>
                </div>
                <div>
                  <p class="label">Villain type</p>
                  <p class="value" id="villain-type">TAG — tight aggressive</p>
                </div>
              </div>
              <div class="players">
                <div>
                  <p class="label">You</p>
                  <p class="value" id="hero-spot">Button · 42 BB</p>
                </div>
                <div class="glow-chip">●</div>
                <div>
                  <p class="label">Villain</p>
                  <p class="value" id="villain-spot">LAG · 38 BB</p>
                </div>
              </div>
              <div class="board">
                <span class="label" id="street-label">Flop</span>
                <div class="board-wrap">
                  <div class="cards-row" id="board-cards">
                    <div class="poker-card glass tile"><span class="rank">J</span><span class="suit">♠</span></div>
                    <div class="poker-card glass tile"><span class="rank">7</span><span class="suit">♦</span></div>
                    <div class="poker-card glass tile"><span class="rank">3</span><span class="suit">♣</span></div>
                  </div>
                  <div class="range-overlay">
                    <p class="label">Range heat</p>
                    <div class="range-bars">
                      <span class="bar high"></span>
                      <span class="bar mid"></span>
                      <span class="bar low"></span>
                    </div>
                  </div>
                  <div class="pot-bubble glass">
                    <p class="label">Pot odds</p>
                    <p class="value" id="pot-odds">You invest 1.2 to win 4.1 (29% needed)</p>
                  </div>
                </div>
              </div>
              <div class="advice glass">
                <p class="label">Coach says</p>
                <p class="value" id="advice-text">Bet 35%. You have range advantage; fold equity rises against this player type.</p>
              </div>
              <div class="actions" id="actions"></div>
              <div class="hint-panel glass">
                <p class="label">Hint panel</p>
                <ul id="hint-list"></ul>
              </div>
            </div>
            <div class="recap glass">
              <p class="label">Post-hand recap</p>
              <ul id="recap-list"></ul>
            </div>
          </article>

          <article class="panel glass ladder">
            <p class="eyebrow">Progress track</p>
            <h3 id="level-title">Level 4 · Positional Aggression</h3>
            <ul class="progress-list" id="progress-list">
              <li><span>Pot odds</span><span>80%</span></li>
              <li><span>Opening ranges</span><span>68%</span></li>
              <li><span>Blind defense</span><span>52%</span></li>
            </ul>
            <div class="progress-bar">
              <span id="progress-bar" style="width: 68%"></span>
            </div>
            <div class="quests" id="quests">
              <div class="quest glass">
                <p class="label">Quest</p>
                <p class="value">Win 3 pots with float bets.</p>
              </div>
              <div class="quest glass">
                <p class="label">Quest</p>
                <p class="value">Identify 2 bluff-catch spots.</p>
              </div>
            </div>
            <div class="badge-row">
              <div class="streak-card glass">
                <p class="eyebrow">Daily streak</p>
                <h4 id="streak-value">5-day</h4>
                <p class="value" id="streak-note">Consistent reps unlocked boosts.</p>
              </div>
              <div class="badge-grid" id="badge-grid">
                <span class="badge-tag earned">Correct fold</span>
                <span class="badge-tag">Calculated pot odds</span>
              </div>
            </div>
            <div class="metrics glass">
              <div class="metric-block">
                <p class="label">Decision accuracy</p>
                <h4 id="metric-accuracy">0%</h4>
              </div>
              <div class="metric-block">
                <p class="label">Aggression freq</p>
                <h4 id="metric-aggression">0%</h4>
              </div>
              <div class="metric-block">
                <p class="label">Fold vs 3-bet</p>
                <h4 id="metric-fold">0%</h4>
              </div>
            </div>
            <div class="weekly-grid" id="weekly-grid">
              <article class="weekly-card glass">
                <p class="label">Weekly summary</p>
                <p class="value small">Complete a hand to see highlights.</p>
              </article>
            </div>
            <button class="cta primary full" id="resume-drills">Resume drills</button>
          </article>
        </div>
      </section>

      <section class="lab glass" id="lab">
        <div class="section-head">
          <div>
            <p class="eyebrow">Scenario Lab</p>
            <h2>Input a spot. Get the line.</h2>
          </div>
          <button class="cta ghost" id="run-scenario">Analyze</button>
        </div>
        <div class="lab-grid">
          <form class="lab-form" id="lab-form">
            <label>Position
              <select name="position">
                <option>Button</option>
                <option>Cutoff</option>
                <option>Hijack</option>
                <option>Small Blind</option>
                <option>Big Blind</option>
              </select>
            </label>
            <label>Stack (BB)
              <input type="number" name="stack" value="40" min="5" max="250" />
            </label>
            <label>Villain type
              <select name="villain">
                <option>TAG</option>
                <option>LAG</option>
                <option>Loose-passive</option>
                <option>Tight-passive</option>
              </select>
            </label>
            <label>Street
              <select name="street">
                <option>Preflop</option>
                <option>Flop</option>
                <option>Turn</option>
                <option>River</option>
              </select>
            </label>
            <label>Board (e.g., AsJh4c)
              <input type="text" name="board" placeholder="AsJh4c" />
            </label>
            <label>Hole cards (e.g., KcQs)
              <input type="text" name="hand" placeholder="KcQs" />
            </label>
          </form>
          <div class="lab-output glass" id="lab-output">
            <p class="label">Recommended line</p>
            <p class="value" id="lab-line">Pick a spot and hit analyze.</p>
            <div class="lab-alt" id="lab-alt"></div>
          </div>
        </div>
      </section>

      <section class="library glass" id="library">
        <div class="section-head">
          <div>
            <p class="eyebrow">Concept Library</p>
            <h2>Progressive learning path</h2>
          </div>
        </div>
        <div class="concept-grid" id="concept-grid"></div>
      </section>

      <section class="lessons glass" id="lessons">
        <div class="section-head">
          <div>
            <p class="eyebrow">Stage lessons</p>
            <h2>Stage 1–3 with examples</h2>
          </div>
        </div>
        <div class="lesson-grid">
          <article class="lesson glass">
            <div class="lesson-head">
              <span class="pill live">Stage 1</span>
              <p class="eyebrow">Foundations</p>
            </div>
            <h3>Rules, hand ranks, betting rounds</h3>
            <p class="value">Quickly spot the strongest hand and what actions are allowed each street.</p>
            <ul class="bullet">
              <li>Hand ladder: Royal > Straight Flush > Four of a Kind > Full House > Flush > Straight > Trips > Two Pair > One Pair > High Card.</li>
              <li>Action order: Preflop blinds post first; action clockwise. Flop/Turn/River each has bet/check/raise/fold.</li>
              <li>Example: You hold A♠ K♠ on J♠ 8♠ 2♦ — strong flush draw; plan to continue vs bets.</li>
            </ul>
          </article>
          <article class="lesson glass">
            <div class="lesson-head">
              <span class="pill live">Stage 2</span>
              <p class="eyebrow">Core math</p>
            </div>
            <h3>Pot odds, outs, EV as price vs. value</h3>
            <p class="value">Decide fast: compare your price to your chance to win.</p>
            <ul class="bullet">
              <li>Outs: Flush draw = 9 outs; open-ender = 8 outs; two overcards ≈ 6 outs.</li>
              <li>Pot odds bubble: Call ÷ (Pot + Call). If 1.2 to win 4.1 → ~29% needed. Flush draw on flop ≈ 35% → call is good.</li>
              <li>Example: Pot 3 BB, villain bets 1 BB. Need 1 / (3+1+1) = 20%. Any 8-out straight draw ≈ 31% → call.</li>
            </ul>
          </article>
          <article class="lesson glass">
            <div class="lesson-head">
              <span class="pill live">Stage 3</span>
              <p class="eyebrow">Position & ranges</p>
            </div>
            <h3>Info advantage and colored ranges</h3>
            <p class="value">Acting last lets you widen opens and apply pressure.</p>
            <ul class="bullet">
              <li>Late position (Button/CO): open wider; add suited connectors and suited aces.</li>
              <li>Early position: play tight—pairs, big aces, strong broadways.</li>
              <li>Example range overlay: BTN opens (green) all pairs, all suited aces, K9s+, Q9s+, J9s+, T8s+, 98s-54s, ATo+, KJo+.</li>
              <li>Blind defense: call suited connectors/pairs vs small opens; 3-bet offsuit broadways vs frequent stealers.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initPokerClient } from '~/utils/pokerClient'

useHead({ title: 'Poker Mentor | Modern Gamified Coaching' });

onMounted(() => {
  initPokerClient();
});
</script>
