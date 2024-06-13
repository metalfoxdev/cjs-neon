(function (ext) {

    ext._shutdown = function() {};
    ext._getStatus = function() { return {status: 2, msg: 'Ready'}; };


    ext.ping = function(host, callback) {
        var pinger = new Pinger();
        pinger.ping(host, function(status) {
            callback(status);
        });
    };

    function Pinger() {
        this.inUse = false;
        this.callback = null;
        this.ip = null;
        this.img = null;
        this.timer = null;
    }

    Pinger.prototype.ping = function(ip, callback) {
        if (!this.inUse) {
            this.inUse = true;
            this.callback = callback;
            this.ip = ip;

            var _that = this;

            this.img = new Image();

            this.img.onload = function() {_that.good();};
            this.img.onerror = function() {_that.good();};

            this.start = new Date().getTime();
            this.img.src = "https://" + ip;
            this.timer = setTimeout(function() { _that.bad();}, 1500);
        }
    };

    Pinger.prototype.good = function() {
        if (this.callback) {
            clearTimeout(this.timer);
            this.callback('site down');
            this.reset();
        }
    };

    Pinger.prototype.bad = function() {
        if (this.callback) {
            clearTimeout(this.timer);
            this.callback('site up');
            this.reset();
        }
    };

    Pinger.prototype.reset = function() {
        this.inUse = false;
        this.callback = null;
        this.ip = null;
        this.img = null;
        this.timer = null;
    };
    var descriptor = {
        blocks: [
            ['R', 'ping %s', 'ping', 'example.com']
        ]
    };

    ScratchExtensions.register('is site up Extension', descriptor, ext);
})({});
