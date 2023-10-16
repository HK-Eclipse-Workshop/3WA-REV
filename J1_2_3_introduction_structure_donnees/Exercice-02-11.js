const log = {
    count : 100,
    save: function () {
        'use strict';
        console.log(this.count);
    }
}

setTimeout(log.save.bind(log), 500);
