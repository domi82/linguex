import { Col, Divider, Image, Row } from "antd";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import PublicLayoutComponent from "../../components/LayoutComponent/PublicLayoutComponent/PublicLayoutComponent";
import useResponsiveLayout from "../../components/LayoutComponent/UseResponsiveLayout/UseResponsiveLayout";
import agrisensImage from "../../resources/images/agrisens-image.svg";
import taxfenImage from "../../resources/images/taxfen-image.svg";
import styles from "./ProjectsPage.module.scss";

/**
 * Returns the projects page.
 * @returns the projects page.
 */
const ProjectsPage: React.FC = () => {
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
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            className={styles.header}
          >
            <h3>
              <FormattedMessage id="projects.header" />
            </h3>
            <p>
              <FormattedMessage id="projects.description.1" />
            </p>
            <Divider
              orientation="left"
              orientationMargin="0"
              className={styles.divider}
            >
              Commercial projects
            </Divider>
          </Col>
          <Col
            className={styles.project1}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <p>
              <FormattedMessage id="project.1.description" />
            </p>
          </Col>
          <Col
            className={styles.imageContainer}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <Image
              src={agrisensImage}
              alt="AgriSens image"
              className={styles.image}
              preview={false}
            />
          </Col>
        </Row>
        <Row>
          <Col
            className={styles.imageContainer2}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <Image
              src={taxfenImage}
              alt="Taxfen image"
              className={styles.image}
              preview={false}
            />
          </Col>
          <Col
            className={styles.project2}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <p>
              <FormattedMessage id="project.2.description" />
            </p>
          </Col>
        </Row>
      </div>
    </PublicLayoutComponent>
  );
};
export default ProjectsPage;
