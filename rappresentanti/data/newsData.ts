import { NewsItem } from '../types';

export const newsData: NewsItem[] = [
  {
    id: 1,
    date: "3 Dic 2025",
    category: "Comunicazione",
    title: "Apertura nuovo sito web",
    excerpt: "Si comunica l'apertura del nuovo sito web dei Rappresentanti d'Istituto.",
    author: "Tutto il team",
    featured: true,
    content: `
      <p>Cari studenti,</p>
      <p>siamo lieti di comunicarvi l'apertura del nostro nuovo sito web. All'interno del portale troverete una sezione <b>News</b> che verrà aggiornata costantemente con tutte le informazioni, le iniziative e gli avvisi importanti riguardanti la vita scolastica.</p>
      <p>Inoltre, è già disponibile la <b>Roadmap 2025/26</b> che descrive in modo chiaro gli obiettivi e i progetti che ci siamo prefissati per il nuovo anno scolastico.</p>
      <p>Vi invitiamo a visitare il sito e a restare sempre aggiornati sulle attività e le opportunità offerte.</p>
      <p>Un saluto,</p>
      <p>I vostri Rappresentanti.</p>
    `
  },
];