import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StarFaceIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2.5L8.42 8.06L2 9.74L6.2 14.88L5.82 21.5L12 19.09L18.18 21.5L17.8 14.88L22 9.74L15.58 8.06L12 2.5ZM9.38 10.5C10 10.5 10.5 11 10.5 11.63C10.5 11.927 10.382 12.2119 10.172 12.422C9.96192 12.632 9.67704 12.75 9.38 12.75C8.75 12.75 8.25 12.25 8.25 11.63C8.25 11 8.75 10.5 9.38 10.5ZM14.63 10.5C15.25 10.5 15.75 11 15.75 11.63C15.75 11.927 15.632 12.2119 15.422 12.422C15.2119 12.632 14.927 12.75 14.63 12.75C14 12.75 13.5 12.25 13.5 11.63C13.5 11 14 10.5 14.63 10.5ZM9 15H15C14.5 16.21 13.31 17 12 17C10.69 17 9.5 16.21 9 15Z" />
    </Svg>
  );
};
