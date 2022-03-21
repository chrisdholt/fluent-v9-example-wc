/* eslint-disable max-len */
/** @jsx h */ /* Note: Set the JSX pragma to the wrapped version of createElement */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line import/order
import h from "./pragma"; /* Note: Import wrapped createElement. */
import React from "react";
import {
  FluentAccordion,
  FluentAccordionItem,
  FluentAvatar,
  FluentBadge,
  FluentButton,
  FluentCard,
  FluentCardFooter,
  FluentCardHeader,
  FluentCardPreview,
  FluentCheckbox,
  FluentCompoundButton,
  FluentCounterBadge,
  FluentDivider,
  FluentImage,
  FluentLabel,
  FluentLink,
  FluentMenuButton,
  FluentPresenceBadge,
  FluentRadio,
  FluentRadioGroup,
  FluentSplitButton,
  FluentTab,
  FluentTabPanel,
  FluentTabs,
  FluentText,
  FluentToggleButton,
} from "../src/index";

import ReplySVG from "./assets/reply.svg";
import ShareSVG from "./assets/share.svg";
export default {
  accordion: (
    <FluentAccordion>
      <FluentAccordionItem expanded>
        <span slot="heading">Panel One</span>
        Panel one content
      </FluentAccordionItem>
      <FluentAccordionItem>
        <span slot="heading">Panel two</span>
        Panel two content
      </FluentAccordionItem>
      <FluentAccordionItem>
        <span slot="heading">Panel three</span>
        Panel three content
      </FluentAccordionItem>
    </FluentAccordion>
  ),
  avatar: <FluentAvatar name="Jane Doe"></FluentAvatar>,
  badge: <FluentBadge>Badge</FluentBadge>,
  button: <FluentButton appearance="primary">Button</FluentButton>,
  card: (
    <FluentCard>
      <FluentCardHeader>
        <img
          slot="image"
          src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/avatar_mauricio.svg"
          alt="Placeholder user photo"
        />
        <span>
          <b>Chris</b> + 7 others edited
        </span>
        <p slot="description">Fluent v9 + Web Components</p>
        <FluentButton slot="action" appearance="transparent">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 6a1.25 1.25 0 110-2.5A1.25 1.25 0 0110 6zm0 5.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-1.25 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"></path>
          </svg>
        </FluentButton>
      </FluentCardHeader>
      <FluentCardPreview>
        <img
          src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/doc_template.png"
          alt="Preview of a Word document "
        />
        <img
          slot="logo"
          src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/word_logo.svg"
          alt="Microsoft Word logo"
        />
      </FluentCardPreview>
      <FluentCardFooter>
        <FluentButton>
          {/* <ReplySVG /> */}
          Reply
        </FluentButton>
        <FluentButton>
          {/* <ShareSVG /> */}
          Share
        </FluentButton>
      </FluentCardFooter>
    </FluentCard>
  ),
  checkbox: (
    <div>
      <FluentCheckbox>
        <label>My checkbox</label>
      </FluentCheckbox>
      <FluentCheckbox disabled>
        <label>My checkbox</label>
      </FluentCheckbox>
      <FluentCheckbox checked>
        <label>Checked</label>
      </FluentCheckbox>
    </div>
  ),
  counterBadge: <FluentCounterBadge count="5"></FluentCounterBadge>,
  compoundButton: (
    <FluentCompoundButton appearance="primary">
      Button <span slot="description">Secondary content</span>
    </FluentCompoundButton>
  ),
  divider: <FluentDivider></FluentDivider>,
  image: (
    <FluentImage>
      <img alt="Image placeholder" src="https://via.placeholder.com/300x300" />
    </FluentImage>
  ),
  menuButton: <FluentMenuButton>Button</FluentMenuButton>,
  label: <FluentLabel>label</FluentLabel>,
  link: <FluentLink href="#">this is a link</FluentLink>,
  presenceBadge: (
    <div className="container">
      <FluentPresenceBadge status="available"></FluentPresenceBadge>
      <FluentPresenceBadge status="away"></FluentPresenceBadge>
      <FluentPresenceBadge status="busy"></FluentPresenceBadge>
      <FluentPresenceBadge status="donotdisturb"></FluentPresenceBadge>
      <FluentPresenceBadge status="offline"></FluentPresenceBadge>
      <FluentPresenceBadge status="outofoffice"></FluentPresenceBadge>
      <FluentPresenceBadge status="unknown"></FluentPresenceBadge>
    </div>
  ),
  radioGroup: (
    <FluentRadioGroup name="numbers">
      <FluentRadio value="one">One</FluentRadio>
      <FluentRadio value="two">Two</FluentRadio>
      <FluentRadio value="three">Three</FluentRadio>
      <FluentRadio value="four">Four</FluentRadio>
    </FluentRadioGroup>
  ),
  radio: <FluentRadio>label</FluentRadio>,
  splitButton: (
    <FluentSplitButton>
      <FluentButton>Button</FluentButton>
      <FluentMenuButton aria-label="Menu Button"></FluentMenuButton>
    </FluentSplitButton>
  ),
  tabs: (
    <FluentTabs id="myTab" activeId="TabTwo">
      <FluentTab id="TabOne">First tab</FluentTab>
      <FluentTab id="TabTwo">Second tab</FluentTab>
      <FluentTab id="TabThree">Third tab</FluentTab>
      <FluentTabPanel id="TabPanelOne">
        First tab content. This is for testing.
      </FluentTabPanel>
      <FluentTabPanel id="TabPanelTwo">
        Second tab content. This is for testing.
      </FluentTabPanel>
      <FluentTabPanel id="TabPanelThree">
        Third tab content. This is for testing.
      </FluentTabPanel>
    </FluentTabs>
  ),
  text: (
    <FluentText>
      <span>Default text styles</span>
    </FluentText>
  ),
  toggleButton: <FluentToggleButton>Button</FluentToggleButton>,
};
