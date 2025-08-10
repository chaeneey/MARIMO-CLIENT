"use client";

import { CompleteSection } from "@/components/order";

const page = () => {
  const orderCode = localStorage.getItem("orderCode");

  return <CompleteSection orderCode={orderCode} />;
};

export default page;
