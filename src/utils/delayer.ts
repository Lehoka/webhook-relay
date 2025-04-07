export class Delayer {

    static async randomDelay(): Promise<void> {
        const delay = Math.floor(Math.random() * 30000)
        return new Promise(resolve => setTimeout(resolve, delay))
    }

}