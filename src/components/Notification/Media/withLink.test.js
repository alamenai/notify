import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import WithLink from "./withLink"

Enzyme.configure({ adapter: new Adapter() })


describe("withLink HOC", () => {
    const props = {
        src: "my_source",
        link: "https://enzymejs.github.io/"
    };

    it("should wrap a Component with a link", () => {
        const { src, link } = props;
        const Image = () => <img src={src} />;
        const wrapper = shallow(WithLink(Image)(src, link));
        expect(wrapper.find(<a href={link} target="__blank">
            <Image url={src} />
        </a>)).toBeTruthy()
    });
});