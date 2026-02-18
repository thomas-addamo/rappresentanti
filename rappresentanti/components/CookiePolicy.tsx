import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

interface CookiePolicyProps {
    onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
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
                    <div className="hidden md:block font-serif italic text-xl text-paper">Rappresentanti. Cookie</div>
                </div>

                {/* Content */}
                <article className="max-w-3xl mx-auto px-6 pt-12 pb-32">
                    <h1 className="font-serif text-4xl md:text-6xl mb-12 leading-tight text-primary">
                        Cookie Policy
                    </h1>

                    <div className="font-sans text-lg md:text-xl leading-relaxed opacity-90 space-y-8">
                        <p className="font-bold">
                            Ai sensi dell'art. 122 del D.lgs. 196/2003 e dell'art. 5, par. 3, della Direttiva 2002/58/CE (ePrivacy)<br />
                            Ultimo aggiornamento: 18 febbraio 2026
                        </p>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">1. Cosa sono i cookie</h2>
                            <p>
                                I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi al sito alla visita successiva.
                            </p>
                            <p className="mt-2">
                                I cookie possono essere utilizzati per diversi scopi: consentire la navigazione efficiente tra le pagine, ricordare le preferenze dell'utente e, in generale, migliorare l'esperienza di navigazione. Possono inoltre essere utilizzati per raccogliere informazioni statistiche aggregate sull'utilizzo del sito.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">2. Tipologie di cookie utilizzati</h2>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">2.1 Cookie tecnici (necessari)</h3>
                            <p>
                                Sono cookie strettamente necessari al funzionamento del sito. Rientrano in questa categoria i cookie impostati dall'infrastruttura di hosting (Vercel) e dalla CDN (Fastly), necessari per la distribuzione dei contenuti e la gestione della sessione di navigazione.
                            </p>
                            <p className="mt-2">
                                Questi cookie non richiedono il consenso preventivo dell'utente ai sensi dell'art. 122, comma 1, del D.lgs. 196/2003, in quanto indispensabili per l'erogazione del servizio.
                            </p>
                            <p className="mt-2">
                                Il presente sito utilizza inoltre il <strong>localStorage</strong> del browser per memorizzare le preferenze di consenso dell'utente (<code className="bg-primary/10 px-1.5 py-0.5 rounded text-base">cookie_consent</code>). Questo dato è conservato esclusivamente in locale sul dispositivo dell'utente e non viene trasmesso ad alcun server.
                            </p>

                            <h3 className="font-serif text-xl md:text-2xl mb-3 mt-6">2.2 Cookie statistici (analytics)</h3>
                            <p>
                                Il sito utilizza <strong>Vercel Analytics</strong>, un servizio di analisi statistica fornito da Vercel Inc. (USA), che raccoglie dati in forma aggregata e anonimizzata sulle pagine visitate, il dispositivo, il browser e il paese di provenienza dell'utente.
                            </p>
                            <p className="mt-2">
                                I cookie di Vercel Analytics vengono installati <strong>esclusivamente previo consenso esplicito</strong> dell'utente, tramite il banner cookie presente sul sito. In assenza di consenso, nessun cookie statistico viene installato e nessun dato viene trasmesso a Vercel Analytics.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">3. Elenco dei cookie</h2>
                            <div className="overflow-x-auto -mx-6">
                                <table className="min-w-full text-left text-base border border-primary/10 rounded-xl overflow-hidden mx-6" style={{ width: 'calc(100% - 3rem)' }}>
                                    <thead>
                                        <tr className="bg-primary/5">
                                            <th className="px-4 py-3 font-medium text-sm uppercase tracking-wider">Nome</th>
                                            <th className="px-4 py-3 font-medium text-sm uppercase tracking-wider">Fornitore</th>
                                            <th className="px-4 py-3 font-medium text-sm uppercase tracking-wider">Finalità</th>
                                            <th className="px-4 py-3 font-medium text-sm uppercase tracking-wider">Durata</th>
                                            <th className="px-4 py-3 font-medium text-sm uppercase tracking-wider">Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-primary/10">
                                            <td className="px-4 py-3"><code className="bg-primary/5 px-1.5 py-0.5 rounded text-sm">_vercel_insights</code></td>
                                            <td className="px-4 py-3 text-sm">Vercel Inc.</td>
                                            <td className="px-4 py-3 text-sm">Statistiche di navigazione anonime</td>
                                            <td className="px-4 py-3 text-sm">12 mesi</td>
                                            <td className="px-4 py-3 text-sm">Statistico</td>
                                        </tr>
                                        <tr className="border-t border-primary/10 bg-primary/[0.02]">
                                            <td className="px-4 py-3"><code className="bg-primary/5 px-1.5 py-0.5 rounded text-sm">cookie_consent</code></td>
                                            <td className="px-4 py-3 text-sm">Questo sito (localStorage)</td>
                                            <td className="px-4 py-3 text-sm">Salvataggio delle preferenze cookie dell'utente</td>
                                            <td className="px-4 py-3 text-sm">Persistente</td>
                                            <td className="px-4 py-3 text-sm">Tecnico</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">4. Come modificare le preferenze</h2>
                            <p>
                                L'utente può modificare le proprie preferenze in qualsiasi momento cliccando sul pulsante <strong>"Preferenze Cookie"</strong> presente nel footer di ogni pagina del sito. Verrà visualizzato nuovamente il banner di consenso, attraverso il quale sarà possibile aggiornare le proprie scelte.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">5. Come disattivare i cookie dal browser</h2>
                            <p>
                                Oltre alla gestione tramite il banner sul sito, è possibile disattivare i cookie direttamente dalle impostazioni del browser. Ogni browser offre strumenti per gestire le preferenze relative ai cookie:
                            </p>
                            <ul className="list-disc pl-5 mt-3 space-y-2">
                                <li>
                                    <strong>Google Chrome</strong>: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti
                                </li>
                                <li>
                                    <strong>Mozilla Firefox</strong>: Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web
                                </li>
                                <li>
                                    <strong>Safari</strong>: Preferenze → Privacy → Gestione dati siti web
                                </li>
                                <li>
                                    <strong>Microsoft Edge</strong>: Impostazioni → Cookie e autorizzazioni siti → Gestisci e cancella cookie
                                </li>
                            </ul>
                            <p className="mt-3">
                                Si ricorda che la disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">6. Riferimenti normativi</h2>
                            <p>
                                La presente Cookie Policy è redatta in conformità a:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Regolamento (UE) 2016/679 (GDPR)</li>
                                <li>D.lgs. 30 giugno 2003, n. 196 (Codice Privacy), come modificato dal D.lgs. 101/2018</li>
                                <li>Direttiva 2002/58/CE (Direttiva ePrivacy)</li>
                                <li>Linee guida del Garante per la protezione dei dati personali in materia di cookie e altri strumenti di tracciamento (10 giugno 2021)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif text-2xl md:text-3xl mb-4">7. Titolare del trattamento</h2>
                            <p>
                                Per qualsiasi informazione relativa all'utilizzo dei cookie su questo sito, è possibile contattare il Titolare del trattamento:<br />
                                <strong>Rappresentanti d'Istituto – Thomas Addamo</strong><br />
                                Email: <a href="mailto:info@rappresentantimaxwell.it" className="underline">info@rappresentantimaxwell.it</a>
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

export default CookiePolicy;
