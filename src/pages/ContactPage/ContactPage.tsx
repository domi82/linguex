import { MailOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
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
      <Row>
        <Col
          className={styles.contactDetails}
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={12}
        >
          <h2>
            <FormattedMessage id="contact.header" />
          </h2>
          <p>
            <FormattedMessage id="contact.description.1" />
          </p>
          <p>
            <FormattedMessage id="contact.description.2" />
          </p>
          <div className={styles.email}>
            <MailOutlined className={styles.icon} />
            <a href="mailto:info@linguex.eu">info@linguex.eu</a>
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
    </PublicLayoutComponent>
  );
};
export default ContactPage;
