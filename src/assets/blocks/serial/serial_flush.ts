import * as Blockly from "blockly/core";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["serial_flush"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_SERIAL_FLUSH);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLORS.serial);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

arduinoGenerator.forBlock["serial_flush"] = function () {
  const code = `Serial.flush();\n`;
  return code;
};
