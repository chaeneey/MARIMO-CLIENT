import * as styles from './AccessRestrictModal.css'
import Button from "../Button/Button"

interface AccessRestrictModalProps {
  onClose: () => void;
}

const AccessRestrictModal = ({onClose}: AccessRestrictModalProps) => {
  return (
    <div className={styles.modalContainer}>
        <h1 className={styles.h1Style}>원활한 서비스 이용을 위해<br />PC 환경으로 접속해주세요</h1>
        <span className={styles.spanStyle}>특별한 시작에 MARIMO가 함께하겠습니다</span>
        <div className={styles.buttonStyle}>
            <Button size='40' color='gray01' onClick={onClose}>확인</Button>
        </div>
    </div>
  )
}

export default AccessRestrictModal