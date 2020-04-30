class Controller extends Subject
{
    /**
     * Speech Synthesis API
     */
    private _speechAPI: SpeechAPI;

    /**
     * Speech Recognition API
     */
    private _recognitionAPI: RecognitionAPI;

    /**
     * Robot controlled by the controller
     */
    private _robot: Robot;
    public get robot(): Robot { return this._robot; };

    /**
     * Constructor
     */
    constructor()
    {
        super();

        this._speechAPI = new SpeechAPI();      
        this._recognitionAPI = new RecognitionAPI('fr-FR');
        this._robot = null;
    }

    /**
     * Initialises API and start the moving of the robot 
     */
    start()
    {
        this._speechAPI.initialize().then(() =>
        {
            this._robot = new Robot();
            this.notify();
            this._speechAPI.saySomething('Bonjour les gens du live sur Twitch !');
            this.startMoving();
        }).catch((error) =>
        {
            console.error(error);
        });
    }

    /**
     * Starts moving the robot
     */
    startMoving()
    {
        this._recognitionAPI.listenContinuously((direction: string) =>
        {
            console.log(direction);
            this.move(direction);
        });        
    }

    /**
     * Moves the robot inthe given direction
     * @param direction
     */
    move(direction: string)
    {
        switch (direction)
        {
            case 'droite': this.moveRight(); break;
            case 'gauche': this.moveLeft(); break;
            case 'descends': this.moveBottom(); break;
            case 'monte': this.moveTop(); break;
            default: this._speechAPI.saySomething("Je n'ai pas compris !"); break;
        }

        this.notify();
    }

    /**
     * Moves the robot to the left
     */
    moveLeft()
    {
        this._robot.moveLeft();
    }

    /**
     * Moves the robot to the right
     */
    moveRight()
    {
        this._robot.moveRight();
    }

    /**
     * Moves the robot to the top
     */
    moveTop()
    {
        this._robot.moveTop();
    }

    /**
     * Moves the robot to the bottom
     */
    moveBottom()
    {
        this._robot.moveBottom();
    }
}