import { GoogleAdSense } from "next-google-adsense";

export const Ad: React.FC = () => {
  return (
    <GoogleAdSense publisherId={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID} />
  );
};
