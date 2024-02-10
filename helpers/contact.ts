import { IContact } from "@/types";

export const formatPhoneNumberHref = (
  phoneNumber: IContact["phoneNumbers"][0]
) => `tel:+420${phoneNumber}`;

export const formatPhoneNumber = (phoneNumber: IContact["phoneNumbers"][0]) =>
  phoneNumber.toString().replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
