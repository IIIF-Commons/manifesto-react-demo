var React = require('react');

var Layout = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="/css/style.css" />
                <script src="/lib/es5-shim/es5-shim.js"></script>
                <script src="/lib/manifesto/dist/client/manifesto.js"></script>
                <script src="/lib/jquery/dist/jquery.js"></script>
                <script src="/js/scripts.js"></script>
                <script dangerouslySetInnerHTML={{__html:`
                    // This is making use of ES6 template strings, which allow for
                    // multiline strings. We specified "{jsx: {harmony: true}}" when
                    // creating the engine in app.js to get this feature.
                    //console.log("hello world");
                  `}}/>
            </head>
            <body>
                {this.props.children}
            </body>
            </html>
        );
    }
});

module.exports = Layout;
