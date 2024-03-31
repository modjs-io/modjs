module.exports = {
    env: {
      esm: {
        plugins: ["babel-plugin-styled-components"],
        presets: [
          ['@babel/preset-env', {modules: false}], 
          ['@babel/preset-typescript'], 
          ['@babel/preset-react', {runtime: "automatic"}]
        ],
      },
  
      cjs: {
        plugins: ["babel-plugin-styled-components"],
        presets: [
          ['@babel/preset-env', {modules: 'commonjs'}],
          ['@babel/preset-typescript'],
          ['@babel/preset-react', {runtime: "automatic"}]
        ],
      }
    }
  }