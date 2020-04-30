/**
 * Represents the web application
 */
class WebApp
{
    /**
     * Controller responsible for the web app
     */
    private _controller: Controller;

    /**
     * Main view of the webapp
     */
    private _view: View;

    /**
     * Constructor
     */
    constructor()
    {
        this._controller = new Controller();
        this._view = new View(this._controller);
    }
}

/**
 * Start the webapp when all files are loaded
 */
window.onload = () =>
{
    let app = new WebApp();
}