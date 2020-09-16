import { upperCaseFirstLetter, hexToRgba, rgbToRgba, isVideo, isImage, getExtension } from "./utility"

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

describe("isVideo utility function", () => {
    it("should validate the video extension", () => {
        expect(isVideo(".mp4")).toBeTruthy();
        expect(isVideo(".mp3")).toBeFalsy();
    });
});

describe("isImage utility function", () => {
    it("should validate the image extension", () => {
        expect(isImage(".jpg")).toBeTruthy();
        expect(isImage(".png")).toBeTruthy();
        expect(isImage(".mp3")).toBeFalsy();
    });
});

describe("getExtension utility function", () => {
    it("should retrieve the extension if the image or the video", () => {
        expect(getExtension("my_image.jpg")).toBe("jpg");
        expect(getExtension("my_video.png")).toBe("png");
    });
});