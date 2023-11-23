import {
  calendar,
  location,
  rsvp,
  photos,
  church,
  partyS,
  drink,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "schedule",
    title: "Itinerario",
  },
  {
    id: "confirmation",
    title: "RSVP",
  },
];

const information = [
  {
    title: "Fecha",
    description: "27 de Agosto, 2024",
    icon: calendar,
  },
  {
    title: "Ubicación",
    description: "La Quinta Imperial, GAM, CDMX",
    icon: location,
  },
  {
    title: "Confirmación",
    description: "Confirma tu asistencia antes del 27 Julio, 2024",
    icon: rsvp,
  },
];

const schedule = [
  {
    title: "Ceremonia",
    icon: church,
    iconBg: "#383E56",
    hour: "4:00 P.M.",
  },
  {
    title: "Sesión de fotos",
    icon: photos,
    iconBg: "#383E56",
    hour: "5:00 P.M.",
  },
  {
    title: "Hora de cócteles",
    icon: drink,
    iconBg: "#383E56",
    hour: "5:30 P.M.",
  },
  {
    title: "Cena",
    icon: drink,
    iconBg: "#383E56",
    hour: "6:00 P.M.",
  },
  {
    title: "Fiesta",
    icon: partyS,
    iconBg: "#383E56",
    hour: "8:00 P.M.",
  },
];


export { information, schedule };
