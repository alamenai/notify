import React from "react"
import renderer from "react-test-renderer"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Icon, { setIcon } from "./index"
import { Wrapper } from "./Styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Enzyme.configure({ adapter: new Adapter() })

describe("<Icon/>", () => {

    const props = {
        type: "info",
    }

    it('renders children when passed in', () => {
        const { type } = props

        const Element = <Wrapper type={type} color={null}>
            <FontAwesomeIcon
                icon={setIcon(type)}
                size="2x" />
        </Wrapper>;

        const wrapper = shallow(<Icon />);
        expect(wrapper.contains(Element)).toBeTruthy();
    });

    test("has a valid snapshot", () => {
        const component = renderer.create(<Icon />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})