import { ToastAndroid } from 'react-native';

const showToast = (message: string): void => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    125,
  );
};

export default showToast;
