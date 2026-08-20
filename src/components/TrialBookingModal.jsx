import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function TrialBookingModal({ isOpen, onClose, preselectedTrack = '' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '6-8',
    email: '',
    phone: '',
    interests: preselectedTrack ? [preselectedTrack] : ['Chess', 'Rubik’s Cube'],
    mode: 'Studio (In-Person)',
    preferredDay: 'Saturday',
    preferredTime: '10:30 AM',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleInterest = (item) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(item);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== item) };
      } else {
        return { ...prev, interests: [...prev.interests, item] };
      }
    });
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (err) {}
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const activityOptions = [
    '♟️ Chess Mastery',
    '🤹 Juggling & Bi-Lateral Flow',
    '🧊 Rubik’s Cube & Speedcubing',
    '🧩 Logic & Puzzles',
    '🔢 Sudoku',
    '🎯 Memory Lab'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#0C1322] border border-slate-700/80 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header & Step Indicator */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-spark-500/10 border border-spark-500/30 text-spark-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary 45-Min Trial Session</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Ignite Your Child's Potential
              </h3>
              
              {/* Stepper Progress Bar */}
              <div className="flex items-center gap-2 pt-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      step >= s ? 'bg-gradient-to-r from-spark-500 to-amber-400' : 'bg-slate-800'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="text-[11px] font-semibold text-slate-400">
                Step {step} of 3: {step === 1 ? 'Child & Age Group' : step === 2 ? 'Preferred Activities & Format' : 'Parent Contact Details'}
              </div>
            </div>

            {/* STEP 1: Child Name & Age */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Child's First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav, Maya, Kabir"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-sm focus:border-spark-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Child's Age Group
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { label: 'Junior (4–6 yrs)', val: '4-6' },
                      { label: 'Explorer (6–8 yrs)', val: '6-8' },
                      { label: 'Master (8–12 yrs)', val: '8-12' },
                      { label: 'Advanced (12+ yrs)', val: '12+' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.val}
                        onClick={() => setFormData({ ...formData, childAge: item.val })}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          formData.childAge === item.val
                            ? 'bg-spark-500 text-white border-spark-400 shadow-md'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleNext()}
                    disabled={!formData.childName}
                    className="px-6 py-3 bg-gradient-to-r from-spark-500 to-amber-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg flex items-center gap-2 hover:scale-[1.02] transition-all"
                  >
                    <span>Next: Select Activities</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Activities & Format */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Select Activities to Experience (Choose 1 or more)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {activityOptions.map((act) => {
                      const isSelected = formData.interests.some(i => act.includes(i) || i.includes(act));
                      return (
                        <button
                          type="button"
                          key={act}
                          onClick={() => toggleInterest(act)}
                          className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-spark-500/20 border-spark-500 text-spark-300'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="truncate">{act}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-spark-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Session Format
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Studio (In-Person)', 'Live Online Cohort'].map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setFormData({ ...formData, mode: m })}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                          formData.mode === m
                            ? 'bg-spark-500 text-white border-spark-400 shadow-md'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNext()}
                    className="px-6 py-3 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg flex items-center gap-2 hover:scale-[1.02] transition-all"
                  >
                    <span>Next: Schedule & Contact</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Parent Contact & Slot */}
            {step === 3 && (
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-sm focus:border-spark-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-sm focus:border-spark-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-sm focus:border-spark-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Day
                    </label>
                    <select
                      value={formData.preferredDay}
                      onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-xs focus:border-spark-500 focus:outline-none"
                    >
                      <option>Saturday</option>
                      <option>Sunday</option>
                      <option>Wednesday Evening</option>
                      <option>Friday Evening</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-white text-xs focus:border-spark-500 focus:outline-none"
                    >
                      <option>10:00 AM – 10:45 AM</option>
                      <option>11:30 AM – 12:15 PM</option>
                      <option>04:00 PM – 04:45 PM</option>
                      <option>05:30 PM – 06:15 PM</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-spark-500/30 flex items-center gap-2 hover:scale-[1.02] transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm Free Trial 🚀</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* SUCCESS SCREEN */
          <div className="text-center py-6 space-y-5 animate-scaleUp">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-white">
                Trial Session Confirmed! 🎉
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                We're excited to welcome <strong>{formData.childName}</strong> for a 45-minute cognitive diagnostic on <strong>{formData.preferredDay} ({formData.preferredTime})</strong>.
              </p>
            </div>

            <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 text-left text-xs space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Child Age Group:</span>
                <span className="font-bold text-white">{formData.childAge} Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Session Format:</span>
                <span className="font-bold text-spark-400">{formData.mode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Parent Contact:</span>
                <span className="font-bold text-white">{formData.phone}</span>
              </div>
            </div>

            <div className="p-3 bg-spark-500/10 rounded-xl border border-spark-500/20 text-[11px] text-spark-300">
              📲 A WhatsApp invite and preparatory checklist have been sent to your number!
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700"
            >
              Done & Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
