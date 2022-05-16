import uniqid from "uniqid";
import PersonalPension from "assets/images/personal_pension.png";
import SaveForRetirement from "assets/images/save_for_retirement.png";
import Pension101 from "assets/images/pension_101.png";

const lessons = [
  {
    id: uniqid("id-"),
    title: "Pension 101",
    img: PersonalPension,
    text: "Pensions can be confusing. This fundamental course will  help you learn the basics and cut through the jargon.",
  },
  {
    id: uniqid("id-"),
    title: "Preventing online fraud",
    img: SaveForRetirement,
    text: "Online fraud comes in many forms. This lesson will help you identify and avoid some of the most common scams used by fraudsters in 2022.",
  },
  {
    id: uniqid("id-"),
    title: "Save for retirement",
    img: Pension101,
    text: "It is crucial to save money for retirement but, how much should I save for retirement?",
  },
];

export default lessons;
