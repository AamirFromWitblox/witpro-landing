import * as Blockly from "blockly/core";
import { Order } from "../order";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["label"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQm",
          10,
          10,
          // @ts-ignore
          { alt: "*", flipRtl: "FALSE" }
        )
      )
      .appendField(new Blockly.FieldTextInput(""), "label")
      .appendField(
        new Blockly.FieldImage(
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
          10,
          10,
          // @ts-ignore
          { alt: "*", flipRtl: "TRUE" }
        )
      );
    this.setOutput(true, "label");
    this.setColour(COLORS.string);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

arduinoGenerator.forBlock["label"] = function (block) {
  const name = block.getFieldValue("label");
  return [name, Order.ATOMIC];
};
