import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PaperclipAttechmentHorizontalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M7 6H16.75C19.6495 6 22 8.35051 22 11.25C22 14.1495 19.6495 16.5 16.75 16.5H5.5C3.567 16.5 2 14.933 2 13C2 11.067 3.567 9.5 5.5 9.5H16.75C17.7165 9.5 18.5 10.2835 18.5 11.25C18.5 12.2165 17.7165 13 16.75 13H7"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
