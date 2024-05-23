import * as Blockly from "blockly/core";
import { Order } from "../order";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["digital_read"] = {
  init: function () {
    this.appendValueInput("Label")
      .setCheck("label")
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_READ_1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DIGITAL_READ_2)
      .appendField(new Blockly.FieldTextInput("13"), "pin_number");
    this.setOutput(true, "Number");
    this.setColour(COLORS.in_out);
    this.setTooltip("Digital Read");
    this.setHelpUrl(
      "https://www.arduino.cc/reference/en/language/functions/digital-io/digitalread/"
    );
  },
};

arduinoGenerator.forBlock["digital_read"] = function (block) {
  const pinNumber = block.getFieldValue("pin_number");
  const code = `digitalRead(${pinNumber})`;
  return [code, Order.ATOMIC];
};
