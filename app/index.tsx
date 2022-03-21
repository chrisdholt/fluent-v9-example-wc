/** @jsx h */ /* Note: Set the JSX pragma to the wrapped version of createElement */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line import/order
import h from "./pragma"; /* Note: Import wrapped createElement. */
import ReactDOM from "react-dom";
import { Fragment } from "react";
import AllComponents from "../src/custom-elements";
import templates from "./templates";
AllComponents;

const searchParam = new URLSearchParams(window.location.search);
const component = searchParam.get("component") || "button";
const repeat = searchParam.get("repeatNum") || "1";
const isMultiple = component?.includes(",");
const repeatNumber = parseInt(repeat);

const renderComponent = () => {
  if (isMultiple) {
    const componentList = component.split(",");
    const combinedTemplates = componentList.reduce((prev, current) => {
      prev.push(templates[current]);
      return prev;
    }, []);

    return repeatNumber > 0
      ? [...Array(repeatNumber)].map((e, i) => combinedTemplates)
      : combinedTemplates;
  } else {
    return repeatNumber > 0
      ? [...Array(repeatNumber)].map((e, i) => templates[component])
      : templates[component];
  }
};

ReactDOM.render(
  <Fragment>{renderComponent()}</Fragment>,
  document.getElementById("root")
);
