import uniqid from "uniqid";
import YourDocuments from "assets/images/your_documents.png";
import AnnualBenefitStatements from "assets/images/annual_benefit_statements.png";
import YourPayslips from "assets/images/your_payslips.png";

const tools = [
  {
    id: uniqid("id-"),
    title: "Documents and uploads",
    img: YourDocuments,
    text: "An archive for every document you have uploaded or posted to your pension fund.",
  },
  {
    id: uniqid("id-"),
    title: "Annual Benefit Statements",
    img: AnnualBenefitStatements,
    text: "View and compare all of your previous Annual Benefit Statements in one location.",
  },
  {
    id: uniqid("id-"),
    title: "Pension payslips",
    img: YourPayslips,
    text: "Access every pension payslip you have received from your pension fund.",
  },
];

export default tools;
