import { useBlocklyWorkspace } from "react-blockly";
import * as Blockly from "blockly/core";
import { shadowBlockConversionChangeListener } from "@blockly/shadow-block-converter";
import { useTranslation } from "react-i18next";
import { arduinoGenerator } from "@/utils/arduinoGenerator";
import { initBlocklyLang } from "@/utils/initBlocklyLang";
import { toolbox } from "@/assets/toolbox";
import { useRef } from "react";

function BlocklyComponent() {
  const blocklyRef = useRef(null);
  const { i18n } = useTranslation();

  initBlocklyLang(i18n.language);

  const { workspace } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolbox,
    onWorkspaceChange: workspaceDidChange,
    workspaceConfiguration: {
      grid: {
        spacing: 20,
        length: 3,
        colour: "#ccc",
        snap: true,
      },
      sounds: true,
      scrollbars: false,
      zoom: {
        pinch: true,
        controls: true,
      },
    },
  });

  function workspaceDidChange(newWorkspace: Blockly.WorkspaceSvg) {
    newWorkspace.addChangeListener(shadowBlockConversionChangeListener);
    if (newWorkspace.isDragging()) return; // Don't update while changes are happening.

    const code = arduinoGenerator.workspaceToCode(newWorkspace);
    const jsonCode = Blockly.serialization.workspaces.save(newWorkspace);
    // onCodeChange(code, JSON.stringify(jsonCode));
  }

  return (
    <>
      <div ref={blocklyRef} className="h-full w-full" />
    </>
  );
}

export default BlocklyComponent;
