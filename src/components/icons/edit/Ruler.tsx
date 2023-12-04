import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RulerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M6.34398 12.0002L8.4653 14.1216M9.17211 9.17162L11.2934 11.2929M12.0002 6.34349L14.1216 8.46481M5.07054 13.2725L13.273 5.07005C14.065 4.27802 14.4614 3.88201 14.9181 3.73363C15.3198 3.60311 15.7524 3.60311 16.154 3.73363C16.6104 3.88192 17.0061 4.27757 17.7972 5.06871L18.9299 6.20143C19.722 6.99345 20.1184 7.39041 20.2668 7.84706C20.3973 8.24875 20.3971 8.68058 20.2665 9.08226C20.1182 9.53892 19.7222 9.93525 18.9302 10.7273L10.7278 18.9297C9.93574 19.7218 9.53941 20.1177 9.08275 20.2661C8.68106 20.3966 8.24924 20.3968 7.84755 20.2663C7.3909 20.1179 6.99394 19.7215 6.20191 18.9295L5.0692 17.7967C4.27806 17.0056 3.88241 16.6099 3.73412 16.1536C3.6036 15.7519 3.6036 15.3193 3.73412 14.9176C3.88249 14.4609 4.27851 14.0645 5.07054 13.2725Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
