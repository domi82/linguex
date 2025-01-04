import { Button, Card, Image, Space } from "antd";
import styles from "./PostComponent.module.scss";
import blog from "../../resources/images/blog.svg";

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
  return (
    <Card className={styles.card} actions={[<p>{date}</p>]}>
      <Card.Meta
        avatar={
          <div className={styles.avatar}>
            <Image
              src={blog}
              alt="Contact"
              className={styles.image}
              preview={false}
            />
          </div>
        }
        title={
          <>
            <p className={styles.title}>{title}</p>
            <Space>
              <Button type="dashed" size="large" className={styles.buttons}>
                {label}
              </Button>
            </Space>
          </>
        }
      />
      {content && <p>{content}</p>}
      {heading1 && <h4>{heading1}</h4>}
      {content1 && <p>{content1}</p>}
      {heading2 && <h4>{heading2}</h4>}
      {content2 && <p>{content2}</p>}
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
