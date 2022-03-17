import { Block } from './block';

const difficulty = 5;

const genesisBlock = new Block("Hi im the first block", "0");
console.log("Trying to Mine block 1... ");
genesisBlock.mineBlock(difficulty);

const secondBlock = new Block("Yo im the second block", genesisBlock.hash);
console.log("Trying to Mine block 2... ");
secondBlock.mineBlock(difficulty);

const thirdBlock = new Block("Hey im the third block", secondBlock.hash);
console.log("Trying to Mine block 3... ");
thirdBlock.mineBlock(difficulty);

const blockchain = [genesisBlock, secondBlock, thirdBlock];
console.log(isChainValid(blockchain));


function isChainValid(blockchain: Array<Block>): boolean {
	let currentBlock: Block; 
	let previousBlock: Block;
	
	//loop through blockchain to check hashes:
	for(let i=1; i < blockchain.length; i++) {
		currentBlock = blockchain[i];
		previousBlock = blockchain[i-1];
		//compare registered hash and calculated hash:
		if(currentBlock.hash !== currentBlock.calculateHash()){
			console.error("Current Hashes not equal");			
			return false;
		}
		//compare previous hash and registered previous hash
		if(previousBlock.hash !== currentBlock.previousHash ) {
			console.error("Previous Hashes not equal");
			return false;
		}
	}
	return true;
}