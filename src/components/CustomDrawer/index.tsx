import { Sheet } from "react-modal-sheet";

interface PropType {
  isOpen: boolean;
  setOpen: (e: boolean) => void;
  children: any;
  disableDrag?: boolean;
  disableScrollLocking?: boolean;
  detent?: "full-height" | "content-height";
}

export function CustomDrawer({
  isOpen,
  setOpen,
  children,
  disableDrag = false,
  disableScrollLocking,
  detent = "full-height",
}: PropType) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      detent={detent}
      disableDrag={disableDrag}
      disableScrollLocking={disableScrollLocking}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setOpen(false)} />
    </Sheet>
  );
}
