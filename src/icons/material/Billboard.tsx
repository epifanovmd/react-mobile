import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BillboardIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 22H18V17H20V22ZM6 22H4V17H6V22ZM23 4V13C23 13.5304 22.7893 14.0391 22.4142 14.4142C22.0391 14.7893 21.5304 15 21 15H3C2.46957 15 1.96086 14.7893 1.58579 14.4142C1.21071 14.0391 1 13.5304 1 13V4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2H21C21.5304 2 22.0391 2.21071 22.4142 2.58579C22.7893 2.96086 23 3.46957 23 4ZM21 4H3V13H21V4ZM20 6H15V8H20V6ZM18 9H15V11H18V9ZM14 11H4L6.73 7.36L8.73 10.09L9.46 9.55L8.2 7.82L9.91 5.55L14 11Z" />
    </Svg>
  );
};
