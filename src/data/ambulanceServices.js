// data/ambulanceServices.js

// Importing images
import emergencyImg from "../assets/emergency.jpg";
import transportImg from "../assets/transport.jpg";
import eventImg from "../assets/showcase/s2.jpg";
import icuImg from "../assets/newicu.jpg";
import airImg from "../assets/air.jpg";

export const ambulanceServices = [
  {
    id: 1,
    name: "Emergency Ambulance",
    rating: 4.9,
    rentPerHour: 1500,
    refundableDeposit: 3500,
    tenureOptions: [1, 3, 6],
    description:
      "Rapid response ambulance service for urgent medical emergencies, equipped with essential life-saving gear and trained EMTs.",
    image: emergencyImg,
    path: "/services/emergency",
    moreInfo:
      "Includes stretcher, oxygen supply, first aid, basic monitoring equipment, and trained emergency medical technicians for immediate patient care."
  },
  {
    id: 2,
    name: "Patient Transport",
    rating: 4.7,
    rentPerHour: 1000,
    refundableDeposit: 2500,
    tenureOptions: [1, 3, 6],
    description:
      "Safe and comfortable transfer of stable patients between home, hospitals, or care facilities.",
    image: transportImg,
    path: "/services/transport",
    moreInfo:
      "Equipped with a stretcher, seating for attendants, and basic first aid. Ideal for non-critical patients requiring assistance during travel."
  },
  {
    id: 3,
    name: "Event Medical Support",
    rating: 4.8,
    rentPerHour: 1800,
    refundableDeposit: 4000,
    tenureOptions: [2, 4, 8],
    description:
      "On-site ambulance and medical staff coverage for public events, sports, and gatherings.",
    image: eventImg,
    path: "/services/event-support",
    moreInfo:
      "Includes fully equipped ambulance with medical team, oxygen, defibrillator, and first aid kits to handle emergencies during events."
  },
  {
    id: 4,
    name: "ICU Ambulance",
    rating: 5.0,
    rentPerHour: 3000,
    refundableDeposit: 6000,
    tenureOptions: [1, 3, 6],
    description:
      "Advanced ambulance with ICU-level facilities for critical patient transfers requiring continuous monitoring.",
    image: icuImg,
    path: "/services/icu",
    moreInfo:
      "Equipped with ventilator, ECG monitor, infusion pumps, and trained critical care paramedics for life-support transportation."
  },
  {
    id: 5,
    name: "Air Ambulance",
    rating: 4.9,
    rentPerHour: 15000,
    refundableDeposit: 25000,
    tenureOptions: [1, 3, 6],
    description:
      "Fast, long-distance patient transport via helicopter or aircraft with specialized medical crew.",
    image: airImg,
    path: "/services/air",
    moreInfo:
      "Fully equipped with life-support systems, ICU facilities, and medical staff for emergency air evacuation across regions."
  }
];
