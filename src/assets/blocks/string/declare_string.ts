import * as Blockly from "blockly/core";
import { Order } from "../order";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["declare_string"] = {
  init: function () {
    this.appendValueInput("i")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_VARIABLE_DECLARE_1)
      .appendField(
        new Blockly.FieldDropdown([
          ["i", "i"],
          ["Rename variable", "Rename"],
          ["New variable", "new"],
        ]),
        "variable_name"
      )
      .appendField(Blockly.Msg.ARDUINO_VARIABLE_DECLARE_2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLORS.string);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

arduinoGenerator.forBlock["declare_string"] = function (block) {
  const dropdown_variable_name = block.getFieldValue("variable_name");
  const value_i = arduinoGenerator.valueToCode(block, "i", Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `${dropdown_variable_name} = ${value_i};\n`;
  return code;
};
