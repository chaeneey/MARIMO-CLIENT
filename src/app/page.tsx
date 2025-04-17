"use client";
import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";

type FormValues = {
  orderName: string;
  email: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("폼 제출됨", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Home
      <Input
        content="orderName"
        value={watch("orderName")}
        setValue={setValue}
        placeholder="주문자명을 입력해주세요"
        infoMessage="디자인 확인(교정)이 가능한 분의 성함을 기입해 주세요."
        {...register("orderName", {
          required: "주문자명을 입력해주세요",
          maxLength: {
            value: 10,
            message: "주문자명은 10자 이내로 작성해주세요.",
          },
        })}
        errorMessage={errors.orderName?.message}
      />
      <Input
        content="email"
        value={watch("email")}
        setValue={setValue}
        placeholder="이메일을 입력하세요."
        {...register("email", {
          required: "이메일을 입력해주세요",
          maxLength: {
            value: 10,
            message: "이메일은 10자 이내로 작성해주세요.",
          },
        })}
        errorMessage={errors.email?.message}
      />
      <button type="submit">제출</button>
    </form>
  );
}
