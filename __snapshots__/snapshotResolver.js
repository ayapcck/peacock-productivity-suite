const snapshotPathResolver = (path, extension) => {
    const fullMatch = /(src)[\/\\](components([\/\\]subcomponents)?|routes|utilities)([\/\\].*([\/\\]test)?)?([\/\\](.*)\.test\.js)/;
    const matchResult = path.match(fullMatch);
    const secondGroup = matchResult[2];
    const dirType = secondGroup.includes('subcomponents') ? 'subcomponents' : secondGroup;
    const component = matchResult[7];
    
    const snapshotPath = `__snapshots__/${dirType}/${component}.test${extension}`;
    return snapshotPath;
};
const testPathResolver = (path, extension) => {
    // TODO: fix resolving for utilties and pages
    const fullMatch = /__snapshots__[\/\\](subcomponents|components|routes|utilities)[\/\\](.*)(\.test\.snap)/
    const matchResult = path.match(fullMatch);
    let dirSuffix = matchResult[1];
    const component = matchResult[2];
    
    let testPath = 'src/';
    switch (dirSuffix) {
        case 'utilities':
            testPath = testPath + `utilities/${component}`;
            break;
        case 'routes':
            testPath = testPath + `routes/${component}`;
            break;
        default:
            if (dirSuffix === 'subcomponents') dirSuffix = `components/${dirSuffix}`;
            testPath = testPath + `${dirSuffix}/${component}/test/${component}`;
            break;
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
