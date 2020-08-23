// vue.config.js
module.exports = {

    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: "./server/public/",
    //去掉map
    productionSourceMap: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'NAS私有云'
                return args
            })
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "~@/assets/style/master.scss";'
            }
        }

    },
    pwa: {
        name: 'NAS私有云',
        // themeColor: '#333333',
        // msTileColor: '#333333',
        // appleMobileWebAppCapable: 'yes',
        // appleMobileWebAppStatusBarStyle: '#333333',
        // manifestPath: 'manifest.json',
        // iconPaths: {
        //     favicon32: './img/logo-32.png',
        //     favicon16: './img/logo-16.png',
        //     appleTouchIcon: './img/logo-256.png',
        //     maskIcon: './img/logo-256.png',
        //     msTileImage: './img/logo-256.png'
        // },
        workboxOptions: {
            skipWaiting: true
        }
    },
    devServer: {
        disableHostCheck: true
    }
}