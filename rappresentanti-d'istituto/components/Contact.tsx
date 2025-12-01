import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contatti" className="min-h-screen flex items-center justify-center bg-primary text-paper px-6 py-24">
      <div className="w-full max-w-2xl">
        <h2 className="font-serif text-5xl md:text-7xl mb-6 text-center">Parla con noi</h2>
        <p className="font-sans text-center opacity-70 mb-16 text-lg">
          Hai un'idea? Una lamentela? O vuoi solo chiedere come funziona qualcosa? <br/>
          Siamo qui per ascoltare.
        </p>

        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="relative z-0 w-full group">
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="block py-4 px-0 w-full text-xl text-paper bg-transparent border-0 border-b-2 border-paper/30 appearance-none focus:outline-none focus:ring-0 focus:border-paper peer transition-colors" 
                    placeholder=" " 
                    required 
                />
                <label 
                    htmlFor="name" 
                    className="peer-focus:font-sans absolute text-xl text-paper/50 duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-serif italic"
                >
                    Il tuo nome
                </label>
            </div>

            <div className="relative z-0 w-full group">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="block py-4 px-0 w-full text-xl text-paper bg-transparent border-0 border-b-2 border-paper/30 appearance-none focus:outline-none focus:ring-0 focus:border-paper peer transition-colors" 
                    placeholder=" " 
                    required 
                />
                <label 
                    htmlFor="email" 
                    className="peer-focus:font-sans absolute text-xl text-paper/50 duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-serif italic"
                >
                    La tua email
                </label>
            </div>

            <div className="relative z-0 w-full group">
                <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    className="block py-4 px-0 w-full text-xl text-paper bg-transparent border-0 border-b-2 border-paper/30 appearance-none focus:outline-none focus:ring-0 focus:border-paper peer transition-colors resize-none" 
                    placeholder=" " 
                    required 
                />
                <label 
                    htmlFor="message" 
                    className="peer-focus:font-sans absolute text-xl text-paper/50 duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 font-serif italic"
                >
                    Il tuo messaggio
                </label>
            </div>

            <div className="flex justify-center">
                <button 
                    type="submit" 
                    disabled={formState !== 'idle'}
                    className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-sans uppercase tracking-widest overflow-hidden transition-all bg-paper text-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paper disabled:opacity-70 disabled:cursor-not-allowed"
                >
                   <span className="relative flex items-center gap-2">
                     {formState === 'idle' && <>INVIA <Send size={18} /></>}
                     {formState === 'sending' && "INVIO..."}
                     {formState === 'sent' && <>INVIATO <Check size={18} /></>}
                   </span>
                </button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;