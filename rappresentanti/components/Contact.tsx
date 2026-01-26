import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privacyAccepted) {
      setShowPrivacyError(true);
      return;
    }

    setFormState('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const fromEmail = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    const EMAIL_TO = 'info@rappresentantimaxwell.it';

    const pubKey = process.env.EMAILJS_PUBLIC_KEY as string | undefined;
    const serviceId = process.env.EMAILJS_SERVICE_ID as string | undefined;
    const templateId = process.env.EMAILJS_TEMPLATE_ID as string | undefined;

    // Se configurato EmailJS, invia direttamente; altrimenti fallback a mailto
    if (pubKey && serviceId && templateId) {
      try {
        emailjs.init(pubKey);
        await emailjs.send(serviceId, templateId, {
          from_name: name,
          from_email: fromEmail,
          message,
          to_email: EMAIL_TO,
        });
        setFormState('sent');
        form.reset();
        setTimeout(() => setFormState('idle'), 3000);
      } catch (err) {
        console.error('Errore invio EmailJS:', err);
        setFormState('idle');
        alert("C'è stato un errore nell'invio. Riprova più tardi.");
      }
      return;
    }

    // Fallback: apre il client email dell'utente
    const subject = `Nuovo messaggio dal sito — ${name || 'Utente'}`;
    const body = `Da: ${name} <${fromEmail}>

${message}`;
    const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.location.href = mailto;
      setFormState('sent');
      form.reset();
      setTimeout(() => setFormState('idle'), 3000);
    } catch (err) {
      console.error('Errore apertura mailto:', err);
      setFormState('idle');
      alert("Impossibile aprire il client email. Puoi scriverci a: " + EMAIL_TO);
    }
  };

  return (
    <section id="contatti" className="min-h-screen flex items-center justify-center bg-primary text-paper px-6 py-24">
      <div className="w-full max-w-2xl">
        <h2 className="font-serif text-5xl md:text-7xl mb-6 text-center">Parla con noi</h2>
        <p className="font-sans text-center opacity-70 mb-16 text-lg">
          Hai un'idea? Una lamentela? O vuoi solo chiedere come funziona qualcosa? <br />
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

          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-start gap-4">
              <div className="relative flex items-center mt-1">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyAccepted}
                  onChange={(e) => {
                    setPrivacyAccepted(e.target.checked);
                    if (e.target.checked) setShowPrivacyError(false);
                  }}
                  className={`peer h-5 w-5 cursor-pointer appearance-none border-2 bg-transparent transition-all checked:border-paper checked:bg-paper hover:border-paper focus:outline-none focus:ring-2 focus:ring-paper/50 focus:ring-offset-2 focus:ring-offset-primary ${showPrivacyError ? 'border-red-500' : 'border-paper/50'}`}
                />
                <Check
                  size={14}
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary opacity-0 transition-opacity peer-checked:opacity-100"
                />
              </div>
              <label htmlFor="privacy" className="cursor-pointer text-base text-paper/80 font-sans leading-tight">
                Dichiaro di aver letto l'<a href="https://www.iubenda.com/privacy-policy/14149172" className="iubenda-white iubenda-noiframe iubenda-embed underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Informativa Privacy</a> ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR) e acconsento al trattamento dei dati personali per essere ricontattato.
              </label>
            </div>
            {showPrivacyError && (
              <p className="text-red-500 text-sm font-sans ml-9">
                Devi accettare l'informativa sulla privacy per inviare il messaggio.
              </p>
            )}
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