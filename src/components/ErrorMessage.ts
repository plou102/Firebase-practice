interface ErrorType {
  [key: string]: string;
}

export const errors: ErrorType = {
  "auth/email-already-in-use": "이미 존재하는 이메일 입니다.",
  "auth/weak-password": "비밀번호는 6자 이상으로 입력해주세요.",
  "auth/network-request-failed": "네트워크 연결에 실패 하였습니다.",
  "auth/invalid-email": "잘못된 이메일 형식입니다.",
  "auth/internal-error": "잘못된 요청입니다.",
  "auth/user-not-found": "일치하는 사용자를 찾을 수 없습니다.",
  "auth/wrong-password": "비밀번호가 일치하지 않습니다.",
  "auth/invalid-login-credentials": "로그인에 실패하였습니다.",
};
