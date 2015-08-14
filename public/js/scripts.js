$(function() {

    $('#load-client-btn').on('click', function(e) {
        e.preventDefault();
        var url = $('#manifest').val();
        manifesto.loadManifest(url).then(function(manifest){
            manifest = manifesto.create(manifest);
            $('#manifest-txt').append(manifest.getLabel());
        });
    });

    $('#load-server-btn').on('click', function(e) {
        e.preventDefault();
        var manifestUri = $('#manifest').val();
        window.location.href = "/load/" + encodeURIComponent(manifestUri);
    });
});