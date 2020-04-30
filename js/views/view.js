var View = /** @class */ (function () {
    /**
     * Constructor
     * @param controller Controller Responsible for the webapp
     */
    function View(controller) {
        this._controller = controller;
        this._controller.addObserver(this);
        this.initializeEvents();
    }
    /**
     * Initializes main events of the view
     */
    View.prototype.initializeEvents = function () {
        var _this = this;
        document.getElementsByTagName('button')[0].addEventListener('click', function () { _this._controller.start(); });
    };
    /**
     * Notification function of the view
     */
    View.prototype.notify = function () {
        if (this._controller.robot) {
            this.hideStartScreen();
            this.displayRobot();
        }
        else {
            this.displayStartScreen();
        }
    };
    /**
     * Hides the start screen
     */
    View.prototype.hideStartScreen = function () {
        document.getElementsByTagName('start-screen')[0].style.display = 'none';
    };
    /**
     * Shows the start screen
     */
    View.prototype.displayStartScreen = function () {
        document.getElementsByTagName('start-screen')[0].style.display = 'flex';
    };
    /**
     * Displays the robot to its right position
     */
    View.prototype.displayRobot = function () {
        var robot = document.getElementsByTagName('robot')[0];
        robot.style.left = this._controller.robot.x + 'px';
        robot.style.top = this._controller.robot.y + 'px';
    };
    return View;
}());
//# sourceMappingURL=view.js.map