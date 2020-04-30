var Robot = /** @class */ (function () {
    /**
     * Constructor
     */
    function Robot() {
        this._x = 0;
        this._y = 0;
    }
    Object.defineProperty(Robot.prototype, "x", {
        get: function () { return this._x; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Robot.prototype, "y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Move the robot to the right
     */
    Robot.prototype.moveRight = function () {
        this._x += 50;
    };
    /**
     * Move the robot to the left
     */
    Robot.prototype.moveLeft = function () {
        this._x -= 50;
    };
    /**
     * Move the robot to the top
     */
    Robot.prototype.moveTop = function () {
        this._y -= 50;
    };
    /**
     * Move the robot to the bottom
     */
    Robot.prototype.moveBottom = function () {
        this._y += 50;
    };
    return Robot;
}());
//# sourceMappingURL=robot.js.map