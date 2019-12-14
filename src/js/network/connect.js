'use strict';

/**
 * @constructor
 * @param {string} domain - host domain
 * @param {object} headerOptions - [ XMLRequestHeader key, value ]
 */
function Network(domain) {
    this.domain = domain || '';
}

/**
 * get data from path
 * @param {string} path - resource path
 * @param {function} func - call function with async datalist
 */
Network.prototype._getAsync = function(path, func) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            func(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('GET', this.domain + path, true);
    xhr.send(null);
};

/**
 * post data to path
 * @param {string} path - resource path
 * @param {object} dataObj - calendar datalist
 * @param {function} func - throw request to function
 */
Network.prototype._postAsync = function(path, dataObj, func) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            func(xhr.responseText);
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('POST', this.domain + path, true);
    xhr.send(JSON.stringify(dataObj));
};

/**
 * put data to path
 * @param {string} path - resource path
 * @param {object} dataObj - calendar datalist
 * @param {function} func - throw request to function
 */
Network.prototype._putAsync = function(path, dataObj, func) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            func(xhr.responseText);
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('PUT', this.domain + path, true);
    xhr.send(JSON.stringify(dataObj));
};

/**
 * delete data from path
 * @param {string} path - resource path
 * @param {function} func - throw request to function
 */
Network.prototype._deleteAsync = function(path, func) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            func(xhr.responseText);
        }
    };
    xhr.open('DELETE', this.domain + path, true);
    xhr.send(null);
};

module.exports = Network;
