import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PizzaIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 15C11.4696 15 10.9609 14.7893 10.5858 14.4142C10.2107 14.0391 10 13.5304 10 13C10 11.89 10.9 11 12 11C12.5304 11 13.0391 11.2107 13.4142 11.5858C13.7893 11.9609 14 12.4696 14 13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15ZM7 7C7 5.89 7.89 5 9 5C9.53043 5 10.0391 5.21071 10.4142 5.58579C10.7893 5.96086 11 6.46957 11 7C11 7.53043 10.7893 8.03914 10.4142 8.41421C10.0391 8.78929 9.53043 9 9 9C7.89 9 7 8.1 7 7ZM12 2C8.43 2 5.23 3.54 3 6L12 22L21 6C18.78 3.54 15.57 2 12 2Z" />
    </Svg>
  );
};
