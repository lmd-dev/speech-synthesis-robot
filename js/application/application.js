/**
 * Represents the web application
 */
var WebApp = /** @class */ (function () {
    /**
     * Constructor
     */
    function WebApp() {
        this._controller = new Controller();
        this._view = new View(this._controller);
    }
    return WebApp;
}());
/**
 * Start the webapp when all files are loaded
 */
window.onload = function () {
    var app = new WebApp();
};
//# sourceMappingURL=application.js.map