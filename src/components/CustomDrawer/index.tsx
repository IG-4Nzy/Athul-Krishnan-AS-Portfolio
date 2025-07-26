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
  const styles = {
    container: {
      backgroundColor: "#1a1a1a",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      color: "#f8f9fa",
      boxShadow: "0 -5px 20px rgba(0, 0, 0, 0.6)",
      paddingBlock: "1.5rem",
      display:"flex",
      justifyContent:"center",
      maxWidth:"100vw"
    },
    content: {
      color: "#f8f9fa",
      fontSize: "1rem",
    },
    backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(3px)",
    },
  };

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      detent={detent}
      disableDrag={disableDrag}
      disableScrollLocking={disableScrollLocking}
    >
      <Sheet.Container style={styles.container}>
        <Sheet.Header  />
        <Sheet.Content style={styles.content}>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop style={styles.backdrop} onTap={() => setOpen(false)} />
    </Sheet>
  );
}
