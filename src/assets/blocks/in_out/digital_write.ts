import * as Blockly from "blockly/core";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["digital_write"] = {
  init: function () {
    this.appendValueInput("Label")
      .setCheck("label")
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_WRITE_1)
      .appendField(
        new Blockly.FieldDropdown([
          ["On", "HIGH"],
          ["Off", "LOW"],
        ]),
        "pin_type"
      )
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_WRITE_2)
      .appendField(new Blockly.FieldTextInput("13"), "pin_number")
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_WRITE_3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLORS.in_out);
    this.setTooltip("");
    this.setHelpUrl(
      "https://www.arduino.cc/reference/en/language/functions/digital-io/pinmode/"
    );
  },
};

arduinoGenerator.forBlock["digital_write"] = function (block) {
  const pinNumber = block.getFieldValue("pin_number");
  const pinType = block.getFieldValue("pin_type");
  const code = `digitalWrite(${pinNumber}, ${pinType});\n`;
  return `${code}`;
};
