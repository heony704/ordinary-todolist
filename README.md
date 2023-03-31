# 평범한 투두리스트

할일을 체크할 수 있는 평범한 투두리스트 웹 어플리케이션입니다.  
로그인한 사용자는 본인만의 투두리스트에 접근할 수 있습니다.

> [배포링크: ordinary-todolist.netlify.app](https://ordinary-todolist.netlify.app)

## 기능

### 인증 및 인가

- [x] 사용자는 로그인할 때, 이메일과 비밀번호를 통해 인증
- [x] 인증된(토큰이 부여된) 사용자만이 본인의 투두리스트에 접근 가능
- [x] 인증되지 않은 사용자가 투두리스트에 접근 시 로그인 페이지로 리다이렉트

### 할일 관리

- [x] 할일을 입력해 투두리스트에 투두 생성
- [x] 해결된 할일은 클릭하여 해결 표시
- [x] 할일 수정, 삭제 가능

## 사용된 기술

- `React v18`
- `TypeScript`
- `React Router v6`
- `Axios`
- `TailwindCSS`

## 프로젝트 구조

```
src
 ┣ api
 ┃ ┣ auth.ts
 ┃ ┗ todo.ts
 ┣ components
 ┃ ┣ Alert.tsx
 ┃ ┣ Form.tsx
 ┃ ┣ LoginForm.tsx
 ┃ ┣ RegisterForm.tsx
 ┃ ┣ Todo.tsx
 ┃ ┣ TodoInput.tsx
 ┃ ┗ TodoList.tsx
 ┣ hooks
 ┃ ┣ useAlert.tsx
 ┃ ┣ useAuthRouting.ts
 ┃ ┗ useFormState.ts
 ┣ pages
 ┃ ┣ AuthPage.tsx
 ┃ ┗ TodolistPage.tsx
 ┣ utils
 ┃ ┣ token.ts
 ┃ ┗ validate.ts
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┗ react-app-env.d.ts
```

- `api`: API 호출 관련 함수
- `components`: 컴포넌트
- `hooks`: 커스텀 훅
- `pages`: 컴포넌트를 조합해서 만든 페이지
- `utils`: API 관련 함수, 커스텀 훅이 아닌 공통적으로 사용되는 함수
- `react-app-env.d.ts`: 전역으로 사용되는 타입

## 직접 실행하는 방법

해당 프로젝트를 clone해서 로컬 환경에서 직접 실행할 수 있습니다.

### 1. 프로젝트 복제

```bash
git clone https://github.com/heony704/ordinary-todolist.git
cd ordinary-todolist
```

### 2. 프로젝트에 필요한 라이브러리 설치

```bash
yarn
```

### 3. 로컬 환경에서 평범한 투두리스트 실행

```bash
yarn start
```
