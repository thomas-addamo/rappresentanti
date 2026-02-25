import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, AlertCircle, Smartphone, CheckCircle2, XCircle, Info, MoveRight, HelpCircle, Download, FileText } from 'lucide-react';
import CollettivoNavbar from '../components/CollettivoNavbar';
import CollettivoFooter from '../components/CollettivoFooter';

interface RuleProps {
  situation: string;
  question: string;
  answer: string;
  isPositive?: boolean;
  reference: string;
}

const RightItem: React.FC<RuleProps> = ({ situation, question, answer, isPositive = true, reference }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="group p-5 sm:p-8 bg-paper border border-primary/10 rounded-[2rem] hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="mt-1 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all">
          📍
        </div>
      </div>
      <div>
        <h4 className="font-sans text-sm tracking-widest text-primary/60 uppercase font-bold mb-1">Situazione</h4>
        <p className="font-serif text-lg leading-tight">{situation}</p>
      </div>
    </div>
    
    <div className="h-px w-full bg-primary/5 my-4 group-hover:bg-primary/10 transition-colors" />
    
    <div className="flex items-start gap-3 mb-4">
        <HelpCircle size={18} className="mt-1 flex-shrink-0 text-primary/40" />
        <p className="font-sans font-medium text-primary/80 italic">"{question}"</p>
    </div>

    <div className="flex items-start gap-3 mb-6 bg-primary/5 p-4 rounded-xl border border-primary/10">
      {isPositive ? (
        <CheckCircle2 size={24} className="mt-0.5 flex-shrink-0 text-green-600" />
      ) : (
        <XCircle size={24} className="mt-0.5 flex-shrink-0 text-red-600" />
      )}
      <p className="font-sans text-sm md:text-base leading-relaxed opacity-90">{answer}</p>
    </div>

    <div className="mt-auto pt-4 border-t border-primary/5">
      <div className="flex items-start gap-2 text-xs font-sans opacity-60">
        <Info size={14} className="mt-0.5 flex-shrink-0" />
        <p>{reference}</p>
      </div>
    </div>
  </motion.div>
);

