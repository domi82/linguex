import { Col, Image, Layout, Row, Space } from "antd";
import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "./../../../resources/images/logo.svg";

import styles from "./PublicLayoutComponent.module.scss";
import { FormattedMessage } from "react-intl";
import useResponsiveLayout from "../UseResponsiveLayout/UseResponsiveLayout";

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
      <Header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <LogoIcon />{" "}
        </Link>
        <Space size="large" className={styles.options}>
          <Link to="/about" className={styles.item}>
            <span>
              <FormattedMessage id="home.about.link" />
            </span>
          </Link>
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
        <div>
          <Space className={styles.links} size="large">
            <Link to="/legal-notice" className={styles.link}>
              <FormattedMessage id="footer.legalNotice" />
            </Link>
            <Link to="/privacy-policy" className={styles.link}>
              <FormattedMessage id="footer.privacyPolicy" />
            </Link>
          </Space>
        </div>
        <div className={styles.copyright}>©2024 Dominika Szczes</div>
      </Footer>
    </Layout>
  );
};
export default PublicLayoutComponent;

interface Props extends PropsWithChildren {}
