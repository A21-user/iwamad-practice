
export type CampusEvent = {
    id: string;
    title: string;
    date: string;
    place: string;
    seats: number;
  };
  
  export const events: CampusEvent[] = [
    {
      id: "1",
      title: "Web Development Workshop",
      date: "2026-11-05",
      place: "Room 302",
      seats: 20,
    },
    {
      id: "2",
      title: "React Study Group",
      date: "2026-11-08",
      place: "Library Hall",
      seats: 3,
    },
    {
      id: "3",
      title: "Campus Hackathon",
      date: "2026-11-12",
      place: "Innovation Lab",
      seats: 15,
    },
    {
      id: "4",
      title: "UI/UX Design Meetup",
      date: "2026-11-15",
      place: "Room 204",
      seats: 2,
    },
  ];
  