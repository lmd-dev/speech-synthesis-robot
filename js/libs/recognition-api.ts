class RecognitionAPI
{
    /**
     * SpeechRecognition API
     */
    private _api: SpeechRecognition;

    /**
     * Constructor
     * @param language Default language to recognize
     */
    constructor(language: string = 'en-GB')
    {
        this._api = new webkitSpeechRecognition();
        this._api.lang = language;
    }

    /**
     * Listen for one utterence of the user
     */
    listenOneTime(): Promise<any>
    {
        this._api.continuous = false;

        return new Promise((resolve, reject) =>
        {
            let result = "";

            this._api.start();
            this._api.onresult = (event: SpeechRecognitionEvent) =>
            {
                if(event.results.length && event.results[0].length)
                    result = event.results[0][0].transcript;
            }

            this._api.onend = () =>
            {
                resolve(result);
            }
        });
    }

    /**
     * Listen continuously for the user and send results regularly
     * @param onResult Callback regularly called to send results
     */
    listenContinuously(onResult: any = null)
    {
        if (onResult)
        {
            this._api.continuous = true;
            this._api.start();

            this._api.onresult = (event: SpeechRecognitionEvent) =>
            {
                if (event.results.length && event.results[event.results.length - 1].length)
                {
                    onResult(event.results[event.results.length - 1][0].transcript.trim());
                }
            }
        }
    }
}