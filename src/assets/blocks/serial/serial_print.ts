import * as Blockly from "blockly/core";
import { Order } from "../order";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["serial_print"] = {
  init: function () {
    this.appendValueInput("print_value")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLORS.serial);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

arduinoGenerator.forBlock["serial_print"] = function (block) {
  const print_value = arduinoGenerator.valueToCode(
    block,
    "print_value",
    Order.ATOMIC
  );
  const code = `Serial.print(${print_value});\n`;
  return code;
};

Blockly.Blocks["serial_println"] = {
  init: function () {
    this.appendValueInput("print_value")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINTLN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLORS.serial);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

arduinoGenerator.forBlock["serial_println"] = function (block) {
  const print_value = arduinoGenerator.valueToCode(
    block,
    "print_value",
    Order.ATOMIC
  );
  const code = `Serial.println(${print_value});\n`;
  return code;
};
