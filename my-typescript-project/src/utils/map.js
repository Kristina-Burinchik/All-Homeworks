"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = map;
function map(mapper, input) {
    if (mapper === undefined && input === undefined) {
        // Если вызвали без аргументов, возвращаем саму функцию
        return map;
    }
    if (mapper !== undefined && input === undefined) {
        // Возвращаем функцию, которая принимает массив
        return function (subInput) {
            if (subInput === undefined) {
                throw new Error("Input array is required");
            }
            return subInput.map(mapper);
        };
    }
    if (input !== undefined && mapper !== undefined) {
        // Выполняем маппинг сразу
        return input.map(mapper);
    }
    throw new Error("Invalid arguments");
}
