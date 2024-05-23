import * as Blockly from "blockly/core";

export const arduinoGenerator = new Blockly.Generator("Arduino");

// @ts-ignore
arduinoGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + arduinoGenerator.blockToCode(nextBlock);
  }
  return code;
};
