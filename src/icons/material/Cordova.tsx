import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CordovaIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.18 21.5502H16.94L17.17 18.8202H15.58L15.35 21.5502H8.65L8.42 18.8202H6.83L7.06 21.5502H3.82L2 9.7302L6.55 2.4502H17.45L22 9.7302L20.18 21.5502ZM16.55 6.0902H13.62L13.82 7.4502H10.18L10.38 6.0902H7.45L5.64 9.7302L6.55 17.0002H17.45L18.36 9.7302L16.55 6.0902ZM14.95 14.5902C14.7 14.5902 14.5 13.8302 14.5 12.9002C14.5 11.9602 14.7 11.2002 14.95 11.2002C15.21 11.2002 15.41 11.9602 15.41 12.9002C15.41 13.8302 15.21 14.5902 14.95 14.5902ZM9.22 14.7302C8.96 14.7302 8.76 13.9702 8.76 13.0402C8.76 12.1002 8.96 11.3502 9.22 11.3502C9.47 11.3502 9.67 12.1002 9.67 13.0402C9.67 13.9702 9.47 14.7302 9.22 14.7302Z" />
    </Svg>
  );
};
