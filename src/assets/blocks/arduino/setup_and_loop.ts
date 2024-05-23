import * as Blockly from "blockly/core";
import { COLORS } from "@/utils/blockColors";
import { arduinoGenerator } from "@/utils/arduinoGenerator";
Blockly.Blocks["setup_and_loop"] = {
  init: function () {
    this.appendStatementInput("SETUP_CODE")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_SETUP);
    this.appendStatementInput("LOOP_CODE")
      .setCheck(null)
      .appendField(Blockly.Msg.ARDUINO_LOOP);
    this.appendDummyInput();
    this.setColour(COLORS.arduino);
    this.setTooltip(
      "This block is used to define the setup and loop functions in Arduino. The setup function is called once when the program starts. The loop function is called repeatedly until the board is powered off."
    );
    this.setHelpUrl(
      "https://www.arduino.cc/reference/en/language/structure/sketch/setup/"
    );
  },
};

arduinoGenerator.forBlock["setup_and_loop"] = function (block) {
  const setupCode = arduinoGenerator.statementToCode(block, "SETUP_CODE");
  const loopCode = arduinoGenerator.statementToCode(block, "LOOP_CODE");

  return `void setup() {
${setupCode}}

void loop() {
${loopCode}}`;
};
