class View implements Observer
{
    /**
     * Controller of the webapp
     */
    private _controller: Controller;

    /**
     * Constructor
     * @param controller Controller Responsible for the webapp
     */
    constructor(controller: Controller)
    {
        this._controller = controller;
        this._controller.addObserver(this);

        this.initializeEvents();
    }

    /**
     * Initializes main events of the view
     */
    initializeEvents()
    {
        document.getElementsByTagName('button')[0].addEventListener('click', () => { this._controller.start(); });
    }

    /**
     * Notification function of the view
     */
    notify()
    {
        if (this._controller.robot)
        {
            this.hideStartScreen();
            this.displayRobot();
        }
        else
        {
            this.displayStartScreen();
        }
    }

    /**
     * Hides the start screen
     */
    hideStartScreen()
    {
        (<HTMLElement>document.getElementsByTagName('start-screen')[0]).style.display = 'none';
    }

    /**
     * Shows the start screen
     */
    displayStartScreen()
    {
        (<HTMLElement>document.getElementsByTagName('start-screen')[0]).style.display = 'flex';
    }

    /**
     * Displays the robot to its right position
     */
    displayRobot()
    {
        let robot = <HTMLElement>document.getElementsByTagName('robot')[0];
        robot.style.left = this._controller.robot.x + 'px';
        robot.style.top = this._controller.robot.y + 'px';
    }
}