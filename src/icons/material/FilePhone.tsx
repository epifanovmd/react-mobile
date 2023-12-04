import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilePhoneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM17 19.44C17 19.75 16.75 20 16.44 20C11.23 20 7 15.77 7 10.56C7 10.25 7.25 10 7.56 10H9.5C9.81 10 10.06 10.25 10.06 10.56C10.06 11.25 10.17 11.92 10.37 12.54C10.43 12.73 10.39 12.95 10.23 13.11L9 14.33C9.81 15.9 11.1 17.19 12.67 18L13.9 16.77C14.05 16.61 14.27 16.57 14.46 16.63C15.08 16.83 15.75 16.95 16.45 16.95C16.75 16.95 17 17.19 17 17.5V19.44ZM13 9V3.5L18.5 9H13Z" />
    </Svg>
  );
};
