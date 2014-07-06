// Legacy, not needed in latest version
//process.openStdin();

process.stdin.on('data', function (input) {
    console.log(input);
});