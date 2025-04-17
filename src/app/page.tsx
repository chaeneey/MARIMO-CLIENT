"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";

type FormValues = {
  name: string;
  phoneNumber: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("폼 제출됨", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Home
      <Input
        name="이름"
        register={register("name", { required: "주문자명을 입력해주세요" })}
        error={!!errors.name}
        errorText={errors.name?.message}
        placeholder="주문자명을 입력해주세요"
        infoText="디자인 확인(교정)이 가능한 분의 성함을 기입해 주세요."
      />
      <Input
        name="전화번호"
        register={register("phoneNumber", {
          required: "전화번호를 입력해주세요",
        })}
        error={!!errors.phoneNumber}
        errorText={errors.phoneNumber?.message}
        placeholder="010-1234-5678"
        infoText="정확한 전화번호를 입력해주세요."
      />
      <button type="submit">제출</button>
    </form>
  );
}
