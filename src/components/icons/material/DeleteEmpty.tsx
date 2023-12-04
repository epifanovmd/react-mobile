import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DeleteEmptyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.37 8.91016L19.37 10.6402L7.24 3.64016L8.24 1.91016L11.28 3.66016L12.64 3.29016L16.97 5.79016L17.34 7.16016L20.37 8.91016ZM6 19.0002V7.00016H11.07L18 11.0002V19.0002C18 19.5306 17.7893 20.0393 17.4142 20.4144C17.0391 20.7894 16.5304 21.0002 16 21.0002H8C7.46957 21.0002 6.96086 20.7894 6.58579 20.4144C6.21071 20.0393 6 19.5306 6 19.0002Z" />
    </Svg>
  );
};
