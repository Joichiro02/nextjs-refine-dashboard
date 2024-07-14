import { getNameInitials } from "@/utilities";
import { Avatar as AntdAvatar, AvatarProps } from "antd";

type Props = AvatarProps & {
  name?: string;
}

export default function CustomAvatar({ name, style, ...props} : Props) {
  return (
    <AntdAvatar
      alt={name || "Mark Anthony"}
      size="small"
      style={{ 
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style
      }}
      {...props}
    >
      {getNameInitials(name || "")}
    </AntdAvatar>
  )
}
