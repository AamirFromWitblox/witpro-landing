import * as Blockly from "blockly/core";
import { Order } from "../order";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["map"] = {
  init: function () {
    this.appendValueInput("value").setCheck("Number").appendField("Map");
    this.appendValueInput("fromLow").setCheck("Number").appendField("fromLow");
    this.appendValueInput("fromHigh")
      .setCheck("Number")
      .appendField("fromHigh");
    this.appendValueInput("toLow").setCheck("Number").appendField("toLow");
    this.appendValueInput("toHigh").setCheck("Number").appendField("toHigh");
    this.setOutput(true, "Number");
    this.setColour(COLORS.arduino);
    this.setTooltip("Map");
    this.setHelpUrl("");
  },
};

arduinoGenerator.forBlock["map"] = function (block) {
  const value =
    arduinoGenerator.valueToCode(block, "value", Order.ATOMIC) || "0";
  const fromLow =
    arduinoGenerator.valueToCode(block, "fromLow", Order.ATOMIC) || "0";
  const fromHigh =
    arduinoGenerator.valueToCode(block, "fromHigh", Order.ATOMIC) || "0";
  const toLow =
    arduinoGenerator.valueToCode(block, "toLow", Order.ATOMIC) || "0";
  const toHigh =
    arduinoGenerator.valueToCode(block, "toHigh", Order.ATOMIC) || "0";
  return [
    `map(${value}, ${fromLow}, ${fromHigh}, ${toLow}, ${toHigh})`,
    Order.ATOMIC,
  ];
};
