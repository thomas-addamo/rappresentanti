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
];