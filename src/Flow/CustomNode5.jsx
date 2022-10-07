import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import GTranslateIcon from "@material-ui/icons/GTranslate";

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: "auto",
};

const CustomNode5: FC<NodeProps> = ({ data, xPos, yPos }) => {
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
            backgroundColor: "#38bdf8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
          }}
        >
          <GTranslateIcon />
        </div>
        <div style={{ backgroundColor: "#3f3f46" }}>
          <p style={{ color: "white" }}>Recognize text Google</p>
        </div>
        <div
          style={{
            backgroundColor: "#38bdf8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
          }}
        >
          <GTranslateIcon />
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

export default memo(CustomNode5);
