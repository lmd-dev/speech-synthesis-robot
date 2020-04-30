class SpeechAPI
{
    /**
     * SpeechSynthesis API
     */
    private _api: SpeechSynthesis;

    /**
     * Array of available voices
     */
    private _voices: Array<SpeechSynthesisVoice>;
    public get voices(): Array<SpeechSynthesisVoice> { return this._voices; };

    /**
     * Selected voice to speak
     */
    private _selectedVoice: SpeechSynthesisVoice;
    public get selectedVoice(): SpeechSynthesisVoice { return this._selectedVoice; };
    public set selectedVoice(value: SpeechSynthesisVoice) { this._selectedVoice = value; };

    /**
     * Constructor
     */
    constructor()
    {
        this._api = null;
        this._voices = new Array<SpeechSynthesisVoice>();

    }

    /**
     * Initializes the API and loads available voices
     */
    initialize(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            this._api = window.speechSynthesis;
            this._api.onvoiceschanged = () =>
            {
                this._api.onvoiceschanged = null;
                
                this._voices = this._api.getVoices();

                if (this._voices.length > 0)
                {
                    this._selectedVoice = this._voices[0];
                    resolve();
                }
                else
                {
                    reject("Speech API - No voice available");
                }
            }
        });
    }

    /**
     * Select the language of the speech synthesis
     * @param language ex: fr-FR
     */
    selectLanguage(language: string)
    {
        for (let voice of this._voices)
        {
            if (voice.lang == language)
            {
                this._selectedVoice = voice;
                return;
            }
        }

        throw "SpeechAPI Error : unknown language " + language;
    }

    /**
     * Synthesis some speech
     * @param text Text to speak
     */
    saySomething(text: string)
    {
        if (this._api)
        {
            let utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = this._selectedVoice;
            utterance.rate = 1.5;

            this._api.speak(utterance);
        }
    }
}