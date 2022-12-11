"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require('pino');
const dayjs = require('dayjs');
const logg = logger({
    prettyPrint: true,
    base: {
        pid: false,
    },
    timestamp: () => ',time :' + dayjs().format()
});
exports.default = logg;
