import React from "react"
import renderer from "react-test-renderer"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Close from "./index"
import { Button } from "./Styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

Enzyme.configure({ adapter: new Adapter() })

describe("<Close/>", () => {

    const setVisible = value => ({ visible: value })

    const props = {
        type: "info",
        onClick: () => setVisible(true)
    }

    it('renders children when passed in', () => {
        const Element = <Button {...props}>
            <FontAwesomeIcon icon={faTimes} />
        </Button>
        const wrapper = shallow(<Close />);
        expect(wrapper.find(Element)).toBeTruthy();
    });

    test("has a valid snapshot", () => {
        const component = renderer.create(<Close />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})