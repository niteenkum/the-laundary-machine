import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {colors, fontSize, spacing, deviceDimensions} from '../appResources';

const Description = ({description}) => {
  function parseDescription(str) {
    try {
      return JSON.parse(str);
    } catch {
      return str;
    }
  }
  const parsedDescription = parseDescription(description);

  if (Array.isArray(parsedDescription)) {
    return (
      <ScrollView>
        {parsedDescription.map(item => (
          <Text key={item} style={styles.whatsNewText}>
            • {item}
          </Text>
        ))}
      </ScrollView>
    );
  } else if (typeof parsedDescription === 'string') {
    return <Text style={styles.whatsNewText}>{parsedDescription}</Text>;
  }
  return null;
};

const ProgressBar = ({
  locations = [0, 1],
  percentComplete = 0,
  isRetrying,
  isComplete,
}) => {
  return (
    <View style={[styles.gradientBtnContainer]}>
      <View
        style={{
          ...styles.buttonGradient,
          backgroundColor: colors.ligthGray3,
          ...{width: `${percentComplete + 1}%`},
        }}
      />
      {!!isRetrying && (
        <Text style={styles.downloadingText}>Connecting...</Text>
      )}
      <Text style={styles.downloadingText}>
        Installing {percentComplete.toFixed(0)}%
      </Text>
    </View>
  );
};

const bytesToMB = number => {
  const bytes = Number(number);
  const mb = bytes / (1024 * 1024);
  const roundedMB = Math.round((mb + Number.EPSILON) * 100) / 100;
  return roundedMB;
};

function interpolateProgress(input) {
  const ORIGNAL_MARK = 90;
  const PERCIEVED_MARK = 60;
  const x = Math.min(input, ORIGNAL_MARK);
  const y = input > ORIGNAL_MARK ? input - ORIGNAL_MARK : 0;
  return (
    (x * PERCIEVED_MARK) / ORIGNAL_MARK +
    (y * (100 - PERCIEVED_MARK)) / (100 - ORIGNAL_MARK)
  );
}

const CodepushDownloadProgress = props => {
  const {downloadProgress, onInstallPress, isRetrying, description} = props;
  const downloaded = bytesToMB(downloadProgress.downloaded);
  const total = bytesToMB(downloadProgress.total);
  let percent = (downloaded / total) * 100;
  if (isNaN(percent)) {
    percent = 0;
  }
  percent = interpolateProgress(percent);
  return (
    <View style={styles.containerGradient}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text>Image....</Text>
          </View>
          <View style={styles.animationContainer}>
            <Text>Downloading...</Text>
          </View>

          <Text style={styles.newUpdateText}>New update available</Text>
          <View style={styles.whatsNewContainer}>
            <Text style={styles.whatsNewTitle}>New</Text>
            <Description description={description} />
          </View>
          <ProgressBar
            onPress={onInstallPress}
            percentComplete={percent}
            isComplete={downloadProgress.isComplete}
            isRetrying={isRetrying}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CodepushDownloadProgress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: spacing(20),
    borderRadius: 25,
    elevation: 7,
    shadowOffset: {width: 0.0, height: 5},
    shadowColor: '#00000029',
    shadowRadius: 4,
    shadowOpacity: 0.6,
    padding: spacing(20),
    width: '85%',
    maxHeight: deviceDimensions.height - spacing(80),
    marginTop: spacing(10),
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginTop: 5,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: spacing(50),
  },

  whatsNewContainer: {
    backgroundColor: colors.ligthGray2,
    borderRadius: 15,
    padding: 10,
    marginBottom: spacing(17),
    maxHeight: spacing(220),
  },
  whatsNewTitle: {
    fontSize: fontSize(15),
    color: colors.black,
    marginTop: spacing(5),
    paddingHorizontal: spacing(5),
  },
  whatsNewText: {
    fontSize: fontSize(15),
    color: colors.black,
    marginTop: spacing(3),
    paddingHorizontal: spacing(10),
  },
  gradientButtonText: {
    marginLeft: spacing(8),
  },
  gradientBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: spacing(17),
    borderRadius: spacing(25),
    backgroundColor: colors.ligthGray,
    overflow: 'hidden',
  },
  buttonGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  downloadingText: {
    fontSize: fontSize(15),
    color: colors.white,
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  newUpdateText: {
    fontSize: fontSize(18),
    color: colors.black,
    textAlign: 'center',
    marginBottom: spacing(10),
  },
  animation: {
    width: deviceDimensions.width * 0.7,
    height: deviceDimensions.width * 0.7,
  },
});
