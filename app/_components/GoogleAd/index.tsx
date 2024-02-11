import { AdUnit, GoogleAdSense } from "next-google-adsense";

export const InitializeGoogleAdSense: React.FC = () => (
  <GoogleAdSense publisherId={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID} />
);

export const GoogleAd: React.FC = () => (
  <div>
    Reklama
    <AdUnit slotId="2352578397" layout="in-article" />
  </div>
);
