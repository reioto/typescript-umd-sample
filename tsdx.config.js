module.exports = {
  rollup(config, options) {
    if (options.env === 'production') {
      config.output.file = config.output.file.replace('.production.', '.');
    }
    return config;
  }
}
