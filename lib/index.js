'use strict';

module.exports = function (className) {
    const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)?';

    let blockElementModifierRegEx      = new RegExp(`^(${WORD})__(${WORD})_(${WORD})$`);
    let blockElementModifierValueRegEx = new RegExp(`^(${WORD})__(${WORD})_(${WORD})_(${WORD})$`);
    let blockElementRegEx              = new RegExp(`^(${WORD})__(${WORD})$`);
    let blockModifierRegEx             = new RegExp(`^(${WORD})_(${WORD})$`);
    let blockModifierValueRegEx        = new RegExp(`^(${WORD})_(${WORD})_(${WORD})$`);

    return  blockElementModifierRegEx.test(className)      ||
            blockElementModifierValueRegEx.test(className) ||
            blockElementRegEx.test(className)              ||
            blockModifierRegEx.test(className)             ||
            blockModifierValueRegEx.test(className);
};