const SanctionItem: React.FC<{ situation: string; sanction: string; reference: string; severity?: 'low' | 'medium' | 'high' }> = ({ situation, sanction, reference, severity = 'medium' }) => {
    
    const severityColors = {
        low: 'bg-yellow-50 text-yellow-800 border-yellow-200',
        medium: 'bg-orange-50 text-orange-800 border-orange-200',
        high: 'bg-red-50 text-red-800 border-red-200'
    };

    return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="group relative p-5 sm:p-8 bg-paper border border-primary/10 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden"
    >
        {/* Severity indicator */}
        <div className="absolute top-0 right-0 p-4">
             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${severityColors[severity]}`}>
               {severity === 'high' ? 'Grave' : severity === 'medium' ? 'Media' : 'Lieve'}
             </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl mb-4 pr-16">{situation}</h3>
        
        <div className="bg-primary/5 rounded-xl p-4 mb-4 border border-primary/10">
             <div className="flex items-center gap-2 mb-2">
                 <AlertCircle size={16} className="text-red-500" />
                 <span className="font-sans text-xs uppercase tracking-widest font-bold text-primary/60">Sanzione Prevista</span>
             </div>
             <p className="font-sans text-sm md:text-base opacity-90 font-medium">{sanction}</p>
        </div>

        <div className="flex items-start gap-2 text-xs font-sans opacity-60 mt-4">
            <Info size={14} className="mt-0.5 flex-shrink-0" />
            <p>{reference}</p>
        </div>
    </motion.div>
    );
};


const CollettivoDirittiDoveriPage: React.FC = () => {
  return (
    <div className="antialiased selection:bg-primary selection:text-paper bg-paper text-primary min-h-screen flex flex-col">
       <div className="fixed top-0 left-0 w-full z-50">
          <CollettivoNavbar />
       </div>

       {/* Hero Section */}
        <header className="relative pt-32 md:pt-48 pb-24 px-6 overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] mb-8 font-medium">
                Regolamento d'Istituto
              </div>
              <h1 className="font-serif text-[12vw] sm:text-8xl md:text-9xl leading-[0.85] mb-8 tracking-tight">
                Diritti e <br />
                <span className="italic text-primary/80">Doveri.</span>
              </h1>
              <p className="font-sans text-lg sm:text-xl md:text-2xl opacity-70 font-light leading-relaxed max-w-2xl mx-auto">
                Una guida chiara e diretta al regolamento d'istituto dell'IIS "J.C. Maxwell". Conosci ciò che puoi pretendere e ciò che devi rispettare.
              </p>
            </motion.div>
          </div>
        </header>

        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 space-y-24 md:space-y-32 pb-20 overflow-x-hidden">
          
          {/* I TUOI DIRITTI */}
          <section id="diritti">
             <div className="flex items-center gap-4 mb-12 border-b border-primary/10 pb-6">
                 <div className="w-12 h-12 bg-primary text-paper rounded-2xl flex items-center justify-center">
                     <ShieldCheck size={24} />
                 </div>
                 <div>
                    <h2 className="font-serif text-4xl md:text-5xl">I Tuoi Diritti</h2>
                    <p className="font-sans text-sm uppercase tracking-widest opacity-60 mt-1">Cosa è tutelato dal regolamento</p>
                 </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <RightItem
                    situation="Hai detto la tua opinione su qualcosa in classe. Il prof ti minaccia una nota."
                    question="Posso essere punito per aver espresso un'opinione?"
                    answer="No, mai. Nessuna sanzione può essere data per la libera espressione di opinioni, a patto che vengano espresse in modo corretto e rispettoso. È un diritto garantito esplicitamente."
                    reference="Art. 4 – In nessun caso può essere sanzionata... la libera espressione di opinioni correttamente manifestata."
                />
                <RightItem
                    situation="Stanno per darti una sanzione ma non ti hanno ancora sentito."
                    question="Mi possono sanzionare senza ascoltarmi?"
                    answer="No. È un principio fondamentale: nessuno studente può ricevere una sanzione senza essere stato prima invitato a esporre le proprie ragioni. Se questo non avviene, la procedura è irregolare."
                    reference="Art. 3 – Nessuno studente può essere sottoposto a sanzione... senza essere stato prima invitato ad esporre le proprie ragioni."
                />
                <RightItem
                    situation="Hai ricevuto una sospensione che ti sembra ingiusta."
                    question="Posso fare ricorso contro una sospensione?"
                    answer="Sì. Hai 15 giorni dalla sanzione per fare ricorso all'Organo di Garanzia (Dirigente, un docente, un genitore, uno studente). La sanzione resta attiva, ma puoi impugnarla."
                    reference="Art. 12 – Ricorso all'Organo di Garanzia entro 15 giorni."
                />
                <RightItem
                    situation="Qualcuno ti ha pubblicato online una foto o un video senza il tuo consenso."
                    question="Qualcuno mi ha filmato senza consenso: ho tutele?"
                    answer="Sì. Hai diritto alla tutela della tua privacy. Chi l'ha fatto ha violato il regolameento e le leggi sulla privacy. Segnalalo subito: chi l'ha fatto rischia la sospensione fino a 15 giorni."
                    reference="Art. 1 (tutela privacy) + Art. 11 – Sospensione fino a 15 giorni per la diffusione non autorizzata."
                />
                <RightItem
                    situation="Devi andare in bagno urgentemente ma il prof non ti dà il permesso."
                    question="Il prof può negarmi il bagno?"
                    answer="Il regolamento non lo disciplina esplicitamente, ma hai diritto alla salute e dignità personale. In caso di urgenza reale, segnalalo con calma. Se il problema è sistematico, puoi coinvolgere il coordinatore o i rappresentanti."
                    reference="Art. 1 (ambiente sicuro e rispettoso) + DPR 249/1998 Statuto degli Studenti."
                />
                 <RightItem
                    situation="Hai ricevuto una sospensione ma vorresti convertirla in qualcosa di utile."
                    question="Posso convertire una sospensione in un'attività alternativa?"
                    answer="Sì, puoi chiederlo. Il regolamento prevede espressamente la possibilità di convertire la sanzione in attività a favore della comunità scolastica (es. lavori socialmente utili per la scuola)."
                    reference="Art. 2 – Lo studente ha sempre la possibilità di richiedere la conversione."
                />
                <RightItem
                    situation="Hai ricevuto una nota disciplinare e temi che possa abbassare i tuoi voti."
                    question="Una sanzione disciplinare può abbassare i miei voti?"
                    answer="No. Nessuna infrazione disciplinare connessa al comportamento può influire sulla valutazione del profitto. Le sanzioni riguardano la condotta, non i voti delle materie."
                    reference="Art. 7 – Nessuna infrazione disciplinare... può influire sulla valutazione del profitto."
                />
                 <RightItem
                    situation="Sei stato coinvolto in un procedimento disciplinare e temi che tutti sappiano i dettagli."
                    question="I dettagli di una sanzione possono essere resi pubblici?"
                    answer="No. Il regolamento prevede che ogni provvedimento sanzionatorio debba mantenere un'adeguata riservatezza circa i fatti e le persone coinvolte. La tua privacy è tutelata."
                    reference="Art. 5 – Riservatezza circa i fatti e le persone coinvolte."
                />
             </div>
          </section>

          {/* I TUOI DOVERI */}
          <section id="doveri">
             <div className="flex items-center gap-4 mb-12 border-b border-primary/10 pb-6">
                 <div className="w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-2xl flex items-center justify-center">
                     <Scale size={24} />
                 </div>
                 <div>
                    <h2 className="font-serif text-4xl md:text-5xl">I Tuoi Doveri</h2>
                    <p className="font-sans text-sm uppercase tracking-widest opacity-60 mt-1">Cosa non puoi fare</p>
                 </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <RightItem
                    situation="Sei stufo, vuoi staccare. Esci da scuola durante le lezioni per andare al bar."
                    question="Posso andare al bar durante le lezioni?"
                    answer="No. Uscire arbitrariamente dalla classe o dalla scuola senza autorizzazione è vietato. Oltre all'obbligo di frequenza, rischi una sospensione fino a 15 giorni."
                    isPositive={false}
                    reference="Art. 11 – Arbitrario allontanamento dalla classe e/o scuola."
                />
                <RightItem
                    situation="Stai filmando il prof (o un compagno) durante la lezione per metterlo sui social."
                    question="Posso filmare in classe e postare online?"
                    answer="Assolutamente no. Registrare senza autorizzazione viola la privacy. Diffonderlo è ancora più grave. Rischi sospensione fino a 15 giorni e conseguenze legali."
                    isPositive={false}
                    reference="Art. 11 – Riprese e/o diffusione in violazione della privacy."
                />
                <RightItem
                    situation="Un tuo amico ti chiede la password della piattaforma scolastica."
                    question="Posso condividere le mie credenziali scolastiche?"
                    answer="No. Condividere le credenziali di accesso alle piattaforme didattiche è vietato e la responsabilità di ciò che accade con il tuo account è tua. Rischi 15 giorni di sospensione."
                    isPositive={false}
                    reference="Art. 11 – Divulgazione a terzi dei codici di accesso."
                />
                <RightItem
                    situation="Devi far firmare una comunicazione ai tuoi genitori, ma decidi di firmare tu."
                    question="Posso firmare al posto dei miei genitori?"
                    answer="No. Falsificare firme dei genitori o alterare documenti scolastici è una delle infrazioni più gravi. È considerata manomissione."
                    isPositive={false}
                    reference="Art. 11 – Falsificazione di firme o alterazione di documenti."
                />
                 <RightItem
                    situation="Sei arrabbiato e rompi intenzionalmente una sedia o scrivi sui banchi."
                    question="Cosa rischio se danneggio il materiale o i muri?"
                    answer="I danneggiamenti volontari sono infrazioni gravi (sospensione fino a 15 gg). Sei tenuto a rispettare le strutture. Potresti anche dover risarcire il danno economico alla scuola."
                    isPositive={false}
                    reference="Art. 11 – Danneggiamenti volontari."
                />
                <RightItem
                    situation="Minacci un compagno, lo prendi in giro o compi atti di bullismo vero e proprio."
                    question="Cosa rischio se faccio atti di bullismo verso un compagno?"
                    answer="Sospensione fino a 15 giorni. Minacce, bullismo e discriminazioni sono infrazioni gravissime perché ledono la dignità delle persone."
                    isPositive={false}
                    reference="Art. 11 – Minacce, azioni di bullismo e discriminazioni."
                />
                <RightItem
                     situation="Fai entrare un tuo amico che non frequenta la scuola."
                     question="Posso far entrare amici esterni a scuola?"
                     answer="No. L'introduzione non autorizzata di persone esterne è severamente vietata per motivi di sicurezza, poiché la scuola è responsabile di chiunque si trovi all'interno."
                     isPositive={false}
                     reference="Art. 11 – Introduzione non autorizzata di persone esterne."
                 />
             </div>
          </section>

          {/* LE SANZIONI */}
          <section id="sanzioni" className="bg-primary/5 p-8 md:p-12 lg:p-16 rounded-[3rem] border border-primary/10">
              <div className="max-w-3xl mb-12">
                  <h2 className="font-serif text-4xl md:text-6xl mb-4 text-primary">Le Sanzioni.</h2>
                  <p className="font-sans text-lg opacity-80 leading-relaxed font-light">Cosa prevede il regolamento per le violazioni più comuni.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <SanctionItem 
                     severity="low"
                     situation="Copiare al compito in classe o far copiare qualcuno."
                     sanction="Nota di biasimo annotata sul registro e visibile ai genitori. Vale per chi copia e per chi fa copiare."
                     reference="Art. 11 – Plagio, attivo e/o passivo, nell'esecuzione di verifiche."
                 />
                 <SanctionItem 
                     severity="low"
                     situation="Uso del telefono in classe (se non ci sono violazioni privacy)."
                     sanction="Nota di biasimo visibile sul registro. (Vedi sezione Smartphone per i dettagli successivi)."
                     reference="Art. 11 – Uso non autorizzato di telefoni cellulari."
                 />
                 <SanctionItem 
                     severity="medium"
                     situation="Ricevere ripetute note di biasimo nel tempo."
                     sanction="Dopo la 3° nota → Ammonizione scritta. Dopo la 4° nota o successiva all'ammonizione → Sospensione fino a 15 gg."
                     reference="Art. 11 – Progressioni per note ripetute."
                 />
                 <SanctionItem 
                     severity="high"
                     situation="Partecipare a una rissa o lite violenta a scuola."
                     sanction="Sospensione fino a 15 giorni decisa dal Consiglio di Classe. Tra le infrazioni più gravi previste."
                     reference="Art. 11 – Partecipazione a litigi violenti e Aggressioni."
                 />
                 <SanctionItem 
                     severity="low"
                     situation="Violazione delle misure di emergenza sanitarie o sicurezza."
                     sanction="Prima violazione: nota. Violazioni gravi o ripetute: sospensione."
                     reference="Art. 11 – Violazioni misure di contenimento."
                 />
              </div>
          </section>

          {/* SMARTPHONE */}
          <section id="smartphone">
              <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
                  <div className="w-full md:w-1/3 sticky top-32">
                      <div className="w-16 h-16 bg-primary text-paper rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
                          <Smartphone size={32} />
                      </div>
                      <h2 className="font-serif text-5xl tracking-tight mb-4">Smartphone.</h2>
                      <div className="inline-block px-3 py-1 rounded-sm bg-primary text-paper text-[10px] uppercase font-bold tracking-widest mb-4">
                          Regolamento Speciale 2025
                      </div>
                      <p className="font-sans text-lg opacity-70 leading-relaxed font-light mb-8">
                          Dal giugno 2025 è in vigore un nuovo regolamento che disciplina l'uso dei cellulari vietandolo in quasi ogni circostanza.
                      </p>
                      
                      <div className="bg-red-50 text-red-900 p-6 rounded-2xl border border-red-200">
                          <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-2">La Regola Base</h4>
                          <p className="font-serif italic text-lg leading-tight">Il telefono deve essere SPENTO e riposto nello ZAINO per tutta la mattinata (o pomeriggio). Non in tasca, non sul banco.</p>
                      </div>
                  </div>

                  <div className="w-full md:w-2/3 space-y-8 overflow-hidden">
                     <div className="space-y-6">
                        <RightItem
                            situation="Vuoi usare il telefono per cercare materiale didattico durante la lezione."
                            question="Posso usare lo smartphone per la didattica?"
                            answer="No, a meno che il prof non lo richieda esplicitamente e l'uso sia previsto in un Progetto Formativo di Dipartimento. Senza autorizzazione è sempre vietato, anche per studio."
                            isPositive={false}
                            reference="Art. 3, Regolamento Smartphone."
                        />
                        <RightItem
                            situation="Hai un problema urgente e devi avvisare tua madre."
                            question="Ho un'emergenza, posso chiamare la famiglia?"
                            answer="Puoi chiamare, ma NON con il tuo telefono. Le comunicazioni urgenti tra studenti e famiglie devono avvenire tramite i telefoni della scuola (es. in segreteria)."
                            isPositive={false}
                            reference="Art. 1, comma 6 – Comunicazioni urgenti tramite telefoni scolastici."
                        />
                        <RightItem
                            situation="Hai il diabete e usi un'app sul telefono per monitorare la glicemia."
                            question="Posso tenere il telefono per motivi di salute?"
                            answer="Sì, ma solo richiedendo una DEROGA scritta al Dirigente Scolastico tramite modulo. Se approvata, puoi usarlo solo ed esclusivamente per quel monitoraggio."
                            reference="Art. 2 – Deroghe per dichiarate e motivate ragioni di salute."
                        />
                         <RightItem
                            situation="Lasci il telefono nello zaino accatastato durante educazione fisica e, cadendo, si rompe lo schermo."
                            question="Se il telefono si rompe, la scuola lo ripaga?"
                            answer="No. La responsabilità della custodia del tuo telefono, anche se è nello zaino come da regola (o autorizzato per salute), è tua e dei tuoi genitori."
                            isPositive={false}
                            reference="Art. 2, comma 3 – Nessuna responsabilità dell'Istituzione per smarrimenti o rotture."
                        />
                        <RightItem
                            situation="Non usi lo smartphone, ma tieni al polso uno smartwatch collegato per leggere le notifiche."
                            question="Posso usare lo smartwatch al posto del telefono?"
                            answer="No. È vietato anche l'uso di dispositivi collegati allo smartphone (come gli orologi smart). Rientrano nello stesso divieto generale."
                            isPositive={false}
                            reference="Art. 1, comma 1 – Vietato l'utilizzo di dispositivi collegati (es. orologi connessi)."
                        />
                     </div>

                     {/* Progression of Sanctions */}
                     <div className="mt-12 bg-primary text-paper rounded-3xl p-8 md:p-12">
                          <h3 className="font-serif text-3xl mb-8">Escalation delle Sanzioni per lo Smartphone</h3>
                          <div className="space-y-4">
                              {[
                                  { level: 1, title: '1ª e 2ª Volta', desc: 'Nota disciplinare visibile sul registro elettronico ai genitori.' },
                                  { level: 2, title: '3ª Volta', desc: 'Ammonizione Scritta da parte del Coordinatore/Presidenza, annotata nel fascicolo personale.' },
                                  { level: 3, title: '4ª Volta', desc: 'Sospensione 1 Giorno con Obbligo di Frequenza (devi venire a scuola). Possibile assegnazione di un compito riflessivo.' },
                                  { level: 4, title: 'Oltre la 4ª Volta', desc: 'Sospensione fino a 15 Giorni Senza Obbligo di Frequenza (a casa), decisa dal Consiglio di Classe.' }
                              ].map((step, i) => (
                                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-paper/10 pb-4 last:border-0 hover:bg-white/5 p-2 rounded-xl transition-colors">
                                      <div className="w-12 h-12 flex-shrink-0 bg-paper/10 text-paper font-serif italic text-2xl rounded-full flex items-center justify-center">
                                          {step.level}
                                      </div>
                                      <div>
                                          <h4 className="font-sans font-bold uppercase tracking-widest text-[10px] sm:text-xs text-paper/60 mb-1">{step.title}</h4>
                                          <p className="font-sans text-sm sm:text-base opacity-90">{step.desc}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                     </div>
                  </div>
              </div>
          </section>

          {/* Download PDF */}
          <section id="documento-integrale">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative bg-primary text-paper rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-paper/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-paper/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-paper/10 rounded-2xl flex items-center justify-center border border-paper/10">
                    <FileText size={40} className="text-paper/80" />
                  </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3 tracking-tight">
                    Documento Integrale
                  </h2>
                  <p className="font-sans text-base md:text-lg text-paper/70 leading-relaxed max-w-2xl font-light">
                    Vuoi consultare il documento completo creato dal Collettivo? Scarica il documento in formato PDF per avere sempre a portata di mano il testo integrale dei tuoi diritti e doveri.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="/diritti-e-doveri.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="group inline-flex items-center gap-3 bg-paper text-primary px-8 py-4 rounded-2xl font-sans font-bold text-sm md:text-base uppercase tracking-widest hover:bg-paper/90 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Download size={20} className="group-hover:animate-bounce" />
                    Scarica PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Disclaimer */}
          <div className="border-t border-primary/10 pt-12 pb-12 mt-24">
              <p className="font-sans text-xs md:text-sm text-center text-primary/40 leading-relaxed max-w-4xl mx-auto">
                 Nota importante: Questo documento è stato creato dal Collettivo per facilitare la comprensione delle norme. I contenuti sono basati sul Regolamento di Disciplina dell'IIS Maxwell (rev: 14/03/2022), sul Regolamento Smartphone e sullo Statuto delle studentesse e degli studenti. Per controversie o per il testo legale integrale, fa fede esclusiva la documentazione ufficiale depositata presso l'Istituto.
              </p>
          </div>

        </main>

       <CollettivoFooter />
    </div>
  );
};

export default CollettivoDirittiDoveriPage;
