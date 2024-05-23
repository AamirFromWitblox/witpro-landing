import * as Blockly from "blockly/core";
import { Order } from "../order";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["serial_available"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_SERIAL_AVAILABLE);
    this.setOutput(true, null);
    this.setColour(COLORS.serial);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

arduinoGenerator.forBlock["serial_available"] = function () {
  const code = `Serial.available()`;
  return [code, Order.ATOMIC];
};
