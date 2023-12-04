import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyboardCloseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 23L16 19H8L12 23ZM19 8H17V6H19V8ZM19 11H17V9H19V11ZM16 8H14V6H16V8ZM16 11H14V9H16V11ZM16 15H8V13H16V15ZM7 8H5V6H7V8ZM7 11H5V9H7V11ZM8 9H10V11H8V9ZM8 6H10V8H8V6ZM11 9H13V11H11V9ZM11 6H13V8H11V6ZM20 3H4C2.89 3 2 3.89 2 5V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V5C22 3.89 21.1 3 20 3Z" />
    </Svg>
  );
};
