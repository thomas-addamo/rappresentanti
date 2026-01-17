
export interface EventItem {
  id: number;
  title: string;
  date: string; // ISO format YYYY-MM-DDTHH:mm:ss for logic
  endDate?: string; // Optional end date (ISO)
  displayDate: string; // Human readable
  location: string;
  description: string;
  image?: string; // Optional image URL
}

export const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Assemblea d'Istituto - Gennaio 2026",
    date: "2026-01-23T10:00:00",
    endDate: "2026-01-23T11:50:00",
    displayDate: "23 Gennaio 2026",
    location: "Sala conferenze 1",
    description: "La prima assemblea del 2026. Discuteremo dei nuovi progetti e delle iniziative per il secondo quadrimestre. Sono invitati a partecipare tutti i rappresentanti di classe!",
  },
];
