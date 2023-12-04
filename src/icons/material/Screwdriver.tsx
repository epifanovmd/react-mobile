import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScrewdriverIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 1.83008C17.5 1.83008 17 2.00008 16.59 2.41008C13.72 5.28008 8 11.0001 8 11.0001L9.5 12.5001L6 16.0001H4L2 20.0001L4 22.0001L8 20.0001V18.0001L11.5 14.5001L13 16.0001C13 16.0001 18.72 10.2801 21.59 7.41008C22.21 6.50008 22.37 5.37008 21.59 4.59008L19.41 2.41008C19 2.00008 18.5 1.83008 18 1.83008ZM18 4.00008L20 6.00008L13 13.0001L11 11.0001L18 4.00008Z" />
    </Svg>
  );
};
