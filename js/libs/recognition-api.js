var RecognitionAPI = /** @class */ (function () {
    /**
     * Constructor
     * @param language Default language to recognize
     */
    function RecognitionAPI(language) {
        if (language === void 0) { language = 'en-GB'; }
        this._api = new webkitSpeechRecognition();
        this._api.lang = language;
    }
    /**
     * Listen for one utterence of the user
     */
    RecognitionAPI.prototype.listenOneTime = function () {
        var _this = this;
        this._api.continuous = false;
        return new Promise(function (resolve, reject) {
            var result = "";
            _this._api.start();
            _this._api.onresult = function (event) {
                if (event.results.length && event.results[0].length)
                    result = event.results[0][0].transcript;
            };
            _this._api.onend = function () {
                resolve(result);
            };
        });
    };
    /**
     * Listen continuously for the user and send results regularly
     * @param onResult Callback regularly called to send results
     */
    RecognitionAPI.prototype.listenContinuously = function (onResult) {
        if (onResult === void 0) { onResult = null; }
        if (onResult) {
            this._api.continuous = true;
            this._api.start();
            this._api.onresult = function (event) {
                if (event.results.length && event.results[event.results.length - 1].length) {
                    onResult(event.results[event.results.length - 1][0].transcript.trim());
                }
            };
        }
    };
    return RecognitionAPI;
}());
//# sourceMappingURL=recognition-api.js.map