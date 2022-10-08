import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import MergeTypeIcon from "@material-ui/icons/MergeType";

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: "auto",
};

const CustomNode10: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="start">
          <p style={{ color: "#166534" }}>{data.label}</p>
        </div>
      </div>
    </>
  );
};

export default memo(CustomNode10);
