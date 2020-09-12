import React from "react"
import renderer from "react-test-renderer"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Header, { Icon, Title, Close } from "./index"
import { Wrapper } from "./Styled"

Enzyme.configure({ adapter: new Adapter() })

describe("<Header/>", () => {

    const props = {
        title: "Title",
        subtitle: "Subtitle"
    }

    it('allows us to set props', () => {
        const wrapper = mount(<Header {...props} />);
        expect(wrapper.props().title).toBe('Title');
        wrapper.setProps({ title: 'Notification' });
        expect(wrapper.props().title).toBe('Notification');
    });

    it('renders children when passed in', () => {
        const { title, subtitle } = props
        const wrapper = shallow(<Header {...props} />);
        expect(wrapper.contains(
            <Wrapper>
                <Icon />
                <Title title={title} subtitle={subtitle} />
                <Close />
            </Wrapper>)).toBe(true);
    });

    test("has a valid snapshot", () => {
        const component = renderer.create(<Header {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})