import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BeakerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 3V5C3.53043 5 4.03914 5.21071 4.41421 5.58579C4.78929 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 19.2107 5.96086 19.5858 5.58579C19.9609 5.21071 20.4696 5 21 5V3H3ZM7 9H10V10H7V9ZM7 11H10V12H7V11ZM10 16H7V15H10V16ZM12 14H7V13H12V14ZM12 8H7V7H12V8Z" />
    </Svg>
  );
};
