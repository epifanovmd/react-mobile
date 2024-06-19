import { PortalProvider } from "@gorhom/portal";
import * as React from "react";
import { memo, useMemo } from "react";
import { View } from "react-native";

import { IModalHostProps } from "./types";

export const ModalHost = memo(({ children, style }: IModalHostProps) => {
  const _style = useMemo(() => [{ flex: 1 }, style], [style]);

  return (
    <PortalProvider>
      <View style={_style} collapsable={false} pointerEvents="box-none">
        {children}
      </View>
    </PortalProvider>
  );
});
