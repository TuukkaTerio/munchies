const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://work-test-web-2024-eze6j4scpq-lz.a.run.app',
            changeOrigin: true,
        })
    );
};
