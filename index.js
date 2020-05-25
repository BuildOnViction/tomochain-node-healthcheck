const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, './.env')
})
const net = require('net')
const Web3 = require("web3")
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC_ENDPOINT))
const localWeb3 = new Web3(new Web3.providers.IpcProvider(process.env.LOCAL_IPC_PATH, net))
const noti_bot = require('noti_bot')
const notifyTelegram = noti_bot.telegram
const notifySlack = noti_bot.slack
const THRESHOLD = parseFloat(process.env.DELAY_THRESHOLD)

const main = async () => {
	let latestBlockNumber = await web3.eth.getBlockNumber()
	let localLatestBlockNumber = await localWeb3.eth.getBlockNumber()
	if (localLatestBlockNumber < latestBlockNumber - THRESHOLD) {
		let coinbase = await localWeb3.eth.getCoinbase()
	        let msg = "This node coinbase = " + coinbase + " is slow. RPCCurrentBlock="+ latestBlockNumber + " YourCurrentBlock="+localLatestBlockNumber 
     		notifyTelegram(msg, process.env.TELEGRAM_TOKEN, process.env.TELEGRAM_CHAT)
        	notifySlack(msg, process.env.SLACK_HOOK_KEY, process.env.SLACK_CHANNEL, process.env.SLACK_BOTNAME, process.env.SLACK_ICON)
		console.log(msg)
	} else {
		console.log("Your node is up to date at block " + localLatestBlockNumber)
	}
	process.exit(0)
}
main()

