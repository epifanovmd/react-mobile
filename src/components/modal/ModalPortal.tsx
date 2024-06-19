import { shortid } from "@force-dev/utils";
import { Portal } from "@gorhom/portal";
import * as React from "react";
import { memo, PropsWithChildren } from "react";

export const ModalPortal = memo(({ children }: PropsWithChildren) => (
  <Portal key={`modal-port_${shortid()}`}>{children}</Portal>
));
