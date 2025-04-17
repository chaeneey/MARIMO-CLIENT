"use client";
import { useForm } from "react-hook-form";

import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";

type FormValues = {
  orderName: string;
  email: string;
  text: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

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
      <TextArea
        placeholder="반드시 오탈자, 띄어쓰기가 제대로 되어있는지 다시 한 번 확인해 주세요!"
        {...register("text", {
          required: "청첩장 소개 문구를 작성해주세요",
          maxLength: {
            value: 499,
            message: "500자 이내로 작성해주세요.",
          },
        })}
        errorMessage={errors.text?.message}
        currentLength={watch("text")?.length ?? 0}
        maxLength={500}
      />
      <button type="submit">제출</button>
    </form>
  );
}
