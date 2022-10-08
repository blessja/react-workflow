import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import CodeIcon from "@material-ui/icons/Code";

const sourceHandleStyleA: CSSProperties = { left: 300 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: "auto",
};

const CustomNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
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
            backgroundColor: "#facc15",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
          }}
        >
          <CodeIcon />
        </div>
        <div>
          <p style={{ color: "yellow", margin: "20px" }}>{data.label}</p>
          <p
            style={{
              width: "auto",
              fontSize: "18px",
              color: "white",
              margin: "20px",
            }}
          >
            x=
            {
              "{List1:[{name:'blessing',surname:'jackson'}{name:'bless',surname:'jack'}]}"
            }
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

export default memo(CustomNode);
