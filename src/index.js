module.exports = function check(str, bracketsConfig) {
    const pairs = [...str];
    for (let i = 0; i < pairs.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                pairs[i] === bracketsConfig[j][0] &&
                pairs[i + 1] === bracketsConfig[j][1]
            ) {
                pairs.splice(i, 2);
                i = -1;
            }
            if (pairs.length === 0) return true;
        }
    }
    return false;
};
