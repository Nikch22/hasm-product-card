const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),  // Procesa los archivos CSS con CSS Modules
      images({ include: ['**/*.png', '**/*.jpg'] }),  // Maneja imágenes (png, jpg)
      replace({
        'process.env.NODE_ENV': JSON.stringify(options.env || 'development'), // Reemplaza variables de entorno
        preventAssignment: true,  // Evita la reasignación
      }),
      ...config.plugins,  // Mantén otros plugins que ya están en la configuración
    ];
    return config;
  },
};
