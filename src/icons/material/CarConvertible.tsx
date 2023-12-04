import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarConvertibleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 6L15 6.75L17.5 10H13.5V8.5H12V10H3C1.89 10 1 10.89 1 12V15H3C3 15.7956 3.31607 16.5587 3.87868 17.1213C4.44129 17.6839 5.20435 18 6 18C6.79565 18 7.55871 17.6839 8.12132 17.1213C8.68393 16.5587 9 15.7956 9 15H15C15 15.7956 15.3161 16.5587 15.8787 17.1213C16.4413 17.6839 17.2044 18 18 18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15H23V12C23 10.89 22.11 10 21 10H19L16 6ZM6 13.5C6.39782 13.5 6.77936 13.658 7.06066 13.9393C7.34196 14.2206 7.5 14.6022 7.5 15C7.5 15.3978 7.34196 15.7794 7.06066 16.0607C6.77936 16.342 6.39782 16.5 6 16.5C5.60218 16.5 5.22064 16.342 4.93934 16.0607C4.65804 15.7794 4.5 15.3978 4.5 15C4.5 14.6022 4.65804 14.2206 4.93934 13.9393C5.22064 13.658 5.60218 13.5 6 13.5ZM18 13.5C18.3978 13.5 18.7794 13.658 19.0607 13.9393C19.342 14.2206 19.5 14.6022 19.5 15C19.5 15.3978 19.342 15.7794 19.0607 16.0607C18.7794 16.342 18.3978 16.5 18 16.5C17.6022 16.5 17.2206 16.342 16.9393 16.0607C16.658 15.7794 16.5 15.3978 16.5 15C16.5 14.6022 16.658 14.2206 16.9393 13.9393C17.2206 13.658 17.6022 13.5 18 13.5Z" />
    </Svg>
  );
};