import * as styles from "./AgreeModal.css";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";

const AgreeModal = () => {
  const [agreePersonal, setAgreePersonal] = useState(false); // 필수
  const [agreeTerms, setAgreeTerms] = useState(false); // 필수
  const [agreeMarketing, setAgreeMarketing] = useState(false); // 선택
  const [agreeAll, setAgreeAll] = useState(false);

  const handleAgreeAll = (checked: boolean) => {
    setAgreeAll(checked);
    setAgreePersonal(checked);
    setAgreeTerms(checked);
    setAgreeMarketing(checked);
  };
  return (
    <div>
      <div>
        <h1>구매를 위한 약관동의</h1>
        <div>X</div>
      </div>
      <div />
      <div>
        <span className={styles.questionWrapper}>
          <CheckBox />
          [필수] 개인정보 수집 및 이용동의
        </span>
        <span className={styles.questionWrapper}>
          <CheckBox />
          [필수] 게시글 이용약관
        </span>
        <div>
          <span className={styles.questionWrapper}>
            <CheckBox />
            [선택] 청첩장 할인 및 혜택 안내 수신동의
          </span>
          <span>
            수신 동의 시 청첩장 할인쿠폰, 이벤트 등에 관한 혜택을 이메일, SMS
            등을 통해 받으실 수 있습니다.
          </span>
        </div>
        <div />
        <span className={styles.questionWrapper}>
          <CheckBox />
          위의 사항에 대해 전체 동의합니다.
        </span>
      </div>
      <Button size="50" color="lime01">
        주문하기
      </Button>
    </div>
  );
};

export default AgreeModal;
