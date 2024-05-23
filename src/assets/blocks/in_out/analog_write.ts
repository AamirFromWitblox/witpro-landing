import * as Blockly from "blockly/core";

import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["analog_write"] = {
  init: function () {
    this.appendValueInput("Label")
      .setCheck("label")
      .appendField(Blockly.Msg.ARDUINO_ANALOG_WRITE_1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_ANALOG_WRITE_2)
      .appendField(new Blockly.FieldTextInput("13"), "pinNumber")
      .appendField(Blockly.Msg.ARDUINO_ANALOG_WRITE_3);
    this.appendDummyInput().appendField(
      new Blockly.FieldNumber(255, 0, 255),
      "intensity"
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLORS.in_out);
    this.setTooltip("Analog Write");
    this.setHelpUrl(
      "https://www.arduino.cc/reference/en/language/functions/analog-io/analogwrite/"
    );
  },
};

arduinoGenerator.forBlock["analog_write"] = function (block) {
  const pinNumber = block.getFieldValue("pinNumber");
  const intensity = block.getFieldValue("intensity");
  const code = `analogWrite(${pinNumber}, ${intensity});\n`;
  return `${code}`;
};
