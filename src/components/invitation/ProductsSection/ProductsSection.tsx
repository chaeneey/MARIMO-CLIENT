import Link from "next/link";

import { InvitationItemList } from "@types";

import { invitationProductsSection } from "./ProductsSection.css";
import InvitationProduct from "../InvitationProduct/InvitationProduct";

const ProductsSection = ({ invitationItemList }: InvitationItemList) => {
  return (
    <div className={invitationProductsSection}>
      {invitationItemList.map((item) => (
        <Link href={`/invitation/detail/${item.id}`} key={item.id}>
          <InvitationProduct invitationItem={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsSection;
