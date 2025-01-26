module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpeg,html,css,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};