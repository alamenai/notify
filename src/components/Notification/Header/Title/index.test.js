import React from "react"
import renderer from "react-test-renderer"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Title from "./index"
import { Wrapper, Title as StyledTitle, Subtitle } from "./Styled"
import { upperCaseFirstLetter } from "../../utility"

Enzyme.configure({ adapter: new Adapter() })

describe("<Title/>", () => {

    const props = {
        type: "info",
        title: "Title",
        subtitle: "Subtitle"
    }

    it('allows us to set props', () => {
        const wrapper = mount(<Title {...props} />);
        expect(wrapper.props().title).toBe('Title');
        wrapper.setProps({ title: 'Notification' });
        expect(wrapper.props().title).toBe('Notification');
    });

    it('renders children when passed in', () => {
        const { type, title, subtitle } = props
        const wrapper = shallow(<Title {...props} />);
        expect(wrapper.contains(
            <Wrapper>
                <StyledTitle type={type} color={null}>{upperCaseFirstLetter(title)}</StyledTitle>
                <Subtitle >{upperCaseFirstLetter(subtitle)}</Subtitle>
            </Wrapper>)).toBe(true);
    });

    test("has a valid snapshot", () => {
        const component = renderer.create(<Title {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})