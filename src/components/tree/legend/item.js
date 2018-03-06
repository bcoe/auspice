import React from "react";
import { updateTipRadii } from "../../../actions/tree";
import { dataFont, darkGrey } from "../../../globalStyles";
import { prettyString } from "../../../util/stringHelpers";

const LegendItem = ({
  dispatch,
  transform,
  legendRectSize,
  legendSpacing,
  rectStroke,
  rectFill,
  label,
  dFreq
}) => (
  <g
    transform={transform}
    onMouseEnter={() => {
      dispatch(updateTipRadii({selectedLegendItem: label}));
    }}
    onMouseLeave={() => {
      dispatch(updateTipRadii());
    }}
  >
    <rect
      style={{strokeWidth: 2}}
      width={legendRectSize}
      height={legendRectSize}
      fill={rectFill}
      stroke={rectStroke}
    />
    <text
      x={legendRectSize + legendSpacing + 5}
      y={legendRectSize - legendSpacing}
      style={{fontSize: 12, fill: darkGrey, fontFamily: dataFont}}
    >
      {prettyString(label, {multiplier: dFreq})}
    </text>
  </g>
);

export default LegendItem;
