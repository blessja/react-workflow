import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: "auto",
};

const CustomNode7: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#075985",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
        }}
      >
        <p style={{ padding: "10px", color: "white" }}>
          (x) Assign value to variable
        </p>
        <CheckBoxOutlineBlankIcon />
      </div>
    </>
  );
};

export default memo(CustomNode7);
