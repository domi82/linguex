import { Col, Row } from "antd";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar";
import PublicLayoutComponent from "../../components/LayoutComponent/PublicLayoutComponent/PublicLayoutComponent";
import useResponsiveLayout from "../../components/LayoutComponent/UseResponsiveLayout/UseResponsiveLayout";
import PostComponent from "../../components/PostComponent/PostComponent";
import posts from "../../data/posts";
import styles from "./BlogPage.module.scss";

/**
 * Returns the blog page.
 * @returns the blog page.
 */
const BlogPage: React.FC = () => {
  /*** HOOKS ***/

  const [desktop] = useResponsiveLayout();
  const [selectedPost, setSelectedPost] = useState<string>("Using Stash");

  /*** METHODS ***/
  const onSelect = (title: string) => {
    setSelectedPost(title);
  };

  /*** VISUAL ***/

  return (
    <div className={styles.background}>
      <PublicLayoutComponent>
        <div className={`${styles.container} ${!desktop && styles.mobile}`}>
          <Row>
            <Col className={styles.heading} span={24}>
              <h3>
                <FormattedMessage id="blog.header" />
              </h3>
              <p>
                <FormattedMessage id="blog.description" />
              </p>
            </Col>
          </Row>

          <Row className={styles.posts}>
            <Col xs={24} md={24} lg={6}>
              <BlogSidebar onSelect={onSelect} />
            </Col>
            {posts
              .filter((p) => p.title === selectedPost)
              .map((p) => (
                <Col xs={24} md={24} lg={18}>
                  <PostComponent
                    id={p.id}
                    date={p.date}
                    label={p.label!}
                    title={p.title!}
                    content={p.content!}
                    heading1={p.heading1}
                    content1={p.content1}
                    code1={p.code1}
                    code2={p.code2}
                    heading2={p.heading2}
                    content2={p.content2}
                    heading3={p.heading3}
                    content3={p.content3}
                    heading4={p.heading4}
                    content4={p.content4}
                  />
                </Col>
              ))}
          </Row>
        </div>
      </PublicLayoutComponent>
    </div>
  );
};

export default BlogPage;
