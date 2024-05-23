import Button from "@mui/material/Button";
import ForwardIcon from "@mui/icons-material/Forward";
import BackwardIcon from "@mui/icons-material/ArrowBack";
import { Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const isDev = process.env.NODE_ENV === "development";

const AppNav = () => {
  const { t } = useTranslation();
  const appTexts = t("app");

  return (
    <nav className="flex flex-row justify-between gap-2 bg-slate-600 p-2 shadow-lg">
      <div className="flex gap-2">
        <Tooltip title="Uploads the code to the device">
          <span>
            <Button variant="contained" size="small" endIcon={<ForwardIcon />}>
              Upload
            </Button>
          </span>
        </Tooltip>
      </div>

      <div className="flex">
        <Link href="/">
          <Button variant="contained" size="small" endIcon={<BackwardIcon />}>
            Go Back
          </Button>
        </Link>

        {isDev && (
          <Button variant="contained" size="small">
            Copy JSON
          </Button>
        )}
      </div>
    </nav>
  );
};

export default AppNav;
