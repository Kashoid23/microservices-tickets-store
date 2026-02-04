export default {
  turbopack: (config) => {
    return {
      ...config,
      watchOptions: {
        ...config.watchOptions,
        pollIntervalMs: 300
      }
    };
  },
  allowedDevOrigins: ['tickets.store']
};
