import { NewsItem } from '../types';

export const newsData: NewsItem[] = [
  {
    id: 2,
    date: "7 Gen 2026",
    category: "Merchandising",
    title: "Il Merch dell'Istituto è finalmente Disponibile!",
    excerpt: "Siamo entusiasti di annunciare il lancio ufficiale del merchandising scolastico in collaborazione con Unihoodies.",
    author: "Rappresentanti",
    featured: true,
    content: `
      <p>Cari studenti,</p>
      <p>L'attesa è finita! Siamo orgogliosi di presentarvi la <b>Nuova Collezione 2025</b> del merchandising d'Istituto.</p>
      <p>Grazie alla collaborazione esclusiva con <a href="https://www.unihoodies.it" target="_blank" class="underline hover:text-primary">Unihoodies</a>, abbiamo creato una linea di abbigliamento unica, pensata per rappresentare al meglio la nostra scuola.</p>
      <p>Potete scoprire tutti i prodotti e acquistare direttamente tramite il link presente nella home page o cliccando sul pulsante <b>"Merch"</b> nella barra di navigazione.</p>
      <p>Non perdete l'occasione di indossare lo stile del vostro istituto!</p>
      <p>A presto,</p>
      <p>I vostri Rappresentanti.</p>
    `
  },
  {
    id: 1,
    date: "4 Dic 2025",
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