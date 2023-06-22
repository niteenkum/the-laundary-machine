import React, {Component} from 'react';
import codePush from 'react-native-code-push';
import CodepushDownloadProgress from './codepushDownloadProgress';
import SplashScreen from 'react-native-splash-screen';
import {LayoutAnimation, UIManager, Platform} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const RETRY_DELAY = 5000;
const MAX_RETRY_ATTEMPTS = 10;

const CODEPUSH_OPTIONS = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

const withCodepush = WrappedComponent => {
  class WithCodepush extends Component {
    state = {
      isMandatory: false,
      isPending: false,
      downloadProgress: {
        isComplete: false,
        downloaded: 0,
        total: 0,
      },
      isRetrying: false,
      retryCount: 0,
      description: '',
    };

    componentDidMount() {
      codePush.checkForUpdate().then(res => {
        console.log('WithCodepush codePush.checkForUpdate', {res});
        if (res) {
          this.setState({
            isMandatory: res.isMandatory,
            description: res.description || '',
          });
        }
      });
      codePush.getUpdateMetadata().then(res => {
        if (res) {
          // Sentry.setRelease('mx.holacash.cashapp-' + res.appVersion + '-codepush:' + res.label);
        }
      });
    }

    componentDidUpdate(prevProps, prevState) {
      const {isPending, isMandatory} = this.state;
      console.log('WithCodepush componentDidUpdate', {
        isPending,
        isMandatory,
        prevState,
      });
      if (
        isPending &&
        isMandatory &&
        !(prevState.isPending && prevState.isMandatory)
      ) {
        SplashScreen.hide();
      }
    }

    codePushStatusDidChange = status => {
      console.log('WithCodepush codePushStatusDidChange', status);
      switch (status) {
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        case codePush.SyncStatus.INSTALLING_UPDATE:
          this.setState({isPending: true});
          break;
        case codePush.SyncStatus.UPDATE_INSTALLED:
          this.setDownloadProgress({isComplete: true});
          this.setState({isPending: true});
          SplashScreen.show();
          break;
        case codePush.SyncStatus.CHECKING_FOR_UPDATE:
          if (this.state.retryCount === 0) {
            this.setState({isPending: false});
          }
          break;
        case codePush.SyncStatus.UP_TO_DATE:
          this.setState({isPending: false});
          break;
        case codePush.SyncStatus.UNKNOWN_ERROR:
          if (this.state.retryCount > MAX_RETRY_ATTEMPTS) {
            this.setState({isPending: false});
          } else {
            setTimeout(() => {
              this.retryAttempt();
            }, RETRY_DELAY);
          }
          break;
      }
    };

    codePushDownloadDidProgress = progress => {
      const total = progress.totalBytes;
      const downloaded = progress.receivedBytes;
      this.setDownloadProgress({downloaded, total});
    };

    setDownloadProgress = ({isComplete, downloaded, total}) => {
      LayoutAnimation.linear();
      this.setState(prev => ({
        downloadProgress: {
          ...prev.downloadProgress,
          downloaded:
            downloaded !== undefined
              ? downloaded
              : prev.downloadProgress.downloaded,
          total: total !== undefined ? total : prev.downloadProgress.total,
          isComplete,
        },
        isRetrying: false,
        retryCount: 0,
      }));
    };

    retryAttempt = () => {
      this.setState(prev => ({
        isRetrying: true,
        retryCount: prev.retryCount + 1,
      }));
      codePush.sync(
        CODEPUSH_OPTIONS,
        this.codePushStatusDidChange,
        this.codePushDownloadDidProgress,
      );
    };

    render() {
      const {
        isPending,
        isMandatory,
        downloadProgress,
        isRetrying,
        retryCount,
        description,
      } = this.state;
      console.log('WithCodepush ', {
        isPending,
        isMandatory,
        downloadProgress,
        isRetrying,
        retryCount,
        description,
      });
      // return (
      //   <CodepushDownloadProgress
      //     isPending={isPending}
      //     downloadProgress={100}
      //     isRetrying={isRetrying}
      //     retryCount={retryCount}
      //     description={description}
      //   />
      // );
      if (isPending && isMandatory) {
        return (
          <CodepushDownloadProgress
            isPending={isPending}
            downloadProgress={downloadProgress}
            isRetrying={isRetrying}
            retryCount={retryCount}
            description={description}
          />
        );
      }
      return <WrappedComponent />;
    }
  }
  return codePush(CODEPUSH_OPTIONS)(WithCodepush);
};

export default withCodepush;
