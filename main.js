#!/usr/bin/env node

const readline = require('readline');
const clipProgress = require('cli-progress');
const chalk = require('chalk');
const notifier = require('node-notifier');

let timer = null; // Global reference for the timer

// Create readline interface for CLI user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.on('SIGINT', () => {
    if (timer) clearInterval(timer);
    console.log('\n⛔️ Pomodoro cancelled.\n');
    rl.close();
    process.exit();
});

function askForMinutes() {
    console.log(chalk.red.bold('\n===== POMODORO TIMER =====\n'));
    rl.question('⏳ How many minutes would you like to focus? ', (answer) => {
        const minutes = parseFloat(answer);
        // Validate input: must be a positive number
        if (isNaN(minutes) || minutes <= 0) {
            console.log('❌ Please enter a valid number greater than 0.\n');
            askForMinutes();
        } else {
            console.log('🌱 Preparing to start...\n');
            setTimeout(() => {
                pomodoro(minutes);
            }, 3000);
        }
    });
}

// Main Pomodoro timer function
function pomodoro(minutes = 25) {
    const totalSeconds = minutes * 60;
    let elapsed = 0;

    // Initialize CLI progress bar
    const bar = new clipProgress.SingleBar({
        format: `${chalk.green('Progress')} [{bar}] {percentage}% | {value}/{total}s`,
    }, clipProgress.Presets.shades_classic);

    bar.start(totalSeconds, 0);

    // Timer interval runs every second
    const timer = setInterval(() => {
        elapsed++;
        bar.update(elapsed);

        const remaining = totalSeconds - elapsed;
        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;
        // Overwrite the same line with remaining time
        process.stdout.write(`\r📝 ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} `);

        if (elapsed >= totalSeconds) {
            clearInterval(timer);
            bar.stop();
            console.log('\n🍅 Pomodoro complete!');
            // Send desktop notification
            notifier.notify({
                title: 'Pomodoro Done',
                message: 'Take a break! 🎉',
                sound: true
            });
            rl.close(); // Close readline interface to end input stream
        }
    }, 1000);
}

// Start the user input prompt loop
askForMinutes();