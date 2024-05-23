import "@/assets/blocks";
import "@blockly/toolbox-search";
import { COLORS } from "@/utils/blockColors";

export const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "search",
      name: "Search",
      contents: [],
    },
    {
      kind: "category",
      name: "In/Out",
      colour: COLORS.in_out,
      contents: [
        {
          kind: "block",
          type: "digital_read",
          inputs: {
            Label: {
              shadow: {
                type: "label",
                fields: {
                  label: "LED",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "digital_write",
          inputs: {
            Label: {
              shadow: {
                type: "label",
                fields: {
                  label: "LED",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "analog_read",
          inputs: {
            Label: {
              shadow: {
                type: "label",
                fields: {
                  label: "LED",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "analog_write",
          inputs: {
            Label: {
              shadow: {
                type: "label",
                fields: {
                  label: "LED",
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Arduino",
      colour: COLORS.arduino,
      contents: [
        {
          kind: "block",
          type: "setup_and_loop",
        },
        {
          kind: "block",
          type: "pinmode",
          inputs: {
            Label: {
              shadow: {
                type: "label",
                fields: {
                  label: "LED",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "delay",
        },
        {
          kind: "block",
          type: "map",
        },
      ],
    },
    {
      kind: "category",
      name: "Serial",
      colour: COLORS.serial,
      contents: [
        {
          kind: "block",
          type: "serial_available",
        },
        {
          kind: "block",
          type: "serial_println",
        },
        {
          kind: "block",
          type: "serial_print",
        },
        {
          kind: "block",
          type: "serial_flush",
        },
      ],
    },
    {
      kind: "category",
      name: "String",
      colour: "#2369cd",
      contents: [
        {
          kind: "block",
          type: "declare_string",
        },
        {
          kind: "block",
          type: "label",
        },
      ],
    },
    {
      kind: "category",
      name: "Logic",
      colour: COLORS.logic,
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      colour: COLORS.loops,
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "controls_whileUntil",
        },
        {
          kind: "block",
          type: "controls_flow_statements",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      colour: COLORS.math,
      contents: [
        {
          kind: "block",
          type: "math_number",
        },
        {
          kind: "block",
          type: "math_arithmetic",
        },
        {
          kind: "block",
          type: "math_number_property",
        },
        {
          kind: "block",
          type: "math_round",
        },
        {
          kind: "block",
          type: "math_random_int",
        },
      ],
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "Variables",
      colour: COLORS.variables,
      custom: "VARIABLE",
    },
    // {
    //   kind: 'category',
    //   name: 'Variables',
    //   colour: COLORS.variables,
    //   contents: [
    //     {
    //       kind: 'block',
    //       type: 'variables_set'
    //     },
    //     {
    //       kind: 'block',
    //       type: 'variables_get'
    //     }
    //   ]
    // }
    // {
    //   kind: 'category',
    //   name: 'Servo',
    //   colour: COLORS.servo,
    //   contents: []
    // },
    // {
    //   kind: 'category',
    //   name: 'LCD',
    //   colour: COLORS.lcd,
    //   contents: []
    // }
  ],
};
