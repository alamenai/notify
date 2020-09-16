import React from "react"
import renderer from "react-test-renderer"
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Media from "./index"

Enzyme.configure({ adapter: new Adapter() })

describe("<Media/>", () => {

    const props = {
        src: "my_image.jpg"
    };

    it('should allows us to set props', () => {
        const wrapper = mount(<Media {...props} />);
        expect(wrapper.props().src).toBe('my_image.jpg');
    });

    it('should renders children', () => {
        const wrapper = mount(<Media src={props.src} />);
        expect(wrapper.find(<img src={props.src} alt={props.src} />
        )).toBeTruthy();
    });

    test("has a valid snapshot", () => {
        const component = renderer.create(<Media {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});