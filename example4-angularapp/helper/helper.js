var common = require('../data/commonData');
(function () {
    module.exports = function (param) {
        if (param) {
            var fileName = '../data/' + param + '_data.json';
            var pageData = require(fileName);

            for (var p in pageData) {
                try {
                    // Property in destination object set; update its value.
                    if (pageData[p].constructor == Object) {
                        common[p] = MergeRecursive(common[p], pageData[p]);

                    } else {
                        common[p] = pageData[p];

                    }

                } catch (e) {
                    // Property in destination object not set; create it and set its value.
                    common[p] = pageData[p];

                }
            }
            var completeData = common;
            return completeData;
        }
    }
})()