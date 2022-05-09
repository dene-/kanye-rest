export class KanyeRest {
    #BASEURL: string = 'https://api.kanye.rest';
    loadedQuote: string = '';

    async getQuote(): Promise<void> {
        let response = await (await fetch(this.#BASEURL)).json();
        this.loadedQuote = response.quote;
    }

    get quote(): string {
        return this.loadedQuote;
    }
}
