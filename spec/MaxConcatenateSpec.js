maxConcatenate = require("../MaxConcatenate");

describe("MaxConcatenate", () => {

    it('should return the highest possible concatenated value as a string', () => {
        var result = maxConcatenate([23, 44, 100]);

        expect(result).toEqual("4423100");

        result = maxConcatenate([9, 88, 777, 6666, 55555]);
        expect(result).toEqual("988777666655555");

        result = maxConcatenate([5, 55, 555, 5556, 1]);
        expect(result).toEqual("55565555551");

        result = maxConcatenate([10009, 10008, 10001, 99]);
        expect(result).toEqual("99100091000810001");
    });
});