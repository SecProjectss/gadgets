// Usage of GoGO Gadgets for attacking targets without prior mutual consent is illegal. 
// It's the end user's responsibility to obey all applicable local, state and federal laws. 
// I'm not responsible for any misuse or damage caused by this script. 
// Only use for educational purposes only. If missue this tool, do not abuse this script. 

// Npm modules
const nmap = require('node-nmap');
const usage = require('command-line-usage');
const chalk = require('chalk');
const readline = require('readline-sync')
const args = require('yargs')

header = `
  ▄████  ▒█████    ▄████  ▒█████       ▄████  ▄▄▄      ▓█████▄   ▄████ ▓█████▄▄▄█████▓  ██████ 
 ██▒ ▀█▒▒██▒  ██▒ ██▒ ▀█▒▒██▒  ██▒    ██▒ ▀█▒▒████▄    ▒██▀ ██▌ ██▒ ▀█▒▓█   ▀▓  ██▒ ▓▒▒██    ▒ 
▒██░▄▄▄░▒██░  ██▒▒██░▄▄▄░▒██░  ██▒   ▒██░▄▄▄░▒██  ▀█▄  ░██   █▌▒██░▄▄▄░▒███  ▒ ▓██░ ▒░░ ▓██▄   
░▓█  ██▓▒██   ██░░▓█  ██▓▒██   ██░   ░▓█  ██▓░██▄▄▄▄██ ░▓█▄   ▌░▓█  ██▓▒▓█  ▄░ ▓██▓ ░   ▒   ██▒
░▒▓███▀▒░ ████▓▒░░▒▓███▀▒░ ████▓▒░   ░▒▓███▀▒ ▓█   ▓██▒░▒████▓ ░▒▓███▀▒░▒████▒ ▒██▒ ░ ▒██████▒▒
 ░▒   ▒ ░ ▒░▒░▒░  ░▒   ▒ ░ ▒░▒░▒░     ░▒   ▒  ▒▒   ▓▒█░ ▒▒▓  ▒  ░▒   ▒ ░░ ▒░ ░ ▒ ░░   ▒ ▒▓▒ ▒ ░
  ░   ░   ░ ▒ ▒░   ░   ░   ░ ▒ ▒░      ░   ░   ▒   ▒▒ ░ ░ ▒  ▒   ░   ░  ░ ░  ░   ░    ░ ░▒  ░ ░
░ ░   ░ ░ ░ ░ ▒  ░ ░   ░ ░ ░ ░ ▒     ░ ░   ░   ░   ▒    ░ ░  ░ ░ ░   ░    ░    ░      ░  ░  ░  
      ░     ░ ░        ░     ░ ░           ░       ░  ░   ░          ░    ░  ░              ░  
                                                        ░                                      
`

// Displays info and usage
const sections = [
	{
		content: chalk.red(header),
		raw: true
	},
	{
		header: chalk.blue.bgWhite.bold(`---I'm not responsible for any misuse or damage caused by this script---`),
		content: `Developed by ${chalk.red('DevDeclan')}`,
	},
	{
		header:'Usage:', 
		content:[
			"$ node gadget.js --help",
			"$ node gadget.js -qscan -t <ip>",
			"$ node gadget.js -t [target] -qscan [Quick Scan]"
		]
	},     
	{
		header:'optional arguments:',
		content:[
			{ name: '--help', summary: ': Displays Help information'},
			{ name: '--banner:', summary: ': Grabs informaton about what the hosts using'},
			{ name: '--qscan:', summary: ': Peforms a fast scan on a target, gaining info about port/services'},
			{ name: '-sS:', summary: ': Perform stealth scan on target'},
			{ name: '-dis:', summary: ': Displays more options'}
		],
	},
	{
		header:'Exmaples:',
		content:[
				{ name: 'node gadjets.js -t 127.0.0.1 -qscan' },
				{ name: 'node gadjets.js -t 127.0.0.1 --banner -sS' }
			]
		}
]

console.log(usage(sections))



// const ipAddress = readline.question(`Enter Ip of target:`)

// Arguments
// if(argv.ip){
// 	const quickscan = new nmap.quickscan(`${argv.ip}`)


// 	// Logs data from scan
// 	quickscan.on('complete', function(data){
// 		console.log(data)
// 		console.log('scan time' + scan.scanTime);
// 	})

// 	// Logs errors from scan
// 	quickscan.on('error', function(error){
// 		console.log(error)
// 	})
// }
