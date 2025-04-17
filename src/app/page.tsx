import { Accordion } from "@/components";

export default function Home() {
  return (
    <div>
      <Accordion title="전세버스" hasCheckbox>
        <div style={{ padding: "1rem" }}>
          <p>이곳에 전세버스에 대한 입력폼이나 설명이 들어갑니다.</p>
          <input type="text" placeholder="버스 회사 이름" />
        </div>
      </Accordion>
    </div>
  );
}
