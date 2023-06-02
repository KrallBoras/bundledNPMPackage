const krallnpmtest = require('krall-npmtest')

function bundle()
{
    krallnpmtest.greet("Krall");
    console.log("Testing!");
}

module.exports = {
    bundle,
};