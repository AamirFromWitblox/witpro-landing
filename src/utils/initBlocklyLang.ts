import * as Blockly from "blockly/core";
import * as English from "blockly/msg/en";
import * as Hindi from "blockly/msg/hi";

export const initBlocklyLang = (lang: string) => {
  Blockly.setLocale(lang === "hi" ? Hindi : English);

  Blockly.Msg.ARDUINO_DELAY = "Wait for";
  Blockly.Msg.ARDUINO_DELAY_MS = "ms";
  Blockly.Msg.ARDUINO_PINMODE_1 = "Set Pin #";
  Blockly.Msg.ARDUINO_PINMODE_2 = "to";
  Blockly.Msg.ARDUINO_PINMODE_3 = "for";
  Blockly.Msg.ARDUINO_SETUP = "Setup";
  Blockly.Msg.ARDUINO_LOOP = "Loop";
  Blockly.Msg.ARDUINO_ANALOG_READ_1 = "Read intensity for";
  Blockly.Msg.ARDUINO_ANALOG_READ_2 = "on Pin #";
  Blockly.Msg.ARDUINO_ANALOG_WRITE_1 = "Change intensity for";
  Blockly.Msg.ARDUINO_ANALOG_WRITE_2 = "on Pin #";
  Blockly.Msg.ARDUINO_ANALOG_WRITE_3 = "to";
  Blockly.Msg.ARDUINO_DIGITAL_WRITE_1 = "Turn";
  Blockly.Msg.ARDUINO_DIGITAL_WRITE_2 = "on Pin #";
  Blockly.Msg.ARDUINO_DIGITAL_WRITE_3 = "for";
  Blockly.Msg.ARDUINO_DIGITAL_READ_1 = "Read";
  Blockly.Msg.ARDUINO_DIGITAL_READ_2 = "data on Pin #";
  Blockly.Msg.ARDUINO_DIGITAL_READ_3 = "";
  Blockly.Msg.ARDUINO_SERIAL_PRINT = "Print on same line";
  Blockly.Msg.ARDUINO_SERIAL_PRINTLN = "Print on new line";
  Blockly.Msg.ARDUINO_SERIAL_AVAILABLE = "Serial Available?";
  Blockly.Msg.ARDUINO_SERIAL_FLUSH = "Serial flush";
  Blockly.Msg.ARDUINO_VARIABLE_DECLARE_1 = "Declare";
  Blockly.Msg.ARDUINO_VARIABLE_DECLARE_2 = "as String Value";

  if (lang === "hi") {
    Blockly.Msg.ARDUINO_DELAY = "रुकिये";
    Blockly.Msg.ARDUINO_DELAY_MS = "मि.से.";
    Blockly.Msg.ARDUINO_PINMODE_1 = "पिन #";
    Blockly.Msg.ARDUINO_PINMODE_2 = "को";
    Blockly.Msg.ARDUINO_PINMODE_3 = "पर सेट करें";
    Blockly.Msg.ARDUINO_SETUP = "सेटअप";
    Blockly.Msg.ARDUINO_LOOP = "लूप";
    Blockly.Msg.ARDUINO_ANALOG_READ_1 = "इंटेंसिटी पढ़ें";
    Blockly.Msg.ARDUINO_ANALOG_READ_2 = "कि, पिन #";
    Blockly.Msg.ARDUINO_ANALOG_WRITE_1 = "इंटेंसिटी बदलें";
    Blockly.Msg.ARDUINO_ANALOG_WRITE_2 = "पिन #";
    Blockly.Msg.ARDUINO_ANALOG_WRITE_3 = "के लिए";
    Blockly.Msg.ARDUINO_DIGITAL_WRITE_1 = "";
    Blockly.Msg.ARDUINO_DIGITAL_WRITE_2 = "करें, पिन #";
    Blockly.Msg.ARDUINO_DIGITAL_WRITE_3 = "को";
    Blockly.Msg.ARDUINO_DIGITAL_READ_1 = "पढ़ें";
    Blockly.Msg.ARDUINO_DIGITAL_READ_2 = "डेटा, पिन #";
    Blockly.Msg.ARDUINO_DIGITAL_READ_3 = "पर";
    Blockly.Msg.ARDUINO_SERIAL_PRINT = "समान पंक्ति पर प्रिंट करें";
    Blockly.Msg.ARDUINO_SERIAL_PRINTLN = "नए पंक्ति पर प्रिंट करें";
    Blockly.Msg.ARDUINO_SERIAL_AVAILABLE = "सीरियल उपलब्ध है?";
    Blockly.Msg.ARDUINO_SERIAL_FLUSH = "सीरियल फ्लश";
    Blockly.Msg.ARDUINO_VARIABLE_DECLARE_1 = "घोषित करें";
    Blockly.Msg.ARDUINO_VARIABLE_DECLARE_2 = "के रूप में स्ट्रिंग मान";
  }
};
