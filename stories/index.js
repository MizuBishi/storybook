import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs/react";
import Button from "@material-ui/core/Button";
import SimpleAppBar from "../src/SimpleAppBar";
import CheckBoxList from "../src/CheckBoxList";


storiesOf("Components/", module)
  .addDecorator(withKnobs)
  .add("AppBar", () => (
    <div className="app flex-center-middle">
      <div className="element-width">
        <SimpleAppBar title={text("Title", "To-Do's")} />
      </div>
    </div>
  ));
  storiesOf("Components/", module)
  .addDecorator(withKnobs)
  .add("List", () => (
    <div className="app flex-center-middle">
      <div className="element-width">
        <CheckBoxList itemText={text("itemText", "item") } />
      </div>
    </div>
  ));
