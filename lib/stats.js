var _ = require('lodash');


var stat = {};

function sum(x,y) {
    return (+x) + (+y);
}

function product(x,y) {
    return (+x) * (+y);
}

function difference(x,y) {
    return (+x) - (+y);
}

function inv(x) {
    return 1 / x;
}

function sq(x) {
    return x * x;
}

stat.mean = function(arr) {
    return _.reduce(arr, sum, 0) / arr.length;
};

stat.geomean = function(arr) {
    var p = _.reduce(arr, product, 1);
    return Math.pow(p, 1 / arr.length);
};

stat.harmean = function(arr) {
    var i = _.reduce(_.map(arr, inv), sum, 0);
    return arr.length / i;
};

stat.median = function(arr) {
    var len = arr.length,
        sorted = arr.sort();

    if (len % 2 === 0) {
        var l = +arr[len / 2 - 1],
            r = +arr[len / 2];
        return (l + r) / 2;
    } else {
        return +arr[(len - 1) / 2];
    }
};

stat.variance = function(arr) {
    var m = stat.mean(arr);
    var t = _.map(arr, function(a) {
        return a - m;
    });
    var e = _.map(t, sq);
    return stat.mean(e);

};

stat.mode = function(arr) {
    var mm = {},
        m = arr[0],
        mc = 1;

    for(var i = 0; i < arr.length; i++) {
        var e = +arr[i];
        if(_.isUndefined(mm[e])) {
            mm[e] = 1;
        } else {
            mm[e]++;
        }
        if(mm[e] > mc) {
            m = e;
            mc = mm[e];
        }
    }
    return m;
};

stat.range = function(arr) {
    var max = Math.max.apply(null, arr),
        min = Math.min.apply(null, arr);
    return max-min;
};

stat.stdev = function(arr) {
    var m = stat.mean(arr);
    var n = arr.length;
    var x = _.reduce(arr, function(acc, v, k) {
        var c = Math.pow((v - m), 2);
        acc += c;
        return acc;
    }, 0);

    return Math.sqrt(x / n);
};

stat.cov = function(arr) {
    var s = stat.stdev(arr);
    var m = stat.mean(arr);

    return s / m; 
};

stat.covariance = function(arr1, arr2) {
    var xm = stat.mean(arr1);
    var ym = stat.mean(arr2);

    var s = _.reduce(arr1, function(acc, v, k) {
        acc += (arr1[k] - xm) * (arr2[k] - ym);
        return acc;
    }, 0);

    return s / (arr1.length - 1);
};

module.exports = stat;

var g = stat.mode([1,2,2,2,2,2,2,2,3]);
console.log(g);



