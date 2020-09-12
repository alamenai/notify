import React, { useContext } from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Context from "./context"

Enzyme.configure({ adapter: new Adapter() });

describe("Notification context", () => {
    it("should pass the context values to the Child component properly", () => {

        const Child = () => {
            const { type, visibile, setVisible, darkmode } = useContext(Context);
            return <p>{(type === "info"
                && (visibile === false)
                && (typeof setVisible === "function")
                && darkmode == false)}</p>;
        };

        const Parent = () => {
            const value = {
                type: "info",
                visibile: true,
                setVisible: () => { },
                darkmode: false
            };

            return (<Context.Provider value={value} >
                <Child />
            </Context.Provider>);
        }

        const wrapper = mount(<Parent />);
        expect(wrapper.find(<Child />).find(<p>{true}</p>)).toBeTruthy();
    });
});
