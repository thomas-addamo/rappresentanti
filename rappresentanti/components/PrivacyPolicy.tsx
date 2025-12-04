import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-paper overflow-y-auto no-scrollbar text-primary"
        >
            <div className="min-h-screen relative">
                {/* Header */}
                <div className="sticky top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center bg-primary z-50 border-b border-paper/10">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-3 font-sans uppercase tracking-widest text-sm text-paper hover:opacity-60 transition-opacity"
                    >
                        <div className="p-2 border border-paper rounded-full group-hover:bg-paper group-hover:text-primary transition-colors">
                            <ArrowLeft size={20} />
                        </div>
                        Torna Indietro
                    </button>
                    <div className="hidden md:block font-serif italic text-xl text-paper">Rappresentanti. Privacy</div>
                </div>

                {/* Content */}
                <article className="max-w-3xl mx-auto px-6 pt-12 pb-32">
                    <h1 className="font-serif text-4xl md:text-6xl mb-12 leading-tight text-primary">
                        Informativa sul trattamento dei dati personali
                    </h1>

                    <div className="font-sans text-lg md:text-xl leading-relaxed opacity-90 space-y-8">
                        <p className="font-bold">
                            Ai sensi del Regolamento (UE) 2016/679 (GDPR)<br />
                            Ultimo aggiornamento: 4 dicembre 2025
                        </p>

                        <p>
                            La presente informativa descrive le modalità di trattamento dei dati personali raccolti attraverso il sito web gestito dai rappresentanti d’istituto e dal gestore tecnico Thomas Addamo (di seguito “Titolare”).<br />
                            Il sito non costituisce una piattaforma ufficiale dell’Istituto scolastico e opera in autonomia rispetto a esso.
                        </p>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">1. Titolare del trattamento</h2>
                            <p>
                                Il Titolare del trattamento è costituito dai rappresentanti d’istituto e dal gestore del sito:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Rappresentanti d’Istituto e Thomas Addamo</strong></li>
                                <li>Email di riferimento: <a href="mailto:info@rappresentantimaxwell.it" className="underline">info@rappresentantimaxwell.it</a></li>
                            </ul>
                            <p className="mt-2">
                                Il Titolare è responsabile di garantire che il trattamento dei dati personali avvenga nel rispetto del Regolamento (UE) 2016/679 (“GDPR”).
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">2. Tipologia di dati trattati</h2>
                            <p>Attraverso il form di contatto, il sito raccoglie e tratta i seguenti dati personali:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Nome e cognome</li>
                                <li>Indirizzo email</li>
                                <li>Contenuto del messaggio trasmesso dall’utente</li>
                            </ul>
                            <p className="mt-2">
                                Il sito non richiede né intende trattare dati appartenenti alle categorie particolari previste dall’art. 9 GDPR (es. dati sanitari, opinioni politiche, convinzioni religiose). Eventuali informazioni sensibili inserite volontariamente dall’utente non sono sollecitate dal Titolare.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">3. Finalità e base giuridica del trattamento</h2>
                            <p>I dati personali raccolti attraverso il form di contatto vengono trattati esclusivamente per:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>gestire le richieste degli utenti;</li>
                                <li>fornire un riscontro diretto tramite posta elettronica.</li>
                            </ul>
                            <p className="mt-2">
                                La base giuridica del trattamento è costituita dal consenso dell’utente (art. 6, par. 1, lett. a GDPR), acquisito mediante apposita checkbox obbligatoria prima dell’invio del form.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">4. Modalità del trattamento</h2>
                            <p>
                                I dati personali sono trattati con strumenti elettronici nel pieno rispetto dei principi di correttezza, liceità, trasparenza e tutela della riservatezza previsti dal GDPR.<br />
                                Sono adottate misure tecniche e organizzative adeguate a prevenire la perdita, l’alterazione o l’accesso non autorizzato ai dati.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">5. Sistemi esterni e servizi utilizzati</h2>
                            <p>
                                Per l’invio delle comunicazioni, il sito utilizza il servizio EmailJS, che funge da intermediario tecnico per la trasmissione dei messaggi verso la casella email del Titolare.
                            </p>
                            <p className="mt-2">
                                EmailJS non conserva i contenuti delle comunicazioni e non utilizza i dati personali degli utenti.
                            </p>
                            <p className="mt-2">
                                I messaggi vengono recapitati direttamente alla casella email del Titolare:<br />
                                <a href="mailto:info@rappresentantimaxwell.it" className="underline">info@rappresentantimaxwell.it</a>
                            </p>
                            <p className="mt-2">
                                Per informazioni sulle modalità di trattamento adottate da EmailJS, si invita l’utente a consultare la loro informativa privacy.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">6. Conservazione dei dati</h2>
                            <p>I dati personali sono conservati esclusivamente per il periodo necessario a:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>rispondere alle richieste pervenute;</li>
                                <li>gestire l’eventuale prosecuzione della comunicazione.</li>
                            </ul>
                            <p className="mt-2">
                                Non viene effettuato alcun tipo di archiviazione sistematica né conservazione per finalità ulteriori.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">7. Destinatari dei dati</h2>
                            <p>
                                I dati personali non vengono comunicati a soggetti terzi, né ceduti o trasferiti a fini commerciali.<br />
                                Possono venire a conoscenza dei dati esclusivamente il Titolare e le persone strettamente autorizzate alla gestione del sito e delle comunicazioni.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">8. Trasferimento extra-UE</h2>
                            <p>
                                L’utilizzo del servizio EmailJS può comportare un trasferimento dei dati al di fuori dell’Unione Europea.<br />
                                Tale trasferimento avviene sulla base di adeguate misure di sicurezza e conformemente agli articoli 44 e seguenti del GDPR.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">9. Diritti dell’interessato</h2>
                            <p>L’utente, in qualità di interessato, ha il diritto di:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>ottenere l’accesso ai propri dati personali (art. 15 GDPR);</li>
                                <li>richiedere la rettifica dei dati inesatti (art. 16 GDPR);</li>
                                <li>ottenere la cancellazione dei dati (“diritto all’oblio”, art. 17 GDPR);</li>
                                <li>richiedere la limitazione del trattamento (art. 18 GDPR);</li>
                                <li>opporsi al trattamento, quando applicabile (art. 21 GDPR);</li>
                                <li>ricevere i dati personali forniti in formato strutturato e leggibile da dispositivo automatico (art. 20 GDPR).</li>
                            </ul>
                            <p className="mt-2">
                                Per esercitare tali diritti è possibile inviare una richiesta scritta a:<br />
                                <a href="mailto:info@rappresentantimaxwell.it" className="underline">info@rappresentantimaxwell.it</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">10. Conferimento dei dati</h2>
                            <p>
                                Il conferimento dei dati personali tramite form è facoltativo, ma necessario per permettere al Titolare di fornire riscontro alle richieste.<br />
                                L’eventuale mancata accettazione della presente informativa impedisce l’invio del messaggio.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">11. Modifiche all’informativa</h2>
                            <p>
                                Il Titolare si riserva la facoltà di modificare la presente informativa in qualsiasi momento per motivi normativi o organizzativi.<br />
                                Le modifiche saranno pubblicate su questa pagina.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-primary/10 flex justify-center">
                        <div className="font-sans text-3xl opacity-20">***</div>
                    </div>
                </article>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
