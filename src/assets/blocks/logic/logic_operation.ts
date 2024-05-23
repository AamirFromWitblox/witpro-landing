// import * as Blockly from 'blockly/core'
import { Order } from "../order";

import { arduinoGenerator } from "@/utils/arduinoGenerator";

arduinoGenerator.forBlock["logic_operation"] = function (block) {
  const operator = block.getFieldValue("OP");
  const order = operator === "AND" ? Order.LOGICAL_AND : Order.LOGICAL_OR;

  const argument0 = arduinoGenerator.valueToCode(block, "A", order) || "false";
  const argument1 = arduinoGenerator.valueToCode(block, "B", order) || "false";

  const code = argument0 + " " + operator.toLowerCase() + " " + argument1;
  return [code, order];
};
