// Usage of GoGO Gadgets for attacking targets without prior mutual consent is illegal. 
// It's the end user's responsibility to obey all applicable local, state and federal laws. 
// I'm not responsible for any misuse or damage caused by this script. 
// Only use for educational purposes only. If missue this tool, do not abuse this script. 

// Npm modules
const nmap = require('node-nmap');
const usage = require('command-line-usage');
const chalk = require('chalk');
// const readline = require('readline-sync');
// const args = require('command-line-args');
const yargs = require('yargs')(process.argv);
const fs = require('fs');
// const argv = require('minimist');
																			
header = `
		               &&&&&&&&&&&&&&&                              
		               &&&&&&&&&&&&&&                               
		               @&&&&&&&&&&&&&                               
		                &&&&&&&&&&&&&                               
		                &&&&&&&&&&&&@                               
		            &&&&&&&&&&&&&&&&&&&&&                           
		              * %&&&&&&&&&&# &                              
		              @ &  .         #   .                          
		               &            ,&                              
		               &&&         &                                
		            &&&&%   /&&@                           
		          &&&&                                              
		       &&&&%                                                                                                                                        
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
			"$ ggg --help",
			"$ ggg -qscan -t <ip>",
			"$ ggg -t [target] -qscan [Quick Scan]"
		]
	},     
	{
		header:'optional arguments:',
		content:[
			{ name: '--help', summary: ': Displays Help information'},
			{ name: '--banner', summary: ': Grabs informaton about what the hosts using'},
			{ name: '--qscan', summary: ': Peforms a fast scan on a target, gaining info about port/services'},
			{ name: '-sS', summary: ': Perform stealth scan on target'}
		],
	},
	{
		header:'Exmaples:',
		content:[
				{ name: 'ggg -t 127.0.0.1 --qscan' },
				{ name: 'ggg -t www.example.com --banner -sS' }
			]
		}
]
console.log(usage(sections))
// Arguments		
// for (let i = 0; i < process.argv.length; i++) {
//   const element = process.argv[i];
//   if (element === "--qscan"){

//  const quickscan = new nmap.QuickScan(`${argv.value}`);
//   	quickscan.on('complete', function(data){

//   	// Logs scanned info
//   	const output = data[0]
// 		console.log(output);
// 	})

// 		quickscan.on('error', function(error){
// 		console.log(`Oops error occured`);
// 	})
//   } 
// }
const argv = yargs
	.option('target', {
		alias: 't',
		type: 'boolean'
	})
	.argv;
if (argv.target){
	const quickscan = new nmap.QuickScan('127.0.0.1');
  	quickscan.on('complete', function(data){

  	// Logs scanned info
  	const output = data[0]
		console.log(output);
	})

	quickscan.on('error', function(error){
		console.log(`Oops error occured`);
	}) 
}


// NOTE:
// if (yargs.argv.target) console.log(yargs.argv.target + '');
// if (yargs.argv.memes) console.log('perform action');
