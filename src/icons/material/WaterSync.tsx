import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterSyncIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3.19922C12 3.19922 6 9.99922 6 13.9992C6 17.2992 8.7 19.9992 12 19.9992C15.3 19.9992 18 17.2992 18 13.9992C18 9.99922 12 3.19922 12 3.19922ZM12 8.49922V9.99922C14.2 9.99922 16 11.7992 16 13.9992C16 14.7992 15.8 15.5992 15.3 16.1992L14.2 15.0992C14.4 14.7992 14.5 14.3992 14.5 13.9992C14.5 12.5992 13.4 11.4992 12 11.4992V12.9992L9.8 10.7992L12 8.49922ZM8.7 11.7992L9.8 12.8992C9.6 13.1992 9.5 13.5992 9.5 13.9992C9.5 15.3992 10.6 16.4992 12 16.4992V14.9992L14.2 17.1992L12 19.4992V17.9992C9.8 17.9992 8 16.1992 8 13.9992C8 13.1992 8.2 12.3992 8.7 11.7992Z" />
    </Svg>
  );
};
