class Robot
{
    /**
     * X coordinate of the robot
     */
    private _x: number;
    public get x(): number { return this._x; };

    /**
     * Y coodinate of the robot
     */
    private _y: number;
    public get y(): number { return this._y; };

    /**
     * Constructor
     */
    constructor()
    {
        this._x = 0;
        this._y = 0;
    }

    /**
     * Move the robot to the right
     */
    moveRight()
    {
        this._x += 50;        
    }

    /**
     * Move the robot to the left
     */
    moveLeft()
    {
        this._x -= 50;
    }

    /**
     * Move the robot to the top
     */
    moveTop()
    {
        this._y -= 50;
    }
    
    /**
     * Move the robot to the bottom
     */
    moveBottom()
    {
        this._y += 50;
    }
}