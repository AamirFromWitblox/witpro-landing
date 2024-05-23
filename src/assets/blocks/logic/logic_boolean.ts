import { Order } from "../order";
import { arduinoGenerator } from "@/utils/arduinoGenerator";

arduinoGenerator.forBlock["logic_boolean"] = function (block) {
  const code = block.getFieldValue("BOOL") === "TRUE" ? "true" : "false";
  return [code, Order.ATOMIC];
};
