import { NewsItem } from '../types';

export const newsData: NewsItem[] = [
  {
    id: 1,
    date: "1 Dic 2025",
    category: "Comunicazione",
    title: "Apertura nuovo sito web",
    excerpt: "Si comunica l'apertura del nuovo sito web dei Rappresentanti d'Istituto.",
    author: "Tutto il team",
    featured: true,
    content: `
      <p>Cari studenti,</p>
      <p>È convocata l'assemblea d'istituto per il mese di ottobre. Sarà un momento fondamentale per definire le linee guida di quest'anno scolastico.</p>
      <br/>
      <h3>Ordine del Giorno:</h3>
      <ul>
        <li><strong>Fondi PNRR:</strong> Come verranno spesi i nuovi fondi per la digitalizzazione delle aule.</li>
        <li><strong>Gite Scolastiche:</strong> Proposte per le mete delle classi quinte e triennio.</li>
        <li><strong>Merchandising:</strong> Presentazione dei bozzetti per le nuove felpe.</li>
      </ul>
      <br/>
      <p>Vi aspettiamo numerosi in Aula Magna. Per chi non potrà esserci, sarà disponibile una diretta streaming sul canale Instagram.</p>
    `
  },
  {
    id: 2,
    date: "12 Ott 2024",
    category: "Circolare",
    title: "Convocazione Assemblea Ottobre",
    excerpt: "L'assemblea si terrà in Aula Magna. Discuteremo dei fondi PNRR e delle gite scolastiche.",
    author: "Giulio Castellani",
    featured: true,
    content: `
      <p>Cari studenti,</p>
      <p>È convocata l'assemblea d'istituto per il mese di ottobre. Sarà un momento fondamentale per definire le linee guida di quest'anno scolastico.</p>
      <br/>
      <h3>Ordine del Giorno:</h3>
      <ul>
        <li><strong>Fondi PNRR:</strong> Come verranno spesi i nuovi fondi per la digitalizzazione delle aule.</li>
        <li><strong>Gite Scolastiche:</strong> Proposte per le mete delle classi quinte e triennio.</li>
        <li><strong>Merchandising:</strong> Presentazione dei bozzetti per le nuove felpe.</li>
      </ul>
      <br/>
      <p>Vi aspettiamo numerosi in Aula Magna. Per chi non potrà esserci, sarà disponibile una diretta streaming sul canale Instagram.</p>
    `
  },
  {
    id: 3,
    date: "05 Ott 2024",
    category: "Evento",
    title: "Torneo di Scacchi: Iscrizioni Aperte",
    excerpt: "Vuoi sfidare il campione in carica della 5^C? Iscriviti entro venerdì.",
    author: "Emma Cirafici",
    featured: true,
    content: `
      <p>Il Re è sotto scacco!</p>
      <p>Tornano i pomeriggi ludici al Maxwell. Si parte con il classico torneo di scacchi autunnale. L'anno scorso la 5^C ha dominato, ma quest'anno ci sono nuove leve pronte a dare battaglia.</p>
      <br/>
      <h3>Dettagli:</h3>
      <p>Il torneo si svolgerà in modalità "Blitz" (5 minuti a testa) durante le pause pranzo della prossima settimana. La finale si terrà in Aula Magna venerdì pomeriggio.</p>
      <p>Iscrizioni aperte tramite il modulo Google in bio sulla pagina Instagram o chiedendo direttamente ai rappresentanti di classe.</p>
    `
  },
  {
    id: 4,
    date: "28 Set 2024",
    category: "Importante",
    title: "Nuovi orari biblioteca",
    excerpt: "La biblioteca resterà aperta fino alle 16:30 tutti i martedì e giovedì.",
    author: "Nicol Polizzi",
    featured: true,
    content: `
      <p>Grande vittoria per noi studenti!</p>
      <p>Dopo mesi di richieste, siamo riusciti ad ottenere l'estensione dell'orario della biblioteca scolastica. Questo permetterà a tutti di avere uno spazio tranquillo per studiare o lavorare ai progetti di gruppo anche nel pomeriggio.</p>
      <br/>
      <p>I nuovi orari entrano in vigore da lunedì prossimo. Ricordate di rispettare il silenzio e di prendervi cura dello spazio comune.</p>
    `
  },
  {
    id: 5,
    date: "15 Set 2024",
    category: "Manutenzione",
    title: "Aggiornamento lavori palestra",
    excerpt: "I lavori di rifacimento del parquet inizieranno a Novembre.",
    author: "Nicol Polizzi",
    featured: false,
    content: `
      <p>Vi informiamo che la Provincia ha finalmente sbloccato i fondi per la manutenzione della palestra grande.</p>
      <p>I lavori riguarderanno principalmente il rifacimento del parquet e la sistemazione degli spogliatoi maschili. Durante il periodo dei lavori, le lezioni di Scienze Motorie si svolgeranno nelle strutture esterne o nella palestra piccola.</p>
    `
  },
  {
    id: 6,
    date: "10 Set 2024",
    category: "Benvenuto",
    title: "Auguri di inizio anno",
    excerpt: "Un messaggio dai vostri rappresentanti per un anno pieno di successi.",
    author: "Tutto il Team",
    featured: false,
    content: `
      <p>Bentornati a scuola!</p>
      <p>Che sia il vostro primo giorno in prima o l'ultimo anno prima della maturità, vi auguriamo un anno ricco di soddisfazioni. Noi siamo qui per voi, per ascoltarvi e per rendere la scuola un posto migliore.</p>
      <p>Non esitate a contattarci per qualsiasi problema.</p>
      <p>- I vostri rappresentanti</p>
    `
  }
];