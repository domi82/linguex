import React, { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import objectSupport from "dayjs/plugin/objectSupport";
import { ConfigProvider, message } from "antd";
import enGB from "antd/lib/locale/en_GB";
import appThemeComponent from "./components/AppThemeComponent/AppThemeComponent";
import "./App.css";
import { IntlProvider } from "react-intl";
import messagesEn from "./i18n/en.json";
import HeadMetadata from "./components/HeadMetadata/HeadMetadata";
import { App as AntdApp } from "antd";
import RoutesComponent from "./components/RoutesComponent/RoutesComponent";
import "./index.css";

// set up DayJs
dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(objectSupport);

// return the app

const App: React.FC = () => {
  /*** HOOKS ***/

  // initialize the app
  useEffect(() => {
    const init = async () => {
      // set up antd configuration and locale
      message.config({ maxCount: 1 });
      dayjs.locale("en");
    };
    init();
  }, []);

  /*** METHODS ***/

  /*** VISUAL ***/

  return (
    <ConfigProvider locale={enGB} theme={appThemeComponent.getAppTheme()}>
      <AntdApp>
        <IntlProvider
          locale="en-GB"
          defaultLocale="en-GB"
          messages={messagesEn}
        >
          <HeadMetadata />
          <RoutesComponent />
        </IntlProvider>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
