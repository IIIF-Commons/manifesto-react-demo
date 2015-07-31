var manifesto = require('manifesto');

exports.load = function(req, res){

    var url = decodeURIComponent(req.params.url);

    manifesto.load(url, function(manifest) {

        manifest = manifesto.create(manifest);

        var tree = manifest.getTree();

        res.render('load', {
            title: manifest.getLabel()
        });

    });
};