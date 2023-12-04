import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const IpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 11H14V9H16V11ZM3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5ZM10 7H8V17H10V7ZM12 17H14V13H16C16.5304 13 17.0391 12.7893 17.4142 12.4142C17.7893 12.0391 18 11.5304 18 11V9C18 8.46957 17.7893 7.96086 17.4142 7.58579C17.0391 7.21071 16.5304 7 16 7H12V17Z" />
    </Svg>
  );
};
