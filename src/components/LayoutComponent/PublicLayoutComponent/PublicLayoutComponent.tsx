import { Col, Layout, Row, Space } from "antd";
import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "./../../../resources/images/logo.svg";
import { ReactComponent as XIcon } from "./../../../resources/images/x-icon.svg";

import { FormattedMessage } from "react-intl";
import useResponsiveLayout from "../UseResponsiveLayout/UseResponsiveLayout";
import styles from "./PublicLayoutComponent.module.scss";

const { Header, Footer } = Layout;

const PublicLayoutComponent: React.FC<Props> = (props) => {
  const { children } = props;

  /*** HOOKS ***/

  const [desktop] = useResponsiveLayout();

  /*** EFFECTS ***/

  /*** METHODS ***/

  /*** COMPONENTS ***/

  return (
    <Layout className={styles.layout}>
      <Header className={desktop ? styles.header : styles.mobileHeader}>
        <Link to="/" className={styles.logo}>
          {desktop ? <LogoIcon /> : <XIcon />}
        </Link>
        <Space size="large" className={styles.options}>
          <Link to="/about" className={styles.item}>
            <span>
              <FormattedMessage id="home.about.link" />
            </span>
          </Link>
          {desktop && (
            <Link to="/projects" className={styles.item}>
              <span>
                <FormattedMessage id="home.projects.link" />
              </span>
            </Link>
          )}
          <Link to="/blog" className={styles.item}>
            <span>
              <FormattedMessage id="home.blog.link" />
            </span>
          </Link>
          <Link to="/contact" className={styles.item}>
            <span>
              <FormattedMessage id="home.contact.link" />
            </span>
          </Link>
        </Space>
      </Header>
      <Row justify="center" className={styles.content}>
        <Col span={24}>{children}</Col>
      </Row>
      <Footer className={desktop ? styles.footer : styles.mobileFooter}>
        <div className={styles.copyright}>©2025 Dominika Szczes</div>
      </Footer>
    </Layout>
  );
};
export default PublicLayoutComponent;

interface Props extends PropsWithChildren {}
