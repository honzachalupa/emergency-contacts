export const formatPhoneNumberHref = (phoneNumber: number) =>
  `tel:+420${phoneNumber}`;

export const formatPhoneNumber = (phoneNumber: number) =>
  phoneNumber.toString().replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
