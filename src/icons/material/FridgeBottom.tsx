import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FridgeBottomIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 2C6.46957 2 5.96086 2.21071 5.58579 2.58579C5.21071 2.96086 5 3.46957 5 4V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21V22H9V21H15V22H17V21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V4C19 3.46957 18.7893 2.96086 18.4142 2.58579C18.0391 2.21071 17.5304 2 17 2H7ZM8 6H10V8H8V6ZM7 11H17V19H7V11ZM8 12V15H10V12H8Z" />
    </Svg>
  );
};
