import React from "react"
import renderer from "react-test-renderer"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Body from "./index"
import { Wrapper, Text } from "./Styled"

Enzyme.configure({ adapter: new Adapter() })

describe("<Body/>", () => {

    const props = {
        message: "I'm a React notification"
    }

    it('allows us to set props', () => {
        const message = "I'm a React notification"
        const wrapper = mount(<Text {...props} />);
        expect(wrapper.props().message).toBe(message);
    });

    it('renders children when passed in', () => {
        const { message } = props
        const wrapper = shallow(<Body {...props} />);
        expect(wrapper.contains(
            <Wrapper>
                <Text darkmode={false} >{message}</Text>
            </Wrapper>)).toBe(true);
    });

    test("has a valid snapshot", () => {
        const component = renderer.create(<Body {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})