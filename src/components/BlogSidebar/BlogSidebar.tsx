import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { MenuProps } from "antd/lib";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import posts from "../../data/posts";

const BlogSidebar: React.FC<Props> = (props) => {
  const { onSelect } = props;

  const onClick: MenuProps["onClick"] = (e) => {
    onSelect(e.key);
  };

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      key: "sub1",
      label: <FormattedMessage id="blog.sidebar.title" />,
      icon: <AppstoreOutlined />,
      //TODO insert link button with onclick to setSelectedTitle
      children: posts.map((p) => ({
        key: p.title!,
        label: p.title!,
      })),
    },
  ];

  return (
    <div>
      <Menu
        onClick={onClick}
        style={{ borderRadius: 15 }}
        theme="light"
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};
export default BlogSidebar;
interface Props {
  onSelect: (selectedTitle: string) => void;
}
