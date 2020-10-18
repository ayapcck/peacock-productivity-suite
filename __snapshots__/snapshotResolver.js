const snapshotPathResolver = (path, extension) => {
    const fullMatch = /(src)[\/\\](components([\/\\]subcomponents)?|pages|utilities)([\/\\].*[\/\\]test)?([\/\\](.*)\.test\.js)/;
    const matchResult = path.match(fullMatch);
    const secondGroup = matchResult[2];
    const dirType = secondGroup.includes('subcomponents') ? 'subcomponents' : secondGroup;
    const component = matchResult[6];
    
    const snapshotPath = `__snapshots__/${dirType}/${component}.test${extension}`;
    return snapshotPath;
};
const testPathResolver = (path, extension) => {
    // TODO: fix resolving for utilties and pages
    const fullMatch = /__snapshots__[\/\\](subcomponents|components|pages|utilities)[\/\\](.*)(\.test\.snap)/
    const matchResult = path.match(fullMatch);
    let dirSuffix = matchResult[1];
    const component = matchResult[2];
    
    let testPath = 'src/';
    if (dirSuffix === 'utilities') {
        testPath = testPath + `utilities/${component}`;
    } else {
        if (dirSuffix === 'subcomponents') dirSuffix = `components/${dirSuffix}`;
        testPath = testPath + `${dirSuffix}/${component}/test/${component}`;
    }
    testPath = testPath + '.test.js';
    
    return testPath;
};

const resolvePath = (path, extension, isSnapshotPath) => {
    const resolver = isSnapshotPath ? snapshotPathResolver : testPathResolver;
    return resolver(path, extension);
};

module.exports = {
    resolveSnapshotPath: (testPath, snapshotExtension) =>
        resolvePath(testPath, snapshotExtension, true),
    resolveTestPath: (snapshotFilePath, snapshotExtension) =>
        resolvePath(snapshotFilePath, snapshotExtension, false),
    testPathForConsistencyCheck: 'src/components/subcomponents/Button/test/Button.test.js',
};
