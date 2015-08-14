var manifesto = require('manifesto');

exports.load = function(req, res){

    var url = decodeURIComponent(req.params.url);

    manifesto.loadManifest(url).then(function(manifest) {

        manifest = manifesto.create(manifest);

        var tree = manifest.getTree();

        res.render('load', {
            title: manifest.getLabel()
        });

    });
};