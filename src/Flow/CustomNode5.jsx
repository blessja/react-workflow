import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const sourceHandleStyleA: CSSProperties = { left: 100 };
const sourceHandleStyleB: CSSProperties = {
  right: 20,
  left: "auto",
};
const sourceHandleStyleC: CSSProperties = { left: 30 };

const CustomNode5: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={sourceHandleStyleA}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundColor: "#38bdf8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
          }}
        >
          <CheckCircleOutlineIcon />
        </div>
        <div style={{ backgroundColor: "#3f3f46", width: "150px" }}>
          <p className="ct" style={{ color: "white", padding: "10px" }}>
            Execute js code
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
        className="ha"
        type="source"
        position={Position.Bottom}
        id="b"
        style={sourceHandleStyleB}
      />
    </>
  );
};

export default memo(CustomNode5);
