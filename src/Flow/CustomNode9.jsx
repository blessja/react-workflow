import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import AssessmentIcon from "@material-ui/icons/Assessment";

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 20,
  left: "auto",
};

const CustomNode9: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <Handle type="target/source" position={Position.Top} />
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
          <AssessmentIcon />
        </div>
        <div>
          <p
            style={{
              padding: "10px",
              width: "50px",
              fontSize: "18px",
              color: "white",
            }}
          >
            {data.label}
          </p>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Bottom}
        id="a"
        style={sourceHandleStyleA}
      />
      <Handle
        className="ha"
        type="target"
        position={Position.Bottom}
        id="b"
        style={sourceHandleStyleB}
      />
    </>
  );
};

export default memo(CustomNode9);
