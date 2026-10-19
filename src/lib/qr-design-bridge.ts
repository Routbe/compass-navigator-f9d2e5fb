import type { ProfileQrStyle, QrCornerStyle } from "@/lib/profile-qr";
import { normalizeQrSettings } from "@/lib/qr-settings";

/**
 * The /qr generator keeps its style in page state; the profile-hub picker sits
 * deep inside the form. This bridge lets the picker's "Opslaan" read the full
 * design currently on screen (fill, shapes, corners, logo).
 */
export interface GeneratorDesign {
  fgColor: string;
  bgColor: string;
  dotStyle: string;
  outerCornerStyle?: string;
  innerCornerStyle?: string;
  bgGradient?: string | null;
  logo?: string | null;
  logoSize?: number;
  logoMargin?: number;
  hideBackgroundDots?: boolean;
}

let current: GeneratorDesign | null = null;

export function publishQrDesign(design: GeneratorDesign): void {
  current = design;
}

const HEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/** Maps generator styling onto the profile QR style stored in display_prefs.qrSettings. */
export function toProfileQrStyle(design: GeneratorDesign | null): ProfileQrStyle {
  const fg = design && HEX.test(design.fgColor) ? design.fgColor : "#1A1A1A";
  const bg = design && (HEX.test(design.bgColor) || design.bgColor === "transparent") ? design.bgColor : "#FFFFFF";
  const dot = design?.dotStyle ?? "square";
  const cornerStyle: QrCornerStyle = dot === "dots" ? "dots" : /round|classy/.test(dot) ? "smooth" : "square";
  const raw = {
    fgColor: fg,
    bgColor: bg,
    cornerStyle,
    emblem: false,
    dotStyle: dot,
    outerCornerStyle: design?.outerCornerStyle,
    innerCornerStyle: design?.innerCornerStyle,
    bgGradient: design?.bgGradient ?? null,
    logo: design?.logo ?? null,
    logoSize: design?.logoSize,
    logoMargin: design?.logoMargin,
    hideBackgroundDots: design?.hideBackgroundDots,
  };
  return normalizeQrSettings(raw) ?? { fgColor: fg, bgColor: bg, cornerStyle, emblem: false };
}

export function currentProfileQrStyle(): ProfileQrStyle {
  return toProfileQrStyle(current);
}
