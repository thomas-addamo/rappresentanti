import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] bg-[#f5f2eb] overflow-y-auto no-scrollbar text-primary"
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
                            Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.lgs. 196/2003 (Codice Privacy)<br />
                            Ultimo aggiornamento: 18 febbraio 2026
                        </p>

                        <p>
                            La presente informativa descrive le modalità di trattamento dei dati personali raccolti attraverso il sito web <strong>www.rappresentantimaxwell.it</strong>, gestito dai Rappresentanti d'Istituto e dal gestore tecnico Thomas Addamo (di seguito "Titolare").<br />
                            Il sito non costituisce una piattaforma ufficiale dell'Istituto scolastico e opera in piena autonomia rispetto a esso.
                        </p>

                        {/* 1. Titolare */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">1. Titolare del trattamento</h2>
                            <p>Il Titolare del trattamento dei dati personali è:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Rappresentanti d'Istituto – Thomas Addamo</strong></li>
                                <li>Email: <a href="mailto:info@rappresentantimaxwell.it" className="underline">info@rappresentantimaxwell.it</a></li>
                            </ul>
                            <p className="mt-2">
                                Il Titolare è responsabile di garantire che il trattamento dei dati personali avvenga nel rispetto del Regolamento (UE) 2016/679 ("GDPR") e del D.lgs. 196/2003 ("Codice Privacy").
                            </p>
                        </section>

                        {/* 2. DPO */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">2. Responsabile della protezione dei dati (DPO)</h2>
                            <p>
                                Il Titolare non ha nominato un Responsabile della Protezione dei Dati (DPO) ai sensi dell'art. 37 GDPR, in quanto il trattamento effettuato non rientra nei casi in cui tale nomina è obbligatoria.
                            </p>
                            <p className="mt-2">
                                Per qualsiasi richiesta relativa al trattamento dei dati personali, è possibile scrivere a: <a href="mailto:info@rappresentantimaxwell.it" className="underline">info@rappresentantimaxwell.it</a>
                            </p>
                        </section>

                        {/* 3. Tipologia di dati */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">3. Tipologia di dati trattati</h2>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">3.1 Dati forniti volontariamente dall'utente</h3>
                            <p>Attraverso il modulo di contatto, il sito raccoglie:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Nome</li>
                                <li>Indirizzo email</li>
                                <li>Contenuto del messaggio</li>
                            </ul>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">3.2 Dati raccolti automaticamente</h3>
                            <p>Durante la navigazione, i seguenti dati possono essere raccolti automaticamente:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Indirizzo IP</li>
                                <li>Tipo di browser e sistema operativo</li>
                                <li>Pagine visitate e durata della navigazione</li>
                                <li>Paese di provenienza</li>
                                <li>URL di provenienza (referrer)</li>
                            </ul>

                            <p className="mt-2">
                                Il sito non richiede né intende trattare dati appartenenti alle categorie particolari previste dall'art. 9 GDPR (es. dati sanitari, opinioni politiche, convinzioni religiose).
                            </p>
                        </section>

                        {/* 4. Finalità e base giuridica */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">4. Finalità e base giuridica del trattamento</h2>

                            <div className="overflow-x-auto -mx-6">
                                <table className="min-w-full text-left text-base border border-primary/10 rounded-xl overflow-hidden mx-6" style={{ width: 'calc(100% - 3rem)' }}>
                                    <thead>
                                        <tr className="bg-primary/5">
                                            <th className="px-4 py-3 font-medium text-sm uppercase tracking-wider">Finalità</th>
                                            <th className="px-4 py-3 font-medium text-sm uppercase tracking-wider">Base giuridica</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-primary/10">
                                            <td className="px-4 py-3 text-sm">Rispondere alle richieste inviate tramite il modulo di contatto</td>
                                            <td className="px-4 py-3 text-sm">Consenso dell'utente (art. 6, par. 1, lett. a GDPR)</td>
                                        </tr>
                                        <tr className="border-t border-primary/10 bg-primary/[0.02]">
                                            <td className="px-4 py-3 text-sm">Erogazione del servizio web (hosting, CDN)</td>
                                            <td className="px-4 py-3 text-sm">Legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR)</td>
                                        </tr>
                                        <tr className="border-t border-primary/10">
                                            <td className="px-4 py-3 text-sm">Statistiche di navigazione (Vercel Analytics)</td>
                                            <td className="px-4 py-3 text-sm">Consenso dell'utente (art. 6, par. 1, lett. a GDPR)</td>
                                        </tr>
                                        <tr className="border-t border-primary/10 bg-primary/[0.02]">
                                            <td className="px-4 py-3 text-sm">Caricamento font (Google Fonts)</td>
                                            <td className="px-4 py-3 text-sm">Legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 5. Modalità del trattamento */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">5. Modalità del trattamento</h2>
                            <p>
                                I dati personali sono trattati con strumenti elettronici nel pieno rispetto dei principi di correttezza, liceità, trasparenza e tutela della riservatezza previsti dal GDPR.<br />
                                Sono adottate misure tecniche e organizzative adeguate a prevenire la perdita, l'alterazione o l'accesso non autorizzato ai dati.
                            </p>
                        </section>

                        {/* 6. Servizi di terze parti */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">6. Servizi di terze parti</h2>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">6.1 Hosting – Vercel Inc.</h3>
                            <p>
                                Il sito è ospitato sulla piattaforma <strong>Vercel</strong> (Vercel Inc., San Francisco, CA, USA). Per l'erogazione del servizio, Vercel raccoglie automaticamente log di accesso contenenti l'indirizzo IP dell'utente, lo user agent e i dati di richiesta HTTP.<br />
                                Privacy Policy di Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline break-all">https://vercel.com/legal/privacy-policy</a>
                            </p>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">6.2 CDN – Fastly</h3>
                            <p>
                                I contenuti del sito vengono distribuiti attraverso la rete CDN di <strong>Fastly</strong> (Fastly Inc., San Francisco, CA, USA), che può raccogliere dati tecnici di navigazione (indirizzo IP, headers HTTP) necessari alla distribuzione dei contenuti.<br />
                                Privacy Policy di Fastly: <a href="https://www.fastly.com/privacy" target="_blank" rel="noopener noreferrer" className="underline break-all">https://www.fastly.com/privacy</a>
                            </p>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">6.3 Statistiche – Vercel Analytics</h3>
                            <p>
                                Il sito utilizza <strong>Vercel Analytics</strong>, un servizio di analisi statistica fornito da Vercel Inc., che raccoglie dati in forma aggregata e anonimizzata sulle pagine visitate, il dispositivo, il browser e il paese di provenienza.<br />
                                Vercel Analytics viene attivato <strong>esclusivamente previo consenso esplicito</strong> dell'utente. In assenza di consenso, nessun dato statistico viene raccolto.
                            </p>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">6.4 Modulo di contatto – EmailJS</h3>
                            <p>
                                Per l'invio delle comunicazioni, il sito utilizza il servizio <strong>EmailJS</strong> (EmailJS, USA), che funge da intermediario tecnico per la trasmissione dei messaggi verso la casella email del Titolare.
                            </p>
                            <p className="mt-2">
                                EmailJS non conserva i contenuti delle comunicazioni e non utilizza i dati personali degli utenti per finalità proprie. I messaggi vengono recapitati direttamente alla casella email: <a href="mailto:info@rappresentantimaxwell.it" className="underline">info@rappresentantimaxwell.it</a>
                            </p>
                            <p className="mt-2">
                                Privacy Policy di EmailJS: <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline break-all">https://www.emailjs.com/legal/privacy-policy/</a>
                            </p>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">6.5 Font – Google Fonts</h3>
                            <p>
                                Il sito carica i font "Instrument Serif" e "Instrument Sans" dai server di <strong>Google LLC</strong> (USA). Durante il caricamento, l'indirizzo IP dell'utente viene trasmesso a Google. Google non utilizza questi dati per finalità di profilazione.<br />
                                Privacy Policy di Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline break-all">https://policies.google.com/privacy</a>
                            </p>
                        </section>

                        {/* 7. Conservazione */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">7. Periodo di conservazione dei dati</h2>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Dati del modulo di contatto</strong>: conservati per il tempo strettamente necessario a rispondere alla richiesta e gestire l'eventuale prosecuzione della comunicazione, e comunque non oltre 12 mesi dalla ricezione.</li>
                                <li><strong>Dati di navigazione (hosting/CDN)</strong>: conservati da Vercel e Fastly secondo le rispettive policy di conservazione, generalmente per un periodo non superiore a 30 giorni.</li>
                                <li><strong>Dati statistici (Vercel Analytics)</strong>: conservati in forma aggregata e anonimizzata da Vercel Inc.</li>
                                <li><strong>Preferenze cookie (localStorage)</strong>: conservate sul dispositivo dell'utente fino a cancellazione manuale dei dati di navigazione.</li>
                            </ul>
                        </section>

                        {/* 8. Trasferimento extra-UE */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">8. Trasferimento dei dati al di fuori dell'Unione Europea</h2>
                            <p>
                                L'utilizzo dei servizi di hosting (Vercel), CDN (Fastly), analisi statistica (Vercel Analytics), invio email (EmailJS) e caricamento font (Google) può comportare il trasferimento di dati personali al di fuori dell'Unione Europea, in particolare negli Stati Uniti d'America.
                            </p>
                            <p className="mt-2">
                                Tali trasferimenti avvengono sulla base del <strong>EU-U.S. Data Privacy Framework</strong> (Decisione di adeguatezza della Commissione Europea del 10 luglio 2023) e/o sulla base di clausole contrattuali standard approvate dalla Commissione Europea, in conformità agli articoli 44 e seguenti del GDPR.
                            </p>
                        </section>

                        {/* 9. Destinatari */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">9. Destinatari dei dati</h2>
                            <p>
                                I dati personali non vengono comunicati a soggetti terzi, né ceduti o trasferiti a fini commerciali.<br />
                                Possono venire a conoscenza dei dati esclusivamente il Titolare e le persone strettamente autorizzate alla gestione del sito e delle comunicazioni, nonché i fornitori di servizi tecnici indicati alla sezione 6, nei limiti strettamente necessari all'erogazione dei rispettivi servizi.
                            </p>
                        </section>

                        {/* 10. Diritti */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">10. Diritti dell'interessato</h2>
                            <p>L'utente, in qualità di interessato, ha il diritto di:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>ottenere l'accesso ai propri dati personali (art. 15 GDPR);</li>
                                <li>richiedere la rettifica dei dati inesatti (art. 16 GDPR);</li>
                                <li>ottenere la cancellazione dei dati ("diritto all'oblio", art. 17 GDPR);</li>
                                <li>richiedere la limitazione del trattamento (art. 18 GDPR);</li>
                                <li>opporsi al trattamento, quando applicabile (art. 21 GDPR);</li>
                                <li>ricevere i dati personali forniti in formato strutturato e leggibile da dispositivo automatico (art. 20 GDPR);</li>
                                <li>revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima della revoca (art. 7, par. 3, GDPR).</li>
                            </ul>
                            <p className="mt-2">
                                Per esercitare tali diritti è possibile inviare una richiesta scritta a:<br />
                                <a href="mailto:info@rappresentantimaxwell.it" className="underline">info@rappresentantimaxwell.it</a>
                            </p>
                        </section>

                        {/* 11. Reclamo al Garante */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">11. Diritto di reclamo</h2>
                            <p>
                                L'utente ha il diritto di proporre reclamo all'autorità di controllo competente, ovvero il <strong>Garante per la Protezione dei Dati Personali</strong>:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline">www.garanteprivacy.it</a></li>
                                <li>Email: <a href="mailto:protocollo@gpdp.it" className="underline">protocollo@gpdp.it</a></li>
                                <li>PEC: <a href="mailto:protocollo@pec.gpdp.it" className="underline">protocollo@pec.gpdp.it</a></li>
                                <li>Centralino: (+39) 06.696771</li>
                            </ul>
                        </section>

                        {/* 12. Cookie */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">12. Cookie</h2>
                            <p>
                                Per informazioni dettagliate sull'utilizzo dei cookie su questo sito, si prega di consultare la <a href="#cookie-policy" className="underline font-medium">Cookie Policy</a>.
                            </p>
                        </section>

                        {/* 13. Conferimento */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">13. Conferimento dei dati</h2>
                            <p>
                                Il conferimento dei dati personali tramite il modulo di contatto è facoltativo, ma necessario per permettere al Titolare di fornire riscontro alle richieste.<br />
                                L'eventuale mancata accettazione della presente informativa impedisce l'invio del messaggio.
                            </p>
                        </section>

                        {/* 14. Modifiche */}
                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">14. Modifiche all'informativa</h2>
                            <p>
                                Il Titolare si riserva la facoltà di modificare la presente informativa in qualsiasi momento per motivi normativi o organizzativi.<br />
                                Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-primary/10 flex justify-center">
                        <div className="font-sans text-3xl opacity-20">***</div>
                    </div>
                </article>
                <Footer />
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
