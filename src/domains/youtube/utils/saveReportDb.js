import getWeekNumber from "./dates.js";
import reportSemanalSchema from "../schema/YoutubeVideoSchema.js";

export default async function saveReportDb(canal, relatorioPorTermo) {
    const date = new Date();
    const semana = `${date.getFullYear()}-W${getWeekNumber(date)}`;

    const report = {
        semana,
        plataforma: canal,
        relatorioPorTermo,
        }

    const novoReport = new reportSemanalSchema(report);
    await novoReport.save();
    console.log(`Report salvo no banco de dados para a semana ${semana}`);
}