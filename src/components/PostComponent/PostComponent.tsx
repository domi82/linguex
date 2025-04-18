import { Button, Card, Image, Space } from "antd";
import styles from "./PostComponent.module.scss";
import blog from "../../resources/images/blog.svg";
import x from "../../resources/images/x-icon.svg";
import useResponsiveLayout from "../LayoutComponent/UseResponsiveLayout/UseResponsiveLayout";
import { Link } from "react-router-dom";

const PostComponent: React.FC<Props> = (props) => {
  const {
    id,
    date,
    label,
    title,
    content,
    heading1,
    content1,
    code1,
    code2,
    heading2,
    content2,
    heading3,
    content3,
    heading4,
    content4,
  } = props;

  /*** HOOKS ***/

  const [desktop] = useResponsiveLayout();
  console.log("id", id);
  console.log("date", date);

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
        {code1 && <p className={styles.code}>{code1}</p>}
        {code2 && <p className={styles.code}>{code2}</p>}
        {heading2 && <h4>{heading2}</h4>}
        {content2 && <p>{content2}</p>}
        {heading3 && <h4>{heading3}</h4>}
        {content3 && <p>{content3}</p>}
        {heading4 && <h4>{heading4}</h4>}
        {content4 && <p>{content4}</p>}
      </div>
      <Link to={`/blog/${id}`}>
        <Button>Read more</Button>
      </Link>
    </Card>
  );
};
export default PostComponent;

interface Props {
  id?: number;
  date?: string;
  label: string;
  title: string;
  content: string;
  heading1?: string;
  content1?: string;
  code1?: string;
  code2?: string;
  heading2?: string;
  content2?: string;
  heading3?: string;
  content3?: string;
  heading4?: string;
  content4?: string;
}
