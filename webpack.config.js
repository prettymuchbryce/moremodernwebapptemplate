const entries = [
    './node_modules/bootstrap/js/affix.js',
    './node_modules/bootstrap/js/alert.js',
    './node_modules/bootstrap/js/button.js',
    './node_modules/bootstrap/js/carousel.js',
    './node_modules/bootstrap/js/collapse.js',
    './node_modules/bootstrap/js/dropdown.js',
    './node_modules/bootstrap/js/modal.js',
    './node_modules/bootstrap/js/scrollspy.js',
    './node_modules/bootstrap/js/tab.js',
    './node_modules/bootstrap/js/tooltip.js',
    './node_modules/bootstrap/js/popover.js',
    './node_modules/bootstrap/js/transition.js',
    './client/src/app.js'
]

module.exports = {
    entry: entries,
    output: {
        path: './static',
        filename: 'js/all.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', query: {stage: 0} },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    }
};
