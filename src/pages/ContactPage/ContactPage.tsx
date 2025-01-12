import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Col, Image, Row, Space } from "antd";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import PublicLayoutComponent from "../../components/LayoutComponent/PublicLayoutComponent/PublicLayoutComponent";
import useResponsiveLayout from "../../components/LayoutComponent/UseResponsiveLayout/UseResponsiveLayout";
import contact from "../../resources/images/contact.svg";
import styles from "./ContactPage.module.scss";

/**
 * Returns the contact page.
 * @returns the contact page.
 */
const ContactPage: React.FC = () => {
  /*** HOOKS ***/

  const [desktop] = useResponsiveLayout();

  // initialize app
  useEffect(() => {
    const init = async () => {};
    init();
  }, []);

  /*** METHODS ***/

  /*** VISUAL ***/

  return (
    <PublicLayoutComponent>
      <div className={`${styles.container} ${!desktop && styles.mobile}`}>
        <Row>
          <Col
            className={styles.contactDetails}
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={12}
          >
            <h3>
              <FormattedMessage id="contact.header" />
            </h3>
            <p>
              <FormattedMessage id="contact.description.1" />
            </p>
            <p>
              <FormattedMessage id="contact.description.2" />
            </p>
            <p>
              <FormattedMessage id="contact.description.3" />
            </p>
            <div className={styles.email}>
              <Space size={"large"}>
                <a href="mailto:szczes@gmail.com">
                  <MailOutlined />
                </a>
                <a href="https://www.linkedin.com/in/dominika-szcze%C5%9B-93ba2148/">
                  <LinkedinOutlined className={styles.icon} />
                </a>
                <a href="https://github.com/domi82">
                  <GithubOutlined />
                </a>
              </Space>
            </div>
          </Col>
          <Col
            className={styles.imageContainer}
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={12}
          >
            <Image
              src={contact}
              alt="Contact"
              className={styles.image}
              preview={false}
            />
          </Col>
        </Row>
      </div>
    </PublicLayoutComponent>
  );
};
export default ContactPage;
