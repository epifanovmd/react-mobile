import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HarddiskPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 9C11.8022 9 11.6089 9.05865 11.4444 9.16853C11.28 9.27841 11.1518 9.43459 11.0761 9.61732C11.0004 9.80004 10.9806 10.0011 11.0192 10.1951C11.0578 10.3891 11.153 10.5673 11.2929 10.7071C11.4327 10.847 11.6109 10.9422 11.8049 10.9808C11.9989 11.0194 12.2 10.9996 12.3827 10.9239C12.5654 10.8482 12.7216 10.72 12.8315 10.5556C12.9414 10.3911 13 10.1978 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9ZM12 9C11.8022 9 11.6089 9.05865 11.4444 9.16853C11.28 9.27841 11.1518 9.43459 11.0761 9.61732C11.0004 9.80004 10.9806 10.0011 11.0192 10.1951C11.0578 10.3891 11.153 10.5673 11.2929 10.7071C11.4327 10.847 11.6109 10.9422 11.8049 10.9808C11.9989 11.0194 12.2 10.9996 12.3827 10.9239C12.5654 10.8482 12.7216 10.72 12.8315 10.5556C12.9414 10.3911 13 10.1978 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9ZM18 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V13.09C4.32987 13.0294 4.66461 12.9993 5 13C5.68283 12.9994 6.36022 13.1214 7 13.36C6.34634 12.3936 5.9886 11.2576 5.97057 10.0911C5.95255 8.92455 6.27501 7.77805 6.89849 6.79194C7.52198 5.80582 8.41943 5.02287 9.48101 4.53892C10.5426 4.05497 11.7222 3.89102 12.8755 4.06713C14.0289 4.24324 15.1058 4.75177 15.9746 5.53048C16.8434 6.30919 17.4663 7.32429 17.767 8.45154C18.0678 9.57879 18.0334 10.7693 17.6681 11.8773C17.3027 12.9853 16.6223 13.9627 15.71 14.69L13.79 12.27C13.7247 12.1554 13.6373 12.0549 13.533 11.9742C13.4286 11.8935 13.3093 11.8343 13.182 11.7999C13.0547 11.7655 12.9218 11.7566 12.791 11.7738C12.6602 11.791 12.5341 11.8339 12.42 11.9L11.56 12.4C11.4454 12.4653 11.3449 12.5527 11.2642 12.657C11.1835 12.7614 11.1243 12.8807 11.0899 13.008C11.0555 13.1353 11.0466 13.2682 11.0638 13.399C11.081 13.5298 11.1239 13.6559 11.19 13.77L12.1 16C11.3831 15.9973 10.6723 15.8687 10 15.62C10.6288 16.5578 10.9801 17.654 11.0138 18.7826C11.0474 19.9112 10.7618 21.0264 10.19 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2ZM14.58 19.58L12.09 13.27L12.95 12.77L17.17 18.08L14.58 19.58ZM12 11C12.1978 11 12.3911 10.9414 12.5556 10.8315C12.72 10.7216 12.8482 10.5654 12.9239 10.3827C12.9996 10.2 13.0194 9.99889 12.9808 9.80491C12.9422 9.61093 12.847 9.43275 12.7071 9.29289C12.5673 9.15304 12.3891 9.0578 12.1951 9.01921C12.0011 8.98063 11.8 9.00043 11.6173 9.07612C11.4346 9.15181 11.2784 9.27998 11.1685 9.44443C11.0586 9.60888 11 9.80222 11 10C11 10.2652 11.1054 10.5196 11.2929 10.7071C11.4804 10.8946 11.7348 11 12 11ZM9 20H6V23H4V20H1V18H4V15H6V18H9V20Z" />
    </Svg>
  );
};
