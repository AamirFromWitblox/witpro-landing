// import * as Blockly from 'blockly/core'
import { Order } from "../order";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

arduinoGenerator.forBlock["controls_if"] = function (block) {
  let code =
    "if (" + arduinoGenerator.valueToCode(block, "IF0", Order.NONE) + ") {\n";
  code += arduinoGenerator.statementToCode(block, "DO0");
  code += "}\n";

  // If there's an 'else if' block
  // @ts-ignore
  for (let i = 1; i <= block.elseifCount_; i++) {
    code +=
      "else if (" +
      arduinoGenerator.valueToCode(block, "IF" + i, Order.NONE) +
      ") {\n";
    code += arduinoGenerator.statementToCode(block, "DO" + i);
    code += "}\n";
  }

  // If there's an 'else' block
  // @ts-ignore
  if (block.elseCount_) {
    code += "else {\n";
    code += arduinoGenerator.statementToCode(block, "ELSE");
    code += "}\n";
  }

  return code;
};
