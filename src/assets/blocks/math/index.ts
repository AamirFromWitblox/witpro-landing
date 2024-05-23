// import * as Blockly from 'blockly/core'
import { Order } from "../order";

import { arduinoGenerator } from "@/utils/arduinoGenerator";

// @ts-ignore
arduinoGenerator.forBlock["math_number"] = function (block) {
  const number = block.getFieldValue("NUM");
  const code = parseFloat(number);
  return [code, Order.ATOMIC];
};

arduinoGenerator.forBlock["math_arithmetic"] = function (block) {
  const operator = block.getFieldValue("OP");
  const operand1 =
    arduinoGenerator.valueToCode(block, "A", Order.ATOMIC) || "0";
  const operand2 =
    arduinoGenerator.valueToCode(block, "B", Order.ATOMIC) || "0";

  const code = "(" + operand1 + " " + operator + " " + operand2 + ")";
  return [code, Order.ATOMIC];
};

arduinoGenerator.forBlock["math_number_property"] = function (block) {
  const operation = block.getFieldValue("OP");
  const number =
    arduinoGenerator.valueToCode(block, "NUM", Order.ATOMIC) || "0";

  let code;
  switch (operation) {
    case "ROUND":
      code = "Math.round(" + number + ")";
      break;
    case "ROUNDUP":
      code = "Math.ceil(" + number + ")";
      break;
    case "ROUNDDOWN":
      code = "Math.floor(" + number + ")";
      break;
    default:
      code = "0";
  }

  return [code, Order.FUNCTION_CALL];
};

arduinoGenerator.forBlock["math_round"] = function (block) {
  const operation = block.getFieldValue("OP");
  const number =
    arduinoGenerator.valueToCode(block, "NUM", Order.ATOMIC) || "0";

  let code;
  switch (operation) {
    case "ROUND":
      code = "Math.round(" + number + ")";
      break;
    case "ROUNDUP":
      code = "Math.ceil(" + number + ")";
      break;
    case "ROUNDDOWN":
      code = "Math.floor(" + number + ")";
      break;
    default:
      code = "0";
  }

  return [code, Order.FUNCTION_CALL];
};

arduinoGenerator.forBlock["math_random_int"] = function (block) {
  const fromNumber =
    arduinoGenerator.valueToCode(block, "FROM", Order.ATOMIC) || "0";
  const toNumber =
    arduinoGenerator.valueToCode(block, "TO", Order.ATOMIC) || "0";

  const code =
    "Math.floor(Math.random() * (" +
    toNumber +
    " - " +
    fromNumber +
    " + 1) + " +
    fromNumber +
    ")";
  return [code, Order.FUNCTION_CALL];
};
