var GoogleHome = function () {
    var bannerText = element(by.id('#hplogo'));

    this.getTitle = function (cb) {
        cb(browser.getTitle());
    }
};

module.exports = GoogleHome;