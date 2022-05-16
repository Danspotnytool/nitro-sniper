require('dotenv').config();

module.exports = {
    prefix: '$', // Prefix for testing commands

    token: `${process.env.TOKEN}`, // Your token
    webhookURL: process.env.WEBHOOK_URL, // Your webhook URL

    timezone: `${process.env.TIMEZONE || 'America/New_York'}`, // Your preferred timezone

    setStatus: 'idle',  // 'online' | 'idle' | 'dnd' | 'invisible' | null
    setCustomStatus: true, // Set user's custom status
    customStatus: { // Custom status
        unicodeEmoji: '😴',
        text: 'Sleeping'
    },

    altTokens: [ // Your alt tokens
        `${process.env.ALT_TOKEN_1}`, // Add your alt tokens here
    ],
    altStatus: 'invisible', // 'online' | 'idle' | 'dnd' | 'invisible' | null

    recievedNitros: [] // List of nitro codes that have been recieved every session (To prevent duplicate nitro codes) (Do not change this if you do not know what you are doing)
};