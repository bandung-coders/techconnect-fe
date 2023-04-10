// React
import React from "react";

// Hooks
import { useDynamicSvg } from "@/features/app/hooks";

const AppSvg: React.FC = ({ iconName, svgProp }) => {
  const { loading, SvgIcon } = useDynamicSvg(iconName);

  return (
    <>
      <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8">
        load
      </div>
      {SvgIcon && <SvgIcon {...svgProp} />}
    </>
  );
};

export default AppSvg;
