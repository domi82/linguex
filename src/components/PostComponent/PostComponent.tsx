import { Button, Card, Image, Space } from "antd";
import styles from "./PostComponent.module.scss";
import blog from "../../resources/images/blog.svg";
import x from "../../resources/images/x-icon.svg";
import useResponsiveLayout from "../LayoutComponent/UseResponsiveLayout/UseResponsiveLayout";

const PostComponent: React.FC<Props> = (props) => {
  const {
    date,
    label,
    title,
    content,
    heading1,
    content1,
    heading2,
    content2,
  } = props;

  /*** HOOKS ***/

  const [desktop] = useResponsiveLayout();

  /*** VISUAL ***/

  return (
    <Card
      className={desktop ? styles.card : styles.mobileCard}
      actions={[<div className={styles.date}>{date}</div>]}
    >
      <Card.Meta
        avatar={
          <div className={styles.avatar}>
            {desktop ? (
              <Image
                src={blog}
                alt="blog"
                className={styles.image}
                preview={false}
              />
            ) : (
              <Image
                src={x}
                alt="blog"
                className={styles.mobileImage}
                preview={false}
              />
            )}
          </div>
        }
        title={
          <>
            <p className={styles.title}>{title}</p>
            <Space>
              <Button
                type="dashed"
                size={desktop ? "large" : "small"}
                className={styles.buttons}
              >
                {label}
              </Button>
            </Space>
          </>
        }
      />
      <div className={styles.description}>
        {content && <p>{content}</p>}
        {heading1 && <h4>{heading1}</h4>}
        {content1 && <p>{content1}</p>}
        {heading2 && <h4>{heading2}</h4>}
        {content2 && <p>{content2}</p>}
      </div>
    </Card>
  );
};
export default PostComponent;

interface Props {
  date?: string;
  label: string;
  title: string;
  content: string;
  heading1?: string;
  content1?: string;
  heading2?: string;
  content2?: string;
}
