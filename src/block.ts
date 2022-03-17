import { StringUtil } from './stringUtil';

export class Block {
    public hash: string;
    public readonly previousHash: string;
    private readonly data: string;
    private nonce: number;
    private timeStamp: number;

    constructor(data: string, previousHash: string) {
        this.data = data;
        this.previousHash = previousHash;
        this.timeStamp = Date.now();
        this.nonce = 0;

        this.hash = this.calculateHash();
    }

    calculateHash = () => {
        return StringUtil.applySha256(
            this.previousHash +
            this.timeStamp.toString() +
            this.nonce.toString() + 
            this.data
        )
    }

    mineBlock = (difficulty: number) => {
		const target = new Array(difficulty + 1).join("0"); //Create a string with difficulty * "0" 
		while(this.hash.substring(0, difficulty) !== target) {
			this.nonce ++;
			this.hash = this.calculateHash();
		}
		console.log("Block Mined!!! : " + this.hash);
	}

}