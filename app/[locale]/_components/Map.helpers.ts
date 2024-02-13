import { TItemCategory } from "@/types";

export const LAT_ALIGNMENT_DESKTOP = 0.05;
export const LNG_ALIGNMENT_DESKTOP = 0.08;

export const mapStyles = {
  light: "854d507a785ca948",
  dark: "465256d805aefff9",
};

const iconColors = {
  hospital: "FF0000",
  pharmacy: "FF6D0A",
  vet: "FFFF00",
};

const icon = (color: string) =>
  `data:image/svg+xml,<svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden"><defs><clipPath id="clip0"><rect x="417" y="563" width="23" height="23"/></clipPath><clipPath id="clip1"><rect x="417" y="563" width="23" height="23"/></clipPath></defs><g clip-path="url(%23clip0)" transform="translate(-417 -563)"><g clip-path="url(%23clip1)"><path d="M420 574.852 426.852 574.852 426.852 568 432.148 568 432.148 574.852 439 574.852 439 579.148 432.148 579.148 432.148 586 426.852 586 426.852 579.148 420 579.148Z" fill="%23${color}" fill-rule="evenodd" fill-opacity="1"/></g></g></svg>`;

export const icons: {
  [type in TItemCategory]: string;
} = {
  hospital: icon(iconColors.hospital),
  vet: icon(iconColors.vet),
  pharmacy: icon(iconColors.pharmacy),
};
