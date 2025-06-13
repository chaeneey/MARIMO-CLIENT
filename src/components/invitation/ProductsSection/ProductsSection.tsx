import Link from "next/link";

import { invitationProductsSection } from "./ProductsSection.css";
import InvitationProduct from "../InvitationProduct/InvitationProduct";

// 추후 청첩장 데이터를 가져올 예정
const products = [
  {
    imageUrl: "/images/감딸기.jpeg",
    title: "이것은 이 정도가 적당해요.",
    discountRate: 15,
    price: 304000,
    piece: 50,
    id: 1,
  },
  {
    imageUrl: "/images/상어.png",
    title: "이것은 이 정도가 적당해요.",
    discountRate: 15,
    price: 304000,
    piece: 50,
    id: 2,
  },
  {
    imageUrl: "/images/짤2.jpeg",
    title: "이것은 이 정도가 적당해요.",
    discountRate: 15,
    price: 304000,
    piece: 50,
    id: 3,
  },
];

const ProductsSection = () => {
  return (
    <div className={invitationProductsSection}>
      {products.map((product) => (
        <Link href={`/invitation/detail/${product.id}`} key={product.id}>
          <InvitationProduct product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsSection;
