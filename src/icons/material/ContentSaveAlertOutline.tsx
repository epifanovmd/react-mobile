import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentSaveAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H17C18.1 21 19 20.1 19 19V7L15 3ZM17 19H3V5H14.2L17 7.8V19ZM10 12C8.3 12 7 13.3 7 15C7 16.7 8.3 18 10 18C11.7 18 13 16.7 13 15C13 13.3 11.7 12 10 12ZM4 6H13V10H4V6ZM23 14H21V7H23V14ZM23 18H21V16H23V18Z" />
    </Svg>
  );
};
