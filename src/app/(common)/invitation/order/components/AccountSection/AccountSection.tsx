import { Input } from "@/components";

const AccountSection = () => {
  return (
    <>
      <section>
        <section>
          <span>신랑측 정보</span>
          <span>계좌는 최대 3개까지 입력 가능합니다.</span>
        </section>
        <section>
          <button>계좌추가</button>
          <div>
            <span>계좌정보</span>

            <div>
              <Input placeholder="은행" width="20rem" />
              <Input placeholder="예금주" width="20rem" />
              <Input placeholder="계좌번호" width="28rem" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AccountSection;
