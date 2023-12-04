import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Brightness6Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.9999 17.9999V5.99994C13.5912 5.99994 15.1174 6.63208 16.2426 7.7573C17.3678 8.88252 17.9999 10.4086 17.9999 11.9999C17.9999 13.5912 17.3678 15.1174 16.2426 16.2426C15.1174 17.3678 13.5912 17.9999 11.9999 17.9999ZM19.9999 15.3099L23.3099 11.9999L19.9999 8.68994V3.99994H15.3099L11.9999 0.689941L8.68994 3.99994H3.99994V8.68994L0.689941 11.9999L3.99994 15.3099V19.9999H8.68994L11.9999 23.3099L15.3099 19.9999H19.9999V15.3099Z" />
    </Svg>
  );
};
