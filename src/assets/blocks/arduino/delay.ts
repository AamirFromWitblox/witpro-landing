import * as Blockly from "blockly/core";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["delay"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_DELAY)
      .appendField(new Blockly.FieldNumber(1000, 0, 10000), "delay")
      .appendField(Blockly.Msg.ARDUINO_DELAY_MS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLORS.arduino);
    this.setTooltip("Delay");
    this.setHelpUrl("");
  },
};

arduinoGenerator.forBlock["delay"] = function (block) {
  const delay = block.getFieldValue("delay");
  return `delay(${delay});\n`;
};
