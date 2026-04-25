export const characterImages = {
  STAC: "/characters/STAC.png",
  STAV: "/characters/STAV.png",
  STIC: "/characters/STIC.png",
  STIV: "/characters/STIV.png",
  SFAC: "/characters/SFAC.png",
  SFAV: "/characters/SFAV.png",
  SFIC: "/characters/SFIC.png",
  SFIV: "/characters/SFIV.png",
  MTAC: "/characters/MTAC.png",
  MTAV: "/characters/MTAV.png",
  MTIC: "/characters/MTIC.png",
  MTIV: "/characters/MTIV.png",
  MFAC: "/characters/MFAC.png",
  MFAV: "/characters/MFAV.png",
  MFIC: "/characters/MFIC.png",
  MFIV: "/characters/MFIV.png",
} as const;

export type CharacterImageCode = keyof typeof characterImages;
