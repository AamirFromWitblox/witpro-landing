import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import React from "react";

interface IProps {
  code: string;
}
const SourceCodeBlock: React.FC<IProps> = ({ code }) => {
  const { t } = useTranslation();
  const appTexts = t("app");

  const handleCodeCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-t-md bg-slate-600 p-1 px-2 text-white">
        <h3 className="text-lg">Source Code</h3>
        <Tooltip title="Copy Source Code">
          <IconButton sx={{ color: "white" }} onClick={handleCodeCopy}>
            <ContentPasteOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div
        className="overflow-hidden"
        style={{
          height: `calc(100% - 3rem)`,
        }}
      >
        <textarea
          disabled
          defaultValue={code}
          className="h-full w-full resize-none p-2 leading-4"
        />
      </div>
    </>
  );
};

export default SourceCodeBlock;
