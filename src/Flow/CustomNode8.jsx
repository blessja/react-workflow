import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import MergeTypeIcon from "@material-ui/icons/MergeType";

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: "auto",
};

const CustomNode8: FC<NodeProps> = ({ data, xPos, yPos }) => {
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
        <div
          style={{
            backgroundColor: "#475569",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
          }}
        >
          <MergeTypeIcon />
        </div>
        <div>
          <p>
            <p style={{ color: "yellow" }}>{data.label}</p>
            If <strong>condition</strong> then
          </p>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={sourceHandleStyleA}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={sourceHandleStyleB}
      />
    </>
  );
};

export default memo(CustomNode8);
