import { Button, Card, Image, Space } from "antd";
import styles from "./BlogPostPage.module.scss";
import blog from "../../resources/images/blog.svg";
import x from "../../resources/images/x-icon.svg";
import useResponsiveLayout from "../../components/LayoutComponent/UseResponsiveLayout/UseResponsiveLayout";
import { useEffect, useState } from "react";
import { Post } from "../../models/Entities";
import { Link, useParams } from "react-router-dom";
import posts from "../../data/posts";

const BlogPostPage: React.FC = () => {
  /*** HOOKS ***/

  const [desktop] = useResponsiveLayout();
  const [, setLoading] = useState<"loading">();
  const [post, setPost] = useState<Post>();
  const params = useParams<ParamsType>();

  useEffect(() => {
    const init = async () => {
      try {
        setLoading("loading");
        const post = posts.find((p) => p.id === +params.id!);
        setPost(post);
        console.log("post", post);
      } catch (error) {
        //alertService.displayError(error, intl);
      } finally {
        setLoading(undefined);
      }
    };
    init();
  }, [params.id]);

  /*** VISUAL ***/

  return post ? (
    <Card
      className={desktop ? styles.card : styles.mobileCard}
      actions={[<div className={styles.date}>{post!.date}</div>]}
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
            <p className={styles.title}>{post!.title}</p>
            <Space>
              <Button
                type="dashed"
                size={desktop ? "large" : "small"}
                className={styles.buttons}
              >
                {post!.label}
              </Button>
            </Space>
          </>
        }
      />
      <div className={styles.description}>
        {post!.content && <p>{post!.content}</p>}
        {post!.heading1 && <h4>{post!.heading1}</h4>}
        {post!.content1 && <p>{post!.content1}</p>}
        {post!.code1 && <p className={styles.code}>{post!.code1}</p>}
        {post!.code2 && <p className={styles.code}>{post!.code2}</p>}
        {post!.heading2 && <h4>{post!.heading2}</h4>}
        {post!.content2 && <p>{post!.content2}</p>}
        {post!.heading3 && <h4>{post!.heading3}</h4>}
        {post!.content3 && <p>{post!.content3}</p>}
        {post!.heading4 && <h4>{post!.heading4}</h4>}
        {post!.content4 && <p>{post!.content4}</p>}
      </div>
      <Link to={"/blog"}>
        <Button>Back to posts</Button>
      </Link>
    </Card>
  ) : (
    <div></div>
  );
};
export default BlogPostPage;

type ParamsType = { id: string };
