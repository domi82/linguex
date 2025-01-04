import Icon, { MailOutlined } from "@ant-design/icons";
import { Button, Card, Carousel, Col, Image, Row, Space } from "antd";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import useResponsiveLayout from "../../components/LayoutComponent/UseResponsiveLayout/UseResponsiveLayout";
import portrait from "../../resources/images/portrait.svg";
import homeImage from "../../resources/images/home-image.svg";
import { ReactComponent as XIcon } from "../../resources/images/x-icon.svg";
import styles from "./HomePage.module.scss";
import PublicLayoutComponent from "../../components/LayoutComponent/PublicLayoutComponent/PublicLayoutComponent";

/**
 * Returns the home page.
 * @returns the home page.
 */
const HomePage: React.FC = () => {
  /*** HOOKS ***/

  const [desktop] = useResponsiveLayout();
  const [activeTabKey1, setActiveTabKey1] = useState<string>("tab1");
  const [activeTabKey2, setActiveTabKey2] = useState<string>("tab3");
  const [activeTabKey3, setActiveTabKey3] = useState<string>("tab5");

  /*** METHODS ***/

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };
  const onTab3Change = (key: string) => {
    setActiveTabKey3(key);
  };

  /*** VISUAL ***/

  const content1List: Record<string, React.ReactNode> = {
    tab1: <FormattedMessage id="home.projects.project1.summary" />,
    tab2: <FormattedMessage id="home.projects.project1.technologies" />,
  };

  const tab1List = [
    {
      key: "tab1",
      tab: "summary",
    },
    {
      key: "tab2",
      tab: "technologies",
    },
  ];

  const content2List: Record<string, React.ReactNode> = {
    tab3: <FormattedMessage id="home.projects.project2.description" />,
    tab4: <FormattedMessage id="home.projects.project2.technologies" />,
  };

  const tab2List = [
    {
      key: "tab3",
      tab: "summary",
    },
    {
      key: "tab4",
      tab: "technologies",
    },
  ];

  const content3List: Record<string, React.ReactNode> = {
    tab5: <FormattedMessage id="home.projects.project3.description" />,
    tab6: <FormattedMessage id="home.projects.project3.technologies" />,
  };

  const tab3List = [
    {
      key: "tab5",
      tab: "summary",
    },
    {
      key: "tab6",
      tab: "technologies",
    },
  ];

  return (
    <PublicLayoutComponent>
      <div className={styles.section1}>
        <Row>
          <Col span={24} lg={12} className={styles.text}>
            <h3>
              <FormattedMessage id="home.welcome.header" />
            </h3>
            <p>
              <FormattedMessage id="home.welcome.text.1" />
            </p>
            <p>
              <FormattedMessage id="home.welcome.text.2" />
            </p>
          </Col>

          <Col span={24} lg={12} className={styles.image}>
            <div>
              <Image
                src={homeImage}
                alt="homeImage"
                preview={false}
                className={styles.mainImage}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.section2}>
        <Row>
          <Col span={24} className={styles.heading}>
            <h2>
              <FormattedMessage id="home.projects.header" />
            </h2>
          </Col>
        </Row>
        <Row gutter={[14, 14]}>
          <Col xs={24} md={8}>
            <Card
              className={styles.card}
              title={
                <>
                  <div className={styles.title}>
                    <Icon component={XIcon} className={styles.icon} />
                    <p className={styles.text}>
                      <FormattedMessage id="home.projects.project1.header" />
                    </p>
                  </div>

                  <Space>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      Frontend Development
                    </Button>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      UX Writing
                    </Button>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      UI
                    </Button>
                  </Space>
                </>
              }
              actions={[
                <Link to="/blog" className={styles.options}>
                  <Button>View my blog section</Button>
                </Link>,
              ]}
              tabList={tab1List}
              activeTabKey={activeTabKey1}
              onTabChange={onTab1Change}
            >
              {content1List[activeTabKey1]}
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              className={styles.card}
              title={
                <>
                  <div className={styles.title}>
                    <Icon component={XIcon} className={styles.icon} />
                    <p className={styles.text}>
                      <FormattedMessage id="home.projects.project2.header" />
                    </p>
                  </div>

                  <Space>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      Frontend Development
                    </Button>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      UX Writing
                    </Button>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      UI
                    </Button>
                  </Space>
                </>
              }
              actions={[
                <a
                  className={styles.options}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://agrisens.es"
                >
                  <Button>View this project</Button>
                </a>,
              ]}
              tabList={tab2List}
              activeTabKey={activeTabKey1}
              onTabChange={onTab2Change}
            >
              {content2List[activeTabKey2]}
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              className={styles.card}
              title={
                <>
                  <div className={styles.title}>
                    <Icon component={XIcon} className={styles.icon} />
                    <p className={styles.text}>
                      <FormattedMessage id="home.projects.project3.header" />
                    </p>
                  </div>

                  <Space>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      Frontend Development
                    </Button>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      UX Writing
                    </Button>
                    <Button
                      type="dashed"
                      size="large"
                      className={styles.buttons}
                    >
                      UI
                    </Button>
                  </Space>
                </>
              }
              actions={[
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://taxfen.com"
                >
                  <Button>View this project</Button>
                </a>,
              ]}
              tabList={tab3List}
              activeTabKey={activeTabKey1}
              onTabChange={onTab3Change}
            >
              {content3List[activeTabKey3]}
            </Card>
          </Col>
        </Row>
      </div>

      <div className={styles.section3}>
        <Row>
          <Col span={24} className={styles.heading}>
            <h2>
              <FormattedMessage id="home.technologies.header" />
            </h2>
          </Col>
        </Row>
        <Row>
          <Col span={24} className={styles.carrousel}>
            <Carousel autoplay infinite={false}>
              <div>
                <h3 className={styles.slide}>
                  <FormattedMessage id="home.technologies.description1" />
                </h3>
              </div>
              <div>
                <h3 className={styles.slide}>
                  <FormattedMessage id="home.technologies.description2" />
                </h3>
              </div>
              <div>
                <h3 className={styles.slide}>
                  <FormattedMessage id="home.technologies.description3" />
                </h3>
              </div>
              <div>
                <h3 className={styles.slide}>
                  <FormattedMessage id="home.technologies.description4" />
                </h3>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>

      <div className={styles.section4}>
        <Row>
          <Col span={24} className={styles.heading}>
            <h2>
              <FormattedMessage id="home.contact.header" />
            </h2>
            <p>
              <FormattedMessage id="home.contact.description" />
            </p>

            <Link to="/contact">
              <Button
                type="primary"
                className={styles.buttons}
                icon={<MailOutlined className={styles.icon} />}
              >
                {desktop && (
                  <FormattedMessage id="button.contact" tagName="span" />
                )}
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </PublicLayoutComponent>
  );
};
export default HomePage;
