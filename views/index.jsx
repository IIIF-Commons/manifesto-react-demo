var React = require('react');
var Layout = require('./layout');

var Index = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        return (
            <Layout title={this.props.title}>
                <h1>{this.props.title}</h1>
                <div>
                    <input id="manifest" type="text" placeholder="Manifest Uri" value="http://localhost:3000/data/manifest.json" />
                    <button id="load-client-btn">Load (Client)</button>
                    <button id="load-server-btn">Load (Server)</button>
                    <br/><br/>
                </div>

                <div id="manifest-txt">

                </div>
            </Layout>
        );
    }
});

module.exports = Index;
