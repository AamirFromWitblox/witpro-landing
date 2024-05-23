import { Order } from "../order";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

arduinoGenerator.forBlock["controls_repeat_ext"] = function (block) {
  const repeats =
    arduinoGenerator.valueToCode(block, "TIMES", Order.ASSIGNMENT) || "0";
  const branch = arduinoGenerator.statementToCode(block, "DO");
  const code = "for (int i = 0; i < " + repeats + "; i++) {\n" + branch + "}\n";
  return code;
};

arduinoGenerator.forBlock["controls_whileUntil"] = function (block) {
  const mode = block.getFieldValue("MODE");
  const condition =
    arduinoGenerator.valueToCode(block, "BOOL", Order.ATOMIC) || "false";
  const branch = arduinoGenerator.statementToCode(block, "DO");

  if (mode === "UNTIL") {
    return "while (!(" + condition + ")) {\n" + branch + "}\n";
  } else {
    return "while (" + condition + ") {\n" + branch + "}\n";
  }
};

arduinoGenerator.forBlock["controls_flow_statements"] = function (block) {
  const value = block.getFieldValue("FLOW");
  const code = value === "BREAK" ? "break;\n" : "continue;\n";
  return code;
};
