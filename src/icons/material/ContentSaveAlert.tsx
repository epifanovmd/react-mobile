import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentSaveAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 9H3V5H13V9ZM10 19C8.3 19 7 17.7 7 16C7 14.3 8.3 13 10 13C11.7 13 13 14.3 13 16C13 17.7 11.7 19 10 19ZM15 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H17C18.1 21 19 20.1 19 19V7L15 3ZM23 14H21V7H23V14ZM23 18H21V16H23V18Z" />
    </Svg>
  );
};
