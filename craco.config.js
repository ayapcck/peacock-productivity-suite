module.exports = {
	jest: {
		configure: {
			coverageDirectory: 'docs',
			snapshotResolver: './__snapshots__/snapshotResolver.js',
		},
	},
}