export class Delayer {

    static async randomDelay(maxMilliseconds: number): Promise<void> {
        const delay = Math.floor(Math.random() * maxMilliseconds)
        return new Promise(resolve => setTimeout(resolve, delay))
    }

}