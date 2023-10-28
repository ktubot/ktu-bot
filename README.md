# KTU Results Bot

Welcome to the KTU Results Bot! This Telegram bot helps students check their exam results easily.

Find the bot [here](https://t.me/ktu_results_bot)

## Features

- **Check Results**: Use the `/result` command to fetch your exam results.
- **Download latest KTU notifications**: Use the `/notifications` command to fetch KTU notifications and download them.
- **Subscribe to latest KTU notifications**: Use the `/subscribe` command to recieve new notifications as they arrive.
- **Help**: Get help using the `/help` command.

## Getting Started

### Running Locally (Without Docker)

1. Install Node.js and npm on your machine.
2. Clone the repository:

   ```bash
   git clone https://github.com/devadathanmb/ktu-results-bot.git
   ```

3. Navigate to the project directory:

   ```bash
   cd ktu-results-bot
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Set up your Telegram bot token:

   - Create a new bot on Telegram using the [BotFather](https://core.telegram.org/bots#botfather).
   - Copy the bot token.
   - Create a `.env` file in the project root and add:

     ```env
     BOT_TOKEN="your-telegram-bot-token"
     ```

     See [env.example]("./env.example") file for example

6. Create a Firebase project and setup a Firestore database in [Firebase console](https://console.firebase.google.com/u/0/)

7. Download the `serviceAccountKey.json` file and put it in the root directory

8. Build the bot:

   ```bash
   npm run build
   ```

9. Start the bot:

   ```bash
   npm run start
   ```

### Running with Docker Compose

1. Install Docker and Docker Compose on your machine.

2. Clone the repository:

   ```bash
   git clone https://github.com/devadathanmb/ktu-results-bot.git
   ```

3. Navigate to the project directory:

   ```bash
   cd ktu-results-bot
   ```

4. Create a `.env` file in the project root and add:

   ```env
   BOT_TOKEN="your-telegram-bot-token"
   ```

5. Run the application using Docker Compose:

   ```bash
   docker-compose up
   ```

The bot should now be running and accessible on Telegram.

## Commands

- `/start`: Start the bot and get a welcome message.
- `/help`: Show a help message with available commands.
- `/result`: Fetch your exam results.
- `/notifications`: Find and download latest KTU notifications.
- `/subscribe`: Subscribe to recieve latest KTU notifications as they arrive.
- `/unsubscribe`: Unsubscribe from recieving KTU notifications.
- `/cancel`: Cancel current process (only works when inside `/notifications` or `/result` wizard)

## Contributing

If you encounter any issues, have feature suggestions, or want to contribute to the project, please feel free to fork and make a PR.

## Bugs and Feedback

If you find any bugs or have feedback, please [open an issue](https://github.com/devadathanmb/ktu-results-bot/issues) on GitHub.

## License

This project is licensed under the GPL 3.0 License - see the [LICENSE.md](./LICENSE.md) file for details.
