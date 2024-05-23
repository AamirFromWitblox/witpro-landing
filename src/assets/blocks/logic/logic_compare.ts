// import * as Blockly from 'blockly/core'
import { Order } from "../order";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

arduinoGenerator.forBlock["logic_compare"] = function (block) {
  let operator = block.getFieldValue("OP");
  const order = Order.RELATIONAL;

  const argument0 = arduinoGenerator.valueToCode(block, "A", order) || "0";
  const argument1 = arduinoGenerator.valueToCode(block, "B", order) || "0";

  switch (operator) {
    case "EQ":
      operator = "==";
      break;
    case "NEQ":
      operator = "!=";
      break;
    case "LT":
      operator = "<";
      break;
    case "LTE":
      operator = "<=";
      break;
    case "GT":
      operator = ">";
      break;
    case "GTE":
      operator = ">=";
      break;
    default:
      break;
  }

  const code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};
