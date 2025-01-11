import { ThemeConfig } from "antd";

class AppThemeComponent {
  getAppTheme = () => {
    const appTheme: ThemeConfig = {
      token: {
        colorPrimary: "#F955C8",
        colorLink: "#000",
        colorLinkActive: "#000",
        colorLinkHover: "#000",
        fontFamily: "Lora",
      },
      components: {
        Button: {
          colorPrimary: "#F955C8",
          primaryShadow: "transparen",
        },
        Modal: {
          colorPrimary: "#F955C8",
        },
        Layout: {
          bodyBg: "transparent",
        },
        Card: {
          colorBgContainer: "#fff",
          actionsBg: "#fff",
          colorBorder: "#fff",
          borderRadiusLG: 12,
          borderRadiusSM: 12,
          borderRadiusXS: 12,
          fontSize: 20,
          padding: 20,
        },
        Menu: {
          itemSelectedBg: "pink",
          itemSelectedColor: "black",
          itemBorderRadius: 12,
          padding: 10,
        },
        Input: {
          colorBgContainer: "#E3EBE6",
          colorBorder: "#E3EBE6",
          colorTextDisabled: "rgba(0, 0, 0, 0.88)",
        },
        InputNumber: {
          colorBgContainer: "#E3EBE6",
          colorBorder: "transparent",
          colorTextDisabled: "rgba(0, 0, 0, 0.88)",
        },
        DatePicker: {
          colorBgContainer: "#E3EBE6",
          colorBorder: "#397350",
          colorTextDisabled: "rgba(0, 0, 0, 0.88)",
          activeBorderColor: "#f3f6f4",
          cellHoverWithRangeBg: "#f3f6f4",
          cellHoverBg: "#f3f6f4",
          activeShadow: "#f3f6f4",
          cellRangeBorderColor: "#f3f6f4",
          hoverBorderColor: "#f3f6f4",
        },
        Select: {
          colorBgContainer: "#fda0ca",
          colorBorder: "transparent",
          colorTextDisabled: "rgba(0, 0, 0, 0.88)",
        },
        Tabs: {
          colorPrimary: "rgba(43, 47, 50, 1)",
          margin: 30,
        },
        Carousel: {
          colorBgContainer: "gray",
          colorText: "black",
          fontFamily: "Lora",
          fontSize: 100,
          arrowSize: 40,
          arrowOffset: 60,
          dotOffset: 20,
          dotGap: 10,
          dotHeight: 7,
          dotActiveWidth: 30,
        },
        Timeline: {
          fontSize: 16,
          itemPaddingBottom: 30,

          margin: 30,
          marginMD: 30,
          lineWidth: 0.25,
        },
      },
    };

    return appTheme;
  };
}

const appThemeComponent: AppThemeComponent = new AppThemeComponent();
export default appThemeComponent;
