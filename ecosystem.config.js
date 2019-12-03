module.exports = {
  apps: [
    {
      name: "hi-mommy-portfolio",
      script: "./node_modules/nuxt/bin/nuxt",
      env: {
        HOST: "0.0.0.0",
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ]
};
