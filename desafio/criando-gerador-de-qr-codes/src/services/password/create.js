import chalk from 'chalk';
import handle from './handle.js';

async function criarPassword() {
    const password = await handle();
    console.log(chalk.green("Password: ") + password);
}

export default criarPassword;