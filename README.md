# 🍅 Pomodoro CLI
[![Node.js](https://img.shields.io/badge/node-%3E=14.0.0-green)](https://nodejs.org/)

A simple and colorful command-line Pomodoro timer built with Node.js to help you stay focused and productive.

## ✨ Features
- ⏱ Set your custom focus duration in minutes
- 📊 Real-time CLI progress bar
- 🔔 Desktop notification when the timer ends
- ❌ Cancel the productive session with `Ctrl+C`

## 🛠️ Installation and how to run
1. **Clone the repository:**
   ```bash
   git clone https://github.com/tarsi-bytes/pomodoro-cli-node.git
   cd pomodoro-cli-node
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the timer with:** 
    ```bash 
    node main.js
    ```
4. **Then follow the prompt:**
    ```bash 
    ⏳ How many minutes would you like to focus?
    ```
## 📦 Dependencies
- chalk – terminal string styling
- cli-progress – progress bar for CLI
- node-notifier – desktop notifications
- readline – built-in Node.js module for command line interaction

## 🧠 What is the Pomodoro Technique?
The Pomodoro Technique is a time management method developed by Francesco Cirillo. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.
