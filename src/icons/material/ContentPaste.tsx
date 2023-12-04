import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ContentPasteIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 20H5V4H7V7H17V4H19V20ZM12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3C13 3.26522 12.8946 3.51957 12.7071 3.70711C12.5196 3.89464 12.2652 4 12 4C11.7348 4 11.4804 3.89464 11.2929 3.70711C11.1054 3.51957 11 3.26522 11 3C11 2.73478 11.1054 2.48043 11.2929 2.29289C11.4804 2.10536 11.7348 2 12 2ZM19 2H14.82C14.4 0.84 13.3 0 12 0C10.7 0 9.6 0.84 9.18 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V4C21 3.46957 20.7893 2.96086 20.4142 2.58579C20.0391 2.21071 19.5304 2 19 2Z" />
    </Svg>
  );
};
