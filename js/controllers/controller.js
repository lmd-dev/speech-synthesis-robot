var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    /**
     * Constructor
     */
    function Controller() {
        var _this = _super.call(this) || this;
        _this._speechAPI = new SpeechAPI();
        _this._recognitionAPI = new RecognitionAPI('fr-FR');
        _this._robot = null;
        return _this;
    }
    Object.defineProperty(Controller.prototype, "robot", {
        get: function () { return this._robot; },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Initialises API and start the moving of the robot
     */
    Controller.prototype.start = function () {
        var _this = this;
        this._speechAPI.initialize().then(function () {
            _this._robot = new Robot();
            _this.notify();
            _this._speechAPI.saySomething('Bonjour les gens du live sur Twitch !');
            _this.startMoving();
        }).catch(function (error) {
            console.error(error);
        });
    };
    /**
     * Starts moving the robot
     */
    Controller.prototype.startMoving = function () {
        var _this = this;
        this._recognitionAPI.listenContinuously(function (direction) {
            console.log(direction);
            _this.move(direction);
        });
    };
    /**
     * Moves the robot inthe given direction
     * @param direction
     */
    Controller.prototype.move = function (direction) {
        switch (direction) {
            case 'droite':
                this.moveRight();
                break;
            case 'gauche':
                this.moveLeft();
                break;
            case 'descends':
                this.moveBottom();
                break;
            case 'monte':
                this.moveTop();
                break;
            default:
                this._speechAPI.saySomething("Je n'ai pas compris !");
                break;
        }
        this.notify();
    };
    /**
     * Moves the robot to the left
     */
    Controller.prototype.moveLeft = function () {
        this._robot.moveLeft();
    };
    /**
     * Moves the robot to the right
     */
    Controller.prototype.moveRight = function () {
        this._robot.moveRight();
    };
    /**
     * Moves the robot to the top
     */
    Controller.prototype.moveTop = function () {
        this._robot.moveTop();
    };
    /**
     * Moves the robot to the bottom
     */
    Controller.prototype.moveBottom = function () {
        this._robot.moveBottom();
    };
    return Controller;
}(Subject));
//# sourceMappingURL=controller.js.map