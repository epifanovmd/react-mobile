import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HumanFemaleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.53043 13.7893 5.03914 13.4142 5.41421C13.0391 5.78929 12.5304 6 12 6C11.4696 6 10.9609 5.78929 10.5858 5.41421C10.2107 5.03914 10 4.53043 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2ZM10.5 22V16H7.5L10.09 8.41C10.34 7.59 11.1 7 12 7C12.9 7 13.66 7.59 13.91 8.41L16.5 16H13.5V22H10.5Z" />
    </Svg>
  );
};
