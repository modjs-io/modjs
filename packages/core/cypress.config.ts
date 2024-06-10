import { defineConfig } from 'cypress'

export default defineConfig({
    viewportWidth: 769, //CAUTION and TODO: A lot of tests that depends on viewport size will fail if this is changed. Include this in each test cases/suite instead
    viewportHeight: 600,
    component: {
        specPattern: 'src/**/*.spec.{ts,tsx}',
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
    },
})
