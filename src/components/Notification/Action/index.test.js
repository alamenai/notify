import React from "react"
import renderer from "react-test-renderer"
import Enzyme, { shallow, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Action from "./index"
import { Wrapper, Button } from "./Styled"

Enzyme.configure({ adapter: new Adapter() })

describe("<Action/>", () => {

    const props = {
        name: 'Reboot',
        onClick: () => alert("Reboot")
    }

    it('allows us to set props', () => {
        const wrapper = mount(<Action {...props} />);
        expect(wrapper.props().name).toBe('Reboot');
        wrapper.setProps({ name: 'Scan' });
        expect(wrapper.props().name).toBe('Scan');
    });

    it('renders children when passed in', () => {
        const { name, onClick } = props
        const wrapper = shallow(<Action {...props} />);
        expect(wrapper.find(< Wrapper >
            <Button
                type="info"
                color={null}
                onClick={onClick}>
                {name}
            </Button>
        </Wrapper >)).toBeTruthy();
    });

    test("has a valid snapshot", () => {
        const component = renderer.create(<Action {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})