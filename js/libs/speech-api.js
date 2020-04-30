var SpeechAPI = /** @class */ (function () {
    /**
     * Constructor
     */
    function SpeechAPI() {
        this._api = null;
        this._voices = new Array();
    }
    Object.defineProperty(SpeechAPI.prototype, "voices", {
        get: function () { return this._voices; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SpeechAPI.prototype, "selectedVoice", {
        get: function () { return this._selectedVoice; },
        set: function (value) { this._selectedVoice = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    /**
     * Initializes the API and loads available voices
     */
    SpeechAPI.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._api = window.speechSynthesis;
            _this._api.onvoiceschanged = function () {
                _this._api.onvoiceschanged = null;
                _this._voices = _this._api.getVoices();
                if (_this._voices.length > 0) {
                    _this._selectedVoice = _this._voices[0];
                    resolve();
                }
                else {
                    reject("Speech API - No voice available");
                }
            };
        });
    };
    /**
     * Select the language of the speech synthesis
     * @param language ex: fr-FR
     */
    SpeechAPI.prototype.selectLanguage = function (language) {
        for (var _i = 0, _a = this._voices; _i < _a.length; _i++) {
            var voice = _a[_i];
            if (voice.lang == language) {
                this._selectedVoice = voice;
                return;
            }
        }
        throw "SpeechAPI Error : unknown language " + language;
    };
    /**
     * Synthesis some speech
     * @param text Text to speak
     */
    SpeechAPI.prototype.saySomething = function (text) {
        if (this._api) {
            var utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = this._selectedVoice;
            utterance.rate = 1.5;
            this._api.speak(utterance);
        }
    };
    return SpeechAPI;
}());
//# sourceMappingURL=speech-api.js.map