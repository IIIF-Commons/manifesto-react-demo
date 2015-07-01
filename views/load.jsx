var React = require('react');
var Layout = require('./layout');

var Load = React.createClass({
    propTypes: {
        title: React.PropTypes.string
    },

    render: function() {
        return (
            <Layout title={this.props.title}>
                <p>{this.props.title}</p>
            </Layout>
        );
    }
});

module.exports = Load;
