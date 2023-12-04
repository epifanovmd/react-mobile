import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UsbIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 7V11H16V13H13V5H15L12 1L9.00005 5H11V13H8.00005V10.93C8.70005 10.56 9.20005 9.85 9.20005 9C9.20005 7.78 8.21005 6.8 7.00005 6.8C5.78005 6.8 4.80005 7.78 4.80005 9C4.80005 9.85 5.30005 10.56 6.00005 10.93V13C6.00005 13.5304 6.21076 14.0391 6.58583 14.4142C6.96091 14.7893 7.46962 15 8.00005 15H11V18.05C10.29 18.41 9.80005 19.15 9.80005 20C9.80005 20.5835 10.0318 21.1431 10.4444 21.5556C10.857 21.9682 11.4166 22.2 12 22.2C12.5835 22.2 13.1431 21.9682 13.5557 21.5556C13.9683 21.1431 14.2 20.5835 14.2 20C14.2 19.15 13.71 18.41 13 18.05V15H16C16.5305 15 17.0392 14.7893 17.4143 14.4142C17.7893 14.0391 18 13.5304 18 13V11H19V7H15Z" />
    </Svg>
  );
};
