import { upperCaseFirstLetter, hexToRgba, rgbToRgba } from "./utility"

describe("upperCaseFirstLetter utility function", () => {
    it("should uppercase the first letter of a string", () => {
        expect(upperCaseFirstLetter("react")).toStrictEqual("React");
        expect(upperCaseFirstLetter("React Notification")).toStrictEqual("React Notification");
    });
});

describe("hexToRgba utility function", () => {
    it("should convert Hex format to rgba format", () => {
        expect(hexToRgba("#0057FF")).toBe("rgba(0, 87, 255, 1)");
    });
    it("should throw an error", () => {
        const invalidRgb = () => hexToRgba("#rgb");
        expect(invalidRgb).toThrowError();
    });
});

describe("rgbToRgba utility function", () => {
    it("should convert rgb format to rgba format", () => {
        expect(rgbToRgba("rgb(0, 87, 255)")).toBe("rgba(0, 87, 255, 1)");
    });
});