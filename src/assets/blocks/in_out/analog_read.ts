import * as Blockly from "blockly/core";

import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";
import { Order } from "../order";

Blockly.Blocks["analog_read"] = {
  init: function () {
    this.appendValueInput("Label")
      .setCheck("label")
      .appendField(Blockly.Msg.ARDUINO_ANALOG_READ_1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_ANALOG_READ_2)
      .appendField(new Blockly.FieldTextInput("13"), "pinNumber");
    this.setOutput(true, "Number");
    this.setColour(COLORS.in_out);
    this.setTooltip("Analog Read");
    this.setHelpUrl(
      "https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/"
    );
  },
};

arduinoGenerator.forBlock["analog_read"] = function (block) {
  const pinNumber = block.getFieldValue("pinNumber");
  const code = `analogRead(${pinNumber})`;
  return [code, Order.ATOMIC];
};
