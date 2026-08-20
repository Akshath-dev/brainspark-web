import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';

export default function TrialBookingModal({ isOpen, onClose, preselectedTrack = '' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '6-8',
    email: '',
    phone: '',
    interests: preselectedTrack ? [preselectedTrack] : ['Chess Mastery'],
    mode: 'In-Studio (Physical)',
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
          particleCount: 80,
          spread: 70,
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
    '🧩 Logic & Deduction Puzzles',
    '🔢 Sudoku & Grid Systems',
    '🎯 Memory & Focus Lab'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#11100D] border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header & Step Indicator */}
            <div className="space-y-2 mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-400">
                COMPLIMENTARY 45-MIN TRIAL
              </span>
              <h3 className="text-2xl font-normal tracking-tight text-white">
                Begin Your Child's Journey
              </h3>
              
              {/* Stepper Progress Bar */}
              <div className="flex items-center gap-2 pt-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      step >= s ? 'bg-sand-400' : 'bg-neutral-800'
                    }`}
                  ></div>
                ))}
              </div>
              <div className="text-[11px] font-light text-neutral-400">
                Step {step} of 3: {step === 1 ? 'Child & Age Group' : step === 2 ? 'Preferred Disciplines' : 'Parent Contact Details'}
              </div>
            </div>

            {/* STEP 1: Child Name & Age */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                    Child's First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Leo, Maya, Kabir"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0E0D0B] border border-neutral-800 rounded-xl text-white text-sm focus:border-sand-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
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
                        className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                          formData.childAge === item.val
                            ? 'bg-sand-400 text-noir-950 border-sand-400 font-semibold'
                            : 'bg-[#0E0D0B] border-neutral-800 text-neutral-300 hover:border-neutral-700'
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
                    className="px-8 py-3.5 bg-sand-400 hover:bg-sand-500 disabled:opacity-40 text-noir-950 font-medium text-sm rounded-full transition-all flex items-center gap-2"
                  >
                    <span>Next: Select Disciplines</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Activities & Format */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                    Select Disciplines (Choose 1 or more)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {activityOptions.map((act) => {
                      const isSelected = formData.interests.some(i => act.includes(i) || i.includes(act));
                      return (
                        <button
                          type="button"
                          key={act}
                          onClick={() => toggleInterest(act)}
                          className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-sand-400/20 border-sand-400 text-sand-300'
                              : 'bg-[#0E0D0B] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                          }`}
                        >
                          <span className="truncate">{act}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-sand-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                    Preferred Session Format
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['In-Studio (Physical)', 'Live Interactive Online'].map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setFormData({ ...formData, mode: m })}
                        className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                          formData.mode === m
                            ? 'bg-sand-400 text-noir-950 border-sand-400 font-semibold'
                            : 'bg-[#0E0D0B] border-neutral-800 text-neutral-300 hover:border-neutral-700'
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
                    className="px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white text-xs font-medium flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNext()}
                    className="px-8 py-3.5 bg-sand-400 hover:bg-sand-500 text-noir-950 font-medium text-sm rounded-full transition-all flex items-center gap-2"
                  >
                    <span>Next: Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Parent Contact & Slot */}
            {step === 3 && (
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0E0D0B] border border-neutral-800 rounded-xl text-white text-sm focus:border-sand-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                      Phone (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0E0D0B] border border-neutral-800 rounded-xl text-white text-sm focus:border-sand-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0E0D0B] border border-neutral-800 rounded-xl text-white text-sm focus:border-sand-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                      Preferred Day
                    </label>
                    <select
                      value={formData.preferredDay}
                      onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0E0D0B] border border-neutral-800 rounded-xl text-white text-xs focus:border-sand-400 focus:outline-none"
                    >
                      <option>Saturday</option>
                      <option>Sunday</option>
                      <option>Wednesday Evening</option>
                      <option>Friday Evening</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                      Preferred Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0E0D0B] border border-neutral-800 rounded-xl text-white text-xs focus:border-sand-400 focus:outline-none"
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
                    className="px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white text-xs font-medium flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-sand-400 hover:bg-sand-500 text-noir-950 font-medium text-sm rounded-full transition-all flex items-center gap-2"
                  >
                    <span>Confirm Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* SUCCESS SCREEN */
          <div className="text-center py-6 space-y-5 animate-scaleUp">
            <div className="w-14 h-14 rounded-full bg-sand-400/20 text-sand-400 flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-normal text-white">
                Trial Session Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto font-light">
                We're excited to welcome <strong>{formData.childName}</strong> for a 45-minute diagnostic on <strong>{formData.preferredDay} ({formData.preferredTime})</strong>.
              </p>
            </div>

            <div className="bg-[#0E0D0B] p-4 rounded-2xl border border-neutral-800 text-left text-xs space-y-2 text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-500">Child Age:</span>
                <span className="text-white">{formData.childAge} Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Session Mode:</span>
                <span className="text-sand-400">{formData.mode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Contact:</span>
                <span className="text-white">{formData.phone}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs rounded-full border border-neutral-800"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
