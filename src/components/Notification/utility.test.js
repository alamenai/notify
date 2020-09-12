import { upperCaseFirstLetter } from "./utility"

describe("upperCaseFirstLetter utility function", () => {
    it("should uppercase the first letter of a string", () => {
        expect(upperCaseFirstLetter("react")).toStrictEqual("React");
        expect(upperCaseFirstLetter("React Notification")).toStrictEqual("React Notification");
    })
})