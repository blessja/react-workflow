import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import CodeIcon from "@material-ui/icons/Code";

const sourceHandleStyleA: CSSProperties = { left: 54 };

const StartNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <div className="start">
        <p style={{ color: "#166534" }}>{data.label}</p>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={sourceHandleStyleA}
      />
    </>
  );
};

export default memo(StartNode);
