import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Brain, Trophy, RotateCcw, ArrowRight, Zap, Target, Check, RefreshCw } from 'lucide-react';

export default function BrainArena({ onOpenTrialModal }) {
  const [activeTab, setActiveTab] = useState('pattern'); // 'pattern' | 'chess' | 'reflex'
  
  // Game 1: Pattern Memory State
  const [patternSequence, setPatternSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [isShowingPattern, setIsShowingPattern] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [patternLevel, setPatternLevel] = useState(1);
  const [patternScore, setPatternScore] = useState(0);
  const [patternStatus, setPatternStatus] = useState('idle'); // 'idle' | 'showing' | 'user' | 'success' | 'fail'

  // Game 2: Chess Knight Puzzle State
  const [chessQuestion, setChessQuestion] = useState(0);
  const [chessScore, setChessScore] = useState(0);
  const [chessSolved, setChessSolved] = useState(null); // true | false | null

  // Game 3: Reflex Tap State
  const [reflexState, setReflexState] = useState('idle'); // 'idle' | 'waiting' | 'ready' | 'clicked'
  const [reflexTarget, setReflexTarget] = useState(null); // 'LEFT' | 'RIGHT'
  const [reflexStartTime, setReflexStartTime] = useState(0);
  const [reflexTime, setReflexTime] = useState(null);

  // Trigger confetti on overall victory
  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log(e);
    }
  };

  // --- GAME 1 LOGIC (Pattern Memory) ---
  const nodes = [
    { id: 0, label: 'Spark Orange', color: 'bg-spark-500', glow: 'shadow-spark-500/60 shadow-lg' },
    { id: 1, label: 'Electric Cyan', color: 'bg-cyan-500', glow: 'shadow-cyan-500/60 shadow-lg' },
    { id: 2, label: 'Neon Emerald', color: 'bg-emerald-500', glow: 'shadow-emerald-500/60 shadow-lg' },
    { id: 3, label: 'Cosmic Violet', color: 'bg-purple-500', glow: 'shadow-purple-500/60 shadow-lg' },
  ];

  const startPatternGame = () => {
    setUserSequence([]);
    setPatternScore(0);
    setPatternLevel(1);
    generateNextStep(3);
  };

  const generateNextStep = (length) => {
    setPatternStatus('showing');
    const newSeq = [];
    for (let i = 0; i < length; i++) {
      newSeq.push(Math.floor(Math.random() * 4));
    }
    setPatternSequence(newSeq);
    playSequence(newSeq);
  };

  const playSequence = async (seq) => {
    setIsShowingPattern(true);
    for (let i = 0; i < seq.length; i++) {
      await new Promise(r => setTimeout(r, 450));
      setActiveNode(seq[i]);
      await new Promise(r => setTimeout(r, 500));
      setActiveNode(null);
    }
    setIsShowingPattern(false);
    setPatternStatus('user');
  };

  const handleNodeClick = (nodeId) => {
    if (isShowingPattern || patternStatus !== 'user') return;
    
    const newUserSeq = [...userSequence, nodeId];
    setUserSequence(newUserSeq);
    
    // Check if correct so far
    const currentIndex = newUserSeq.length - 1;
    if (newUserSeq[currentIndex] !== patternSequence[currentIndex]) {
      setPatternStatus('fail');
      return;
    }

    // If completed full sequence
    if (newUserSeq.length === patternSequence.length) {
      setPatternStatus('success');
      setPatternScore(patternScore + 100);
      fireConfetti();
      setTimeout(() => {
        setUserSequence([]);
        generateNextStep(patternSequence.length + 1);
      }, 1200);
    }
  };

  // --- GAME 2 LOGIC (Chess Tactics) ---
  const chessPuzzles = [
    {
      question: "White Knight at d4. Which move creates a Royal Fork on King (e6) & Queen (b5)?",
      options: ["Nc6 (Square c6)", "Ne6 (Square e6)", "Nf5 (Square f5)", "Nb3 (Square b3)"],
      correct: 0,
      explanation: "From c6, the Knight attacks e7, e6 King, and b5 Queen simultaneously!"
    },
    {
      question: "In Speedcubing, what is the fastest step in CFOP after completing the Cross?",
      options: ["F2L (First 2 Layers Pairs)", "OLL (Orient Last Layer)", "PLL (Permute Last Layer)", "Center Rotation"],
      correct: 0,
      explanation: "F2L pairs corners and edges together, solving 2 layers simultaneously!"
    },
    {
      question: "In 3-ball juggling, what is the essential rhythm pattern?",
      options: ["Infinity Cascade (Arc crossing center)", "Shower Circle only", "Vertical 2-hand drops", "Circular spin"],
      correct: 0,
      explanation: "The Cascade forms a horizontal figure-8 infinity arc crossing the body midline!"
    }
  ];

  const handleChessAnswer = (optionIdx) => {
    if (optionIdx === chessPuzzles[chessQuestion].correct) {
      setChessSolved(true);
      setChessScore(chessScore + 100);
      fireConfetti();
    } else {
      setChessSolved(false);
    }
  };

  const nextChessQuestion = () => {
    setChessSolved(null);
    setChessQuestion((prev) => (prev + 1) % chessPuzzles.length);
  };

  // --- GAME 3 LOGIC (Bilateral Reflex) ---
  const startReflexTest = () => {
    setReflexState('waiting');
    setReflexTime(null);
    const delay = 1000 + Math.random() * 2000;
    setTimeout(() => {
      const target = Math.random() > 0.5 ? 'LEFT' : 'RIGHT';
      setReflexTarget(target);
      setReflexStartTime(Date.now());
      setReflexState('ready');
    }, delay);
  };

  const handleReflexTap = (side) => {
    if (reflexState !== 'ready') return;
    if (side === reflexTarget) {
      const elapsed = Date.now() - reflexStartTime;
      setReflexTime(elapsed);
      setReflexState('clicked');
      fireConfetti();
    }
  };

  return (
    <section id="brain-arena" className="py-24 relative bg-[#060913] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-spark-500/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spark-500/10 border border-spark-500/30 text-spark-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Cognitive Arena</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Test Your Child's <span className="bg-gradient-to-r from-spark-400 to-amber-400 bg-clip-text text-transparent">Cognitive Spark</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Try these fun interactive micro-drills right in your browser! Test working memory, strategic decision speed, and brain-body reaction.
          </p>
        </div>

        {/* Game Mode Selector */}
        <div className="flex justify-center mb-8">
          <div className="p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 flex gap-2 shadow-xl">
            <button
              onClick={() => setActiveTab('pattern')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'pattern'
                  ? 'bg-spark-500 text-white shadow-lg shadow-spark-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>🧠</span>
              <span>Pattern Memory Flash</span>
            </button>

            <button
              onClick={() => setActiveTab('chess')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'chess'
                  ? 'bg-spark-500 text-white shadow-lg shadow-spark-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>♟️</span>
              <span>Tactical Decision</span>
            </button>

            <button
              onClick={() => setActiveTab('reflex')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'reflex'
                  ? 'bg-spark-500 text-white shadow-lg shadow-spark-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>⚡</span>
              <span>Bilateral Reflex</span>
            </button>
          </div>
        </div>

        {/* Game Canvas Container */}
        <div className="max-w-2xl mx-auto bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl min-h-[440px] flex flex-col justify-between">
          
          {/* TAB 1: PATTERN MEMORY */}
          {activeTab === 'pattern' && (
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400">
                  Target: Memorize & Repeat the Sequence
                </span>
                <span className="text-xs font-bold text-spark-400 bg-spark-500/10 px-3 py-1 rounded-full border border-spark-500/20">
                  Score: {patternScore} pts
                </span>
              </div>

              {patternStatus === 'idle' ? (
                <div className="py-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-spark-500/20 border border-spark-500/40 flex items-center justify-center mx-auto text-2xl">
                    🧠
                  </div>
                  <h3 className="text-xl font-bold text-white">Neural Sequence Memory</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Watch the nodes glow in sequence, then click them back in the exact order. Tests visual chunking and working memory capacity!
                  </p>
                  <button
                    onClick={startPatternGame}
                    className="px-8 py-3 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-spark-500/30 hover:scale-105 transition-all"
                  >
                    Start Game 🚀
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-xs font-semibold text-slate-300">
                    {patternStatus === 'showing' && '👀 Watch the sequence closely...'}
                    {patternStatus === 'user' && `👉 Your Turn! Click (${userSequence.length}/${patternSequence.length})`}
                    {patternStatus === 'success' && '🎉 Brilliant Memory! Next Level Loading...'}
                    {patternStatus === 'fail' && '💥 Almost! Try again to strengthen recall.'}
                  </div>

                  {/* 4 Glowing Nodes Grid */}
                  <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    {nodes.map((node) => {
                      const isGlow = activeNode === node.id;
                      return (
                        <button
                          key={node.id}
                          onClick={() => handleNodeClick(node.id)}
                          disabled={isShowingPattern}
                          className={`h-24 sm:h-28 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${node.color} ${
                            isGlow ? 'scale-105 brightness-125 ring-4 ring-white shadow-2xl' : 'opacity-70 hover:opacity-100'
                          }`}
                        >
                          <span className="text-xs font-extrabold text-white uppercase drop-shadow-md">
                            {node.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {patternStatus === 'fail' && (
                    <button
                      onClick={startPatternGame}
                      className="inline-flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retry Game</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TACTICAL CHESS DECISION */}
          {activeTab === 'chess' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400">
                  Tactics Challenge {chessQuestion + 1} of {chessPuzzles.length}
                </span>
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Score: {chessScore} pts
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {chessPuzzles[chessQuestion].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {chessPuzzles[chessQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleChessAnswer(idx)}
                      disabled={chessSolved !== null}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-semibold text-left transition-all ${
                        chessSolved === null
                          ? 'bg-slate-950/70 border-slate-800 hover:border-spark-500 hover:bg-slate-850 text-slate-200'
                          : idx === chessPuzzles[chessQuestion].correct
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                          : 'bg-slate-950/40 border-slate-900 text-slate-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {chessSolved !== null && (
                  <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                    chessSolved ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-red-500/10 border-red-500/30 text-red-300'
                  }`}>
                    <div className="font-bold mb-1">
                      {chessSolved ? '✨ Correct Strategy!' : '❌ Not quite!'}
                    </div>
                    {chessPuzzles[chessQuestion].explanation}
                  </div>
                )}
              </div>

              {chessSolved !== null && (
                <div className="text-right pt-2">
                  <button
                    onClick={nextChessQuestion}
                    className="px-5 py-2.5 bg-spark-500 hover:bg-spark-600 text-white font-bold text-xs rounded-xl shadow-md inline-flex items-center gap-1.5"
                  >
                    <span>Next Drill</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: BILATERAL REFLEX */}
          {activeTab === 'reflex' && (
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400">
                  Left ⟷ Right Brain-Body Reaction Speed
                </span>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  {reflexTime ? `${reflexTime} ms` : 'Ready'}
                </span>
              </div>

              {reflexState === 'idle' && (
                <div className="py-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center mx-auto text-2xl">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-white">Bi-Lateral Reaction Speed</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Click 'Start'. When the screen flashes <strong>LEFT</strong> or <strong>RIGHT</strong>, tap the matching button as quickly as you can!
                  </p>
                  <button
                    onClick={startReflexTest}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all"
                  >
                    Start Reflex Test ⚡
                  </button>
                </div>
              )}

              {reflexState === 'waiting' && (
                <div className="py-12 space-y-3 animate-pulse">
                  <div className="text-3xl">⏳</div>
                  <h4 className="text-lg font-bold text-amber-400">Get Ready...</h4>
                  <p className="text-xs text-slate-400">Focus on the screen center...</p>
                </div>
              )}

              {reflexState === 'ready' && (
                <div className="space-y-6 py-4">
                  <div className="text-4xl sm:text-5xl font-black text-spark-400 animate-bounce tracking-widest">
                    TAP {reflexTarget}!
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                    <button
                      onClick={() => handleReflexTap('LEFT')}
                      className="py-8 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg shadow-xl"
                    >
                      👈 LEFT
                    </button>
                    <button
                      onClick={() => handleReflexTap('RIGHT')}
                      className="py-8 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-lg shadow-xl"
                    >
                      RIGHT 👉
                    </button>
                  </div>
                </div>
              )}

              {reflexState === 'clicked' && (
                <div className="space-y-4 py-4">
                  <div className="text-3xl">🏆</div>
                  <h4 className="text-xl font-extrabold text-white">
                    Reaction Time: <span className="text-emerald-400">{reflexTime} ms</span>
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    {reflexTime < 350 ? '🔥 Lightning-fast reflexes! Top 5% cognitive tier.' : '💪 Great response time! Juggling drills can bring this sub-300ms.'}
                  </p>
                  <button
                    onClick={startReflexTest}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 inline-flex items-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Bottom Personalized Recommendation Banner */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80">
            <div className="text-left">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-spark-400" />
                <span>Get a Full 45-Minute In-Depth Diagnostic</span>
              </div>
              <p className="text-[11px] text-slate-400">Covers 12 cognitive metrics with certified coaches.</p>
            </div>
            <button
              onClick={() => onOpenTrialModal()}
              className="w-full sm:w-auto px-4 py-2 bg-spark-500 hover:bg-spark-600 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 flex-shrink-0"
            >
              <span>Book Free Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
