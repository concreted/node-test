process.openStdin();

process.stdin.on('data', function (input) {
    console.log(input);
});