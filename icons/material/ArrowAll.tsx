import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowAllIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.9999 10.9999H17.9999L16.4999 9.49991L17.9199 8.07991L21.8399 11.9999L17.9199 15.9199L16.4999 14.4999L17.9999 12.9999H12.9999V17.9999L14.4999 16.4999L15.9199 17.9199L11.9999 21.8399L8.07991 17.9199L9.49991 16.4999L10.9999 17.9999V12.9999H5.99991L7.49991 14.4999L6.07991 15.9199L2.15991 11.9999L6.07991 8.07991L7.49991 9.49991L5.99991 10.9999H10.9999V5.99991L9.49991 7.49991L8.07991 6.07991L11.9999 2.15991L15.9199 6.07991L14.4999 7.49991L12.9999 5.99991V10.9999Z" />
    </Svg>
  );
};
