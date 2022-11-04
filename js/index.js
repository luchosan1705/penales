(function() {
    window.google || (window.google = {});
    google.doodle || (google.doodle = {});
    google.doodle.url = "/search?q=London+2012+soccer";
    google.doodle.alt = "Goooaaalllll!";
    if (!google.doodle || !google.doodle.loaded) {
        var a = ["google", "doodle", "loaded"],
            b = this;
        !(a[0] in b) && b.execScript && b.execScript("var " + a[0]);
        for (var c; a.length && (c = a.shift());) !a.length ? b[c] = !0 : b = b[c] ? b[c] : b[c] = {};
        var d = document.createElement("script");
        d.src = "js/game.js";
        d.async = !0;
        document.body.appendChild(d)
    };
})();