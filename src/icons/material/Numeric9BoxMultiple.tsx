import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Numeric9BoxMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 9H13V7H15V9ZM3 5V21H19V23H3C2.46957 23 1.96086 22.7893 1.58579 22.4142C1.21071 22.0391 1 21.5304 1 21V5H3ZM15 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9C11 10.11 11.9 11 13 11H15V13H11V15H15C15.5304 15 16.0391 14.7893 16.4142 14.4142C16.7893 14.0391 17 13.5304 17 13V7C17 5.89 16.1 5 15 5ZM21 1C21.5304 1 22.0391 1.21071 22.4142 1.58579C22.7893 1.96086 23 2.46957 23 3V17C23 17.5304 22.7893 18.0391 22.4142 18.4142C22.0391 18.7893 21.5304 19 21 19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H21Z" />
    </Svg>
  );
};
