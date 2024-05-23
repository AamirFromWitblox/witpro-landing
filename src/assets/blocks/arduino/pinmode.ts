import * as Blockly from "blockly/core";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

Blockly.Blocks["pinmode"] = {
  init: function () {
    this.appendValueInput("Label")
      .setCheck("label")
      .appendField(Blockly.Msg.ARDUINO_PINMODE_1)
      .appendField(new Blockly.FieldTextInput("13"), "pinNumber")
      .appendField(Blockly.Msg.ARDUINO_PINMODE_2)
      .appendField(
        new Blockly.FieldDropdown([
          ["Out", "OUTPUT"],
          ["In", "INPUT"],
        ]),
        "pinType"
      )
      .appendField(Blockly.Msg.ARDUINO_PINMODE_3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLORS.arduino);
    this.setTooltip("");
    this.setHelpUrl(
      "https://www.arduino.cc/reference/en/language/functions/digital-io/pinmode/"
    );
  },
};

arduinoGenerator.forBlock["pinmode"] = function (block) {
  const number_pinmode = block.getFieldValue("pinNumber");
  const pin_type = block.getFieldValue("pinType");

  const code = "pinMode(" + number_pinmode + ", " + pin_type + ");\n";
  return code;
};
