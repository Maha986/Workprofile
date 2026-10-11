import type { Owner } from "@/content";

export const ownerColor: Record<Owner, string> = {
  maha: "var(--product)",
  nouman: "var(--data)",
  both: "var(--station)",
};

export const ownerLabel: Record<Owner, string> = {
  maha: "Maha",
  nouman: "Nouman",
  both: "Both",
};

/** Sets the --c custom property that colour-codes an element by owner. */
export const tint = (owner: Owner) => ({ "--c": ownerColor[owner] }) as React.CSSProperties;
