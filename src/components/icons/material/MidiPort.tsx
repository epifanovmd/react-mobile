import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MidiPortIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM20.18 12C20.18 8.18 17.55 4.96 14 4.07V6H10V4.07C6.45 4.96 3.82 8.18 3.82 12C3.82 14.1695 4.68182 16.2501 6.21587 17.7841C7.74991 19.3182 9.83053 20.18 12 20.18C14.1695 20.18 16.2501 19.3182 17.7841 17.7841C19.3182 16.2501 20.18 14.1695 20.18 12ZM7 10.64C7.36069 10.64 7.70662 10.7833 7.96167 11.0383C8.21671 11.2934 8.36 11.6393 8.36 12C8.36 12.3607 8.21671 12.7066 7.96167 12.9617C7.70662 13.2167 7.36069 13.36 7 13.36C6.25 13.36 5.64 12.75 5.64 12C5.64 11.25 6.25 10.64 7 10.64ZM17 10.64C17.3607 10.64 17.7066 10.7833 17.9617 11.0383C18.2167 11.2934 18.36 11.6393 18.36 12C18.36 12.3607 18.2167 12.7066 17.9617 12.9617C17.7066 13.2167 17.3607 13.36 17 13.36C16.6393 13.36 16.2934 13.2167 16.0383 12.9617C15.7833 12.7066 15.64 12.3607 15.64 12C15.64 11.6393 15.7833 11.2934 16.0383 11.0383C16.2934 10.7833 16.6393 10.64 17 10.64ZM8.36 14.27C8.53991 14.27 8.71806 14.3054 8.88428 14.3743C9.05049 14.4431 9.20152 14.544 9.32874 14.6713C9.45595 14.7985 9.55687 14.9495 9.62572 15.1157C9.69456 15.2819 9.73 15.4601 9.73 15.64C9.73 16.39 9.12 17 8.36 17C7.99931 17 7.65338 16.8567 7.39833 16.6017C7.14329 16.3466 7 16.0007 7 15.64C7 14.88 7.61 14.27 8.36 14.27ZM15.64 14.27C16.39 14.27 17 14.88 17 15.64C17 16.0007 16.8567 16.3466 16.6017 16.6017C16.3466 16.8567 16.0007 17 15.64 17C14.88 17 14.27 16.39 14.27 15.64C14.27 15.4601 14.3054 15.2819 14.3743 15.1157C14.4431 14.9495 14.544 14.7985 14.6713 14.6713C14.7985 14.544 14.9495 14.4431 15.1157 14.3743C15.2819 14.3054 15.4601 14.27 15.64 14.27ZM12 15.64C12.3607 15.64 12.7066 15.7833 12.9617 16.0383C13.2167 16.2934 13.36 16.6393 13.36 17C13.36 17.3607 13.2167 17.7066 12.9617 17.9617C12.7066 18.2167 12.3607 18.36 12 18.36C11.6393 18.36 11.2934 18.2167 11.0383 17.9617C10.7833 17.7066 10.64 17.3607 10.64 17C10.64 16.6393 10.7833 16.2934 11.0383 16.0383C11.2934 15.7833 11.6393 15.64 12 15.64Z" />
    </Svg>
  );
};
