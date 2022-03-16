import React from 'react';
import ReactDOM from 'react-dom';
import {
    FluentProvider,
    teamsDarkTheme,
    teamsLightTheme,
    webDarkTheme,
    webLightTheme } from '@fluentui/react-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import { FluentButton as Button, FluentLink as Link, FluentToggleButton as ToggleButton } from "../src/index";

const layoutStyles = { display: "grid", gap: "12px", padding: "12px" }
const { wrap } = provideReactWrapper(
    React
);

export const FluentButton = wrap(Button);
export const FluentToggleButton = wrap(ToggleButton);
export const FluentLink = wrap(Link);

enum Component {
  Button = "button",
  Mixed = "mixed",
  Card = "card",
}

type Repeat = string;

const component = new URLSearchParams(window.location.search).get(
  "component"
) as Component;
const repeat = new URLSearchParams(window.location.search).get(
  "repeatNum"
) as Repeat;

const repeatNumber = parseInt(repeat);
const renderComponent = () => {
  switch (component) {
    case Component.Button:
      return repeatNumber > 0 ? (
        [...Array(repeatNumber)].map((e, i) => (
          <FluentButton appearance="primary" key={i}>
            Button
          </FluentButton>
        ))
      ) : (
        <FluentButton appearance="primary">Button</FluentButton>
      );
    case Component.Card:
      return <div>this is a card</div>;
    case Component.Mixed:
      return <div>this is a mixed</div>;
    default:
      return <FluentButton appearance="primary">Button</FluentButton>;
  }
};
ReactDOM.render(
  <FluentProvider
    style={{ display: "grid", gap: "12px" }}
    theme={webLightTheme}
  >
    <div style={layoutStyles}>{renderComponent()}</div>
  </FluentProvider>,
  document.getElementById("root")
);

/*
ReactDOM.render(
    <FluentProvider style={{ display: "grid", gap: "12px"}} theme={webLightTheme}>
        <h1 style={{ padding: "0 12px" }}>Fluent UI v9 as Web Components</h1>
        <div style={layoutStyles}>
            <h2>Light theme - web</h2>
            <FluentButton>Button</FluentButton>
            <FluentButton appearance="primary">Button</FluentButton>
            <FluentLink href="#">Link</FluentLink>
            <p>An inline <FluentLink inline href="#">link</FluentLink> example.</p>
            <p>An subtle inline <FluentLink inline href="#" appearance="subtle">link</FluentLink> example.</p>
            <FluentToggleButton>Toggle Button</FluentToggleButton>
            <FluentToggleButton appearance="primary">Toggle Button</FluentToggleButton>
        </div>
        <FluentProvider style={layoutStyles} theme={webDarkTheme}>
            <h2>Dark theme - web</h2>
            <FluentButton>Button</FluentButton>
            <FluentButton appearance="primary">Button</FluentButton>
            <FluentLink href="#">Link</FluentLink>
            <p>An inline <FluentLink inline href="#">link</FluentLink> example.</p>
            <p>An subtle inline <FluentLink inline href="#" appearance="subtle">link</FluentLink> example.</p>
            <FluentToggleButton>Toggle Button</FluentToggleButton>
            <FluentToggleButton appearance="primary">Toggle Button</FluentToggleButton>
        </FluentProvider>
        <FluentProvider style={layoutStyles} theme={teamsLightTheme}>
            <h2>Light theme - Teams</h2>
            <FluentButton>Button</FluentButton>
            <FluentButton appearance="primary">Button</FluentButton>
            <FluentLink href="#">Link</FluentLink>
            <p>An inline <FluentLink inline href="#">link</FluentLink> example.</p>
            <p>An subtle inline <FluentLink inline href="#" appearance="subtle">link</FluentLink> example.</p>
            <FluentToggleButton>Toggle Button</FluentToggleButton>
            <FluentToggleButton appearance="primary">Toggle Button</FluentToggleButton>
        </FluentProvider>
        <FluentProvider style={layoutStyles} theme={teamsDarkTheme}>
            <h2>Dark theme - Teams</h2>
            <FluentButton>Button</FluentButton>
            <FluentButton appearance="primary">Button</FluentButton>
            <FluentLink href="#">Link</FluentLink>
            <p>An inline <FluentLink inline href="#">link</FluentLink> example.</p>
            <p>An subtle inline <FluentLink inline href="#" appearance="subtle">link</FluentLink> example.</p>
            <FluentToggleButton>Toggle Button</FluentToggleButton>
            <FluentToggleButton appearance="primary">Toggle Button</FluentToggleButton>
        </FluentProvider>
    </FluentProvider>,
    document.getElementById('root'),
);
*/
