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
    <PublicLayoutComponent>
      <div className={styles.background}>
        <Row>
          <Col className={styles.heading} span={24}>
            <h2>
              <FormattedMessage id="blog.header" />
            </h2>
            <p>
              <FormattedMessage id="blog.description" />
            </p>
          </Col>
        </Row>

        <Row className={styles.posts}>
          <Col xs={6} md={6} lg={6}>
            <BlogSidebar onSelect={onSelect} />
          </Col>
          {posts
            .filter((p) => p.title === selectedPost)
            .map((p) => (
              <Col xs={18} md={18} lg={18}>
                <PostComponent
                  date={p.date}
                  label={p.label!}
                  title={p.title!}
                  content={p.content!}
                  heading1={p.heading1}
                  content1={p.content1}
                  heading2={p.heading2}
                  content2={p.content2}
                />
              </Col>
            ))}
        </Row>
      </div>
    </PublicLayoutComponent>
  );
};

export default BlogPage;
