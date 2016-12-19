
/**
 * Expose the root regex
 */

module.exports = Regex

/**
 * Define regex Fuc
 *
 * @param {string} regexp
 * @param {string} flags
 */

function Regex (regexp, flags) {
  try {
    this.regex = new RegExp(regexp, flags)
  } catch (err) {
    throw err
  }
}

/**
 * Define test
 *
 * @param {string} content
 */

Regex.prototype.test = function (content) {
  return this.regex.test(content)
}

/**
 * Define match
 *
 * @param {string} str
 */

Regex.prototype.match = function (str) {
  var match = this.regex.exec(str)
  if (!match) {
    return match
  }
  var result = {
    value: match[0],
    index: match.index,
    groups: []
  }
  for (var m of match) {
    result.groups.push(m)
  }
  return result
}

/**
 * Define matches
 *
 * @param {string} str
 */

Regex.prototype.matches = function (str) {
  var result = []
  var match = {}
  while ((match = this.regex.exec(str))) {
    var matchObj = {
      value: match[0],
      index: match.index,
      groups: []
    }
    for (var m of match) {
      matchObj.groups.push(m)
    }
    result.push(matchObj)
    if (!this.regex.global) {
      break
    }
  }

  return result
}

/**
 * Define replace
 *
 * @param {string} str
 * @param {function} or {string} regexcer
 */

Regex.prototype.replace = function (str, regexcer) {
  var result = ''
  var index = 0
  var lastWord = ''
  var match = {}
  while ((match = this.regex.exec(str))) {
    var matchObj = {
      value: match[0],
      index: match.index,
      groups: []
    }
    for (var m of match) {
      matchObj.groups.push(m)
    }
    var afterStr = ''
    var replaceValue = ''
    if (typeof (regexcer) === 'function') {
      replaceValue = regexcer(matchObj)
    } else {
      replaceValue = regexcer
    }
    var handleStr = str.substr(index, match.index + match[0].length - index)
    afterStr = handleStr.replace(new RegExp(this.regex.source), replaceValue)
    lastWord = str.substr(match.index + match[0].length, str.length - (match.index + match[0].length))
    result = result + afterStr
    index = match.index + match[0].length
    if (!this.regex.global) {
      break
    }
  }

  result = result + lastWord

  result = result === '' ? str : result

  return result
}
