import {
  RocketOutlined,
  SmileOutlined,
  SunOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import { Col, Row, Timeline } from "antd";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import PublicLayoutComponent from "../../components/LayoutComponent/PublicLayoutComponent/PublicLayoutComponent";
import useResponsiveLayout from "../../components/LayoutComponent/UseResponsiveLayout/UseResponsiveLayout";
import styles from "./AboutPage.module.scss";

/**
 * Returns the about page.
 * @returns the about page.
 */
const AboutPage: React.FC = () => {
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
        <Col className={styles.heading} span={24}>
          <h3>
            <FormattedMessage id="about.header" />
          </h3>
          <p>
            <FormattedMessage id="about.description1" />
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={10} className={styles.description}>
          <p>
            <FormattedMessage id="about.description2" />
          </p>
          <p>
            <FormattedMessage id="about.description3" />
          </p>
          <p>
            <FormattedMessage id="about.description4" />
          </p>
        </Col>
        <Col span={14} className={styles.timeline}>
          <Timeline
            className={styles.timeline}
            items={[
              {
                dot: <SunOutlined style={{ fontSize: "35px" }} />,
                children: "I was born on July 14th, 1982",
              },
              {
                children: `I got my MA in English from Gdansk University in 2007`,
                color: "gray",
              },
              {
                dot: <TruckOutlined style={{ fontSize: "35px" }} />,
                children:
                  "I moved to Luxembourg in 2010, where I worked as a Content Editor for 6 years.",
              },
              {
                color: "gray",
                children:
                  "In 2016 I set up my own company, where I provided technical writing and content editing services.",
              },
              {
                dot: <SmileOutlined style={{ fontSize: "30px" }} />,
                children:
                  "In 2018 I moved (again!) to Cracow, where I started to work as a Technical Writer for Cisco.",
              },
              {
                color: "gray",
                children:
                  "In 2019 I started to work for the Jira team at Cisco. This was one of the most important events in my professional career as it sparked my interest in software.",
              },
              {
                dot: <RocketOutlined style={{ fontSize: "40px" }} />,
                children:
                  "In 2019 I took up a Cisco Devnet course and then started learning Javascript and React.",
              },
              {
                color: "gray",
                children:
                  "I left Cisco and started to work as a Junior Frontend Developer.",
              },
            ]}
          />
        </Col>
      </Row>
    </PublicLayoutComponent>
  );
};
export default AboutPage;
