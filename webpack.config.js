const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
	// your config here
	plugins: [
		new WebpackObfuscator(
			{
				rotateStringArray: true,
			},
			['excluded_bundle_name.js'],
		), // you can exclude specific files
	],
};
