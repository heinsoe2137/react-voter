module.exports = {
    apps: [
        {
            name: 'vote-api-prod',
            script: 'serve -s build -p 3001',
            instances: 3,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
