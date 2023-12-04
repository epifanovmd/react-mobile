import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MapMarkerQuestionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C8.14 2 5 5.14 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.14 15.86 2 12 2ZM12.88 15.75H11.13V14H12.88V15.75ZM12.88 12.88H11.13C11.13 10.04 13.75 10.26 13.75 8.5C13.75 8.03587 13.5656 7.59075 13.2374 7.26256C12.9092 6.93437 12.4641 6.75 12 6.75C11.5359 6.75 11.0908 6.93437 10.7626 7.26256C10.4344 7.59075 10.25 8.03587 10.25 8.5H8.5C8.5 7.57174 8.86875 6.6815 9.52513 6.02513C10.1815 5.36875 11.0717 5 12 5C12.9283 5 13.8185 5.36875 14.4749 6.02513C15.1313 6.6815 15.5 7.57174 15.5 8.5C15.5 10.69 12.88 10.91 12.88 12.88Z" />
    </Svg>
  );
};
