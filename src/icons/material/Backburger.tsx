import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BackburgerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4.99993 13.0001L8.99993 17.0001L7.59993 18.4201L1.17993 12.0001L7.59993 5.58008L8.99993 7.00008L4.99993 11.0001H20.9999V13.0001H4.99993ZM20.9999 6.00008V8.00008H10.9999V6.00008H20.9999ZM20.9999 16.0001V18.0001H10.9999V16.0001H20.9999Z" />
    </Svg>
  );
};
