import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FirewireIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 9.9998C13.1 9.9998 14 10.8998 14 11.9998C14 13.0998 13.1 13.9998 12 13.9998C10.9 13.9998 10 13.0998 10 11.9998C10 10.8998 10.9 9.9998 12 9.9998ZM12 7.9998C9.80005 7.9998 8.00005 9.7998 8.00005 11.9998C8.00005 14.1998 9.80005 15.9998 12 15.9998C14.2 15.9998 16 14.1998 16 11.9998C16 9.7998 14.2 7.9998 12 7.9998ZM15 16.9998H9.00005V18.9998H15V16.9998ZM15 19.9998H9.00005V21.9998H15V19.9998ZM6.30005 10.5998L10.5 6.3998L9.20005 4.8998L4.90005 9.1998L6.30005 10.5998ZM4.20005 8.4998L8.40005 4.2998L7.10005 2.7998L2.80005 7.0998L4.20005 8.4998ZM15 16.9998H9.00005V18.9998H15V16.9998ZM13.4 6.2998L17.6 10.4998L21.1 6.9998L16.9 2.7998L13.4 6.2998Z" />
    </Svg>
  );
};
