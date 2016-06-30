
/**
 * Expose the root regex
 */

module.exports = Regex;


/**
 * Define regex Fuc
 * 
 * @param {string} regexp
 * @param {string} flags
 */

function Regex(regexp,flags) {
    try{
        this.regex = new RegExp(regexp,flags);
    }catch(err){
        throw err;
    }
}

/**
 * Define test 
 * 
 * @param {string} content
 */

Regex.prototype.test = function (content) {
    return this.regex.test(content);
}

/**
 * Define match 
 * 
 * @param {string} str
 */

Regex.prototype.match = function (str) {
    var match = this.regex.exec(str);
    if(!match){
        return match;
    }
    console.log(match);
    var result = {};
    result.value = match[0];
    result.index = match.index;
    result.input = match.input;
    result.groups = [];
    for(i=1;i<match.length;i++){
        result.groups.push({
            value : match[i]
        })
    }
    return result;
}


/**
 * Define matches 
 * 
 * @param {string} str
 */

Regex.prototype.matches = function (str) {

    var result = [];
    while(match = this.regex.exec(str)){
        var matchObj = {
            value : match[0]
        }
        matchObj.groups = [];
        matchObj.index = match.index;
        matchObj.input = match.input;
        for(var i=1;i<match.length;i++){
            matchObj.groups.push({
                value : match[i]
            })
        }
        result.push(matchObj);
    }

    return result;
}
