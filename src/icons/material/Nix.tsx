import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NixIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.9 8.70078L5 17.2008L3.9 15.3008L5.2 13.0008H2.6L2 12.0008L2.6 11.0008H6.3L7.6 8.70078H9.9ZM10.2 15.5008H19.9L18.8 17.4008H16.2L17.5 19.7008L16.9 20.7008H15.8L14 17.4008H11.3L10.2 15.5008ZM15.9 11.8008L11 3.30078H13.2L14.5 5.60078L15.8 3.30078H16.9L17.5 4.30078L15.6 7.50078L17 9.80078L15.9 11.8008ZM13.8 8.50078H4L5.1 6.60078H7.7L6.4 4.30078L7 3.30078H8.1L10 6.50078H12.7L13.8 8.50078ZM14.1 15.3008L19 6.80078L20.1 8.70078L18.8 11.0008H21.4L22 12.0008L21.4 13.0008H17.7L16.4 15.3008H14.1ZM8.1 12.2008L13 20.6008H10.8L9.5 18.3008L8.4 20.6008H7.1L6.5 19.6008L8.4 16.4008L7 14.2008L8.1 12.2008Z" />
    </Svg>
  );
};
