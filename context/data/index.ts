import { alphanumericSorter } from "@/helpers";
import hospitals from "./hospitals";
import pharmacies from "./pharmacies";
import vets from "./vets";

const data = [...hospitals, ...pharmacies, ...vets].sort((a, b) =>
  alphanumericSorter(a.address.district, b.address.district)
);

export default data;
