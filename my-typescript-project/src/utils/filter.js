"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = filter;
function filter(predicate, input) {
    if (input === undefined) {
        throw new Error("Input array is required");
    }
    return input.filter(predicate);
}
