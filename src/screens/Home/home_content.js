import { Icon } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import MobileDeviceManager from "react-native-mdm";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
import { Text as SvgText } from "react-native-svg";
import { PieChart } from "react-native-svg-charts";
import { secondsToHms } from "../../libs/hms";
import theme from "../../libs/theme";
import CountDown from "../Shared/CountDown";
import styles from "./styles";

class HomeContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 20,
      loading: false,
      alert: false
    };
  }

  componentDidMount() {
    this.props.getTimerHistory();
  }

  renderAlertBox = () => {
    const { alert } = this.state;

    return (
      <SCLAlert
        theme="success"
        show={alert}
        title="Congratulations"
        subtitle="You have achieved 50 points successfully"
        cancellable={false}
        titleContainerStyle={{ marginTop: 5 }}
        titleStyle={{
          fontSize: 26,
          fontFamily: theme.fonts.TitilliumWebSemiBold
        }}
        subtitleContainerStyle={{ marginTop: 20 }}
        subtitleStyle={{
          fontSize: 18,
          fontFamily: theme.fonts.TitilliumWebRegular
        }}
        onRequestClose={this.handleClose}
      >
        <SCLAlertButton theme="success" onPress={this.handleClose}>
          OKAY
        </SCLAlertButton>
      </SCLAlert>
    );
  };

  get getSeconds() {
    const { time } = this.state;
    return time * 60;
  }

  lockApp = async () => {
    MobileDeviceManager.lockApp().then(() => {
      this.setState({ loading: true });
    });
  };

  unlockApp = async () => {
    MobileDeviceManager.unlockApp().then(() => {
      this.setState({ loading: false });
    });
  };

  renderItem = data => {
    const { item } = data;

    return (
      <View style={styles.items}>
        <View>
          <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>
            {item.duration}
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>
            {secondsToHms(item.time)}
          </Text>
        </View>
      </View>
    );
  };

  onCancel = () => {
    this.unlockApp();
  };

  onComplete = () => {
    this.setState({ alert: true, loading: false });
  };

  handleClose = () => {
    this.setState({ alert: false, loading: false });
  };

  render() {
    const { time, loading } = this.state;

    const data = [
      {
        key: 1,
        amount: 20,
        time: 20,
        name: "20 MINS",
        rotate: "rotate(70, 70, -40)",
        svg: {
          fill: time >= 20 ? "green" : "lightgreen",
          onPress: () => {
            if (loading) return;
            this.setState({ time: 20 });
          }
        }
      },
      {
        key: 2,
        amount: 20,
        time: 40,
        name: "40 MINS",
        rotate: "rotate(0, 0, 0)",
        svg: {
          fill: time >= 40 ? "green" : "lightgreen",
          onPress: () => {
            if (loading) return;
            this.setState({ time: 40 });
          }
        }
      },
      {
        key: 3,
        amount: 20,
        time: 60,
        name: "60 MINS",
        rotate: "rotate(-60, -75, -50)",
        svg: {
          fill: time >= 60 ? "green" : "lightgreen",
          onPress: () => {
            if (loading) return;
            this.setState({ time: 60 });
          }
        }
      }
    ];

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;

        return (
          <SvgText
            key={index}
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={time >= data.time ? "white" : "black"}
            stroke={time >= data.time ? "white" : "black"}
            textAnchor={"middle"}
            alignmentBaseline={"middle"}
            fontSize={14}
            strokeWidth={0.2}
            transform={data.rotate}
          >
            {data.name}
          </SvgText>
        );
      });
    };

    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 2,
            width: "70%",
            alignSelf: "center"
          }}
        >
          <PieChart
            style={{ flex: 1 }}
            valueAccessor={({ item }) => item.amount}
            data={data}
            spacing={0}
            outerRadius={"95%"}
          >
            <Labels />
          </PieChart>

          <View
            style={{
              alignSelf: "center",
              top: "44%",
              position: "absolute"
            }}
          >
            <Icon
              type="FontAwesome"
              name={loading ? "lock" : "unlock-alt"}
              style={{ fontSize: 48, color: "black" }}
              onPress={() => {
                loading ? this.unlockApp() : this.lockApp();
              }}
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          {this.renderAlertBox()}

          <CountDown
            time={this.getSeconds}
            loading={loading}
            onComplete={this.onComplete}
            onCancel={this.onCancel}
          />
        </View>
      </View>
    );
  }
}

export default HomeContent;
