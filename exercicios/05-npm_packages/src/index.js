import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.red.bgYellow.italic("Olá Mundo!"));
console.log(logSymbols.success, chalk.green.italic("Servidor iniciado com sucesso!"));
console.log(logSymbols.error, chalk.red.bgCyan("Servidor com problema!"));