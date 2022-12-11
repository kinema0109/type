"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (schema) => (req, res, next) => {
    schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
    });
};
