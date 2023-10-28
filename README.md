<h1 align=center>평범한 투두리스트</h1>

<div align=center>
  <img src="https://img.shields.io/badge/React v18-61DAFB?style=flat&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React Router v6-CA4245?style=flat&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white">
</div>
<br>

<div align=center>
  <img src="https://github.com/heony704/ordinary-todolist/assets/36994104/c388c89d-e672-44ca-b1e3-ce6045933460" width=600>
</div>
<br>

<div align=center>
할일을 체크할 수 있는 평범한 투두리스트 웹 어플리케이션입니다.<br>
로그인한 사용자는 본인만의 투두리스트에 접근할 수 있습니다.
</div>
<br>

<div align=center>
  <a target="_blank" href="https://ordinary-todolist.netlify.app">평범한 투두리스트 사용해보기</a>
</div>

## 기능

### 인증 및 인가

<div align=center>
  <img src="https://github.com/heony704/ordinary-todolist/assets/36994104/ba498f9e-aef3-4649-ac09-44ca806cc619" width=600>
</div>

- [x] 사용자는 로그인할 때, 이메일과 비밀번호를 통해 인증
- [x] 인증된(토큰이 부여된) 사용자만이 본인의 투두리스트에 접근 가능
- [x] 인증되지 않은 사용자가 투두리스트에 접근 시 로그인 페이지로 리다이렉트

### 할일 관리

<div align=center>
  <img src="https://github.com/heony704/ordinary-todolist/assets/36994104/53e6a133-0a61-4ed0-bf96-fd5af4656b71" width=600>
</div>

- [x] 할일을 입력해 투두리스트에 투두 생성
- [x] 해결된 할일은 클릭하여 해결 표시
- [x] 할일 수정, 삭제 가능

## 프로젝트 구조

```c
src
 ┣ api
 ┃ ┣ authorize.ts // 사용자 인증 함수
 ┃ ┣ fetchInstance.ts // 기본 설정된 axios 인스턴스 제공 함수
 ┃ ┗ handleTodo.ts // Todo CRUD 함수
 ┣ components
 ┃ ┣ Alert.tsx
 ┃ ┣ Authorization.tsx // 로그인 여부에 따라 navigate해주는 컴포넌트
 ┃ ┣ Form.tsx
 ┃ ┣ IconButton.tsx
 ┃ ┣ LoginForm.tsx
 ┃ ┣ LogoutButton.tsx
 ┃ ┣ RegisterForm.tsx
 ┃ ┣ Spinner.tsx
 ┃ ┣ Toast.tsx
 ┃ ┣ Todo.tsx
 ┃ ┣ TodoInput.tsx
 ┃ ┣ TodoList.tsx
 ┃ ┗ TodoRerender.tsx // 투두리스트의 리렌더링 타이밍을 관리하는 컴포넌트
 ┣ hooks
 ┃ ┣ useAlert.tsx // Alert 컴포넌트를 사용하는 훅
 ┃ ┣ useFormState.ts // 폼 입력값들을 상태로 관리하는 훅
 ┃ ┗ useToast.ts // Toast 컴포넌트를 사용하는 훅
 ┣ pages
 ┃ ┣ AuthPage.tsx // 인증 관련 페이지 레이아웃
 ┃ ┗ TodolistPage.tsx // 투두리스트 페이지
 ┣ utils
 ┃ ┣ accessToken.ts // 사용자 인증 토큰을 다루는 함수
 ┃ ┗ validate.ts // 폼 입력값이 유효한지 판단하는 함수
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┗ react-app-env.d.ts
```

## 신경 쓴 부분

### 색상 대비율을 높이고 시맨틱 태그를 활용하여 웹 접근성 개선

저시력자와 스크린 리더기 사용자 등 다양한 사용자를 위해 웹 접근성을 개선했습니다.

- 색상 대비율 높임
- `div` 태그 대신 시맨틱 태그 활용
- 요소를 파악할 수 있도록 `role`, `aria-label`과 같은 요소 속성 추가

Lighthouse 기준 웹 접근성 분야에서 97점을 달성했습니다.

<div align=center>
  <img src="https://github.com/heony704/ordinary-todolist/assets/36994104/a854a799-0f6a-4f28-a9e3-1f81c28e673e" width=500>
</div>

100점이 아니라 3점이 감점된 97점인 이유는 완료한 투두의 색상대비율이 낮기 때문입니다.  
완료한 투두는 완료되지 않은 투두에 비해 눈에 덜 띄도록 의도적으로 색상대비율을 낮췄기 때문에 개선하지 않았습니다.

### `useCallback`과 `React.memo`를 이용하여 컴포넌트 렌더링 최적화

투두리스트가 리렌더링되는 순간을 최소화할 수 있도록 rerenderFlag 상태를 만들어 필요한 순간에만 리렌더링하도록 관리했습니다.  
또, `useCallback`과 `React.memo`를 이용해 변하지 않은 컴포넌트는 불필요하게 렌더링되지 않도록 했습니다.

```tsx
export default function TodoRerender() {
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const rerender = useCallback(() => {
    setRerenderFlag(prevRerenderFlag => !prevRerenderFlag);
  }, []);

  // ...
}
```

```tsx
function TodoInput({ rerender }: TodoInputComponent) {
  // ...
}

export default React.memo(TodoInput);
```

자세한 내용은 [리액트 렌더링 최적화하기](https://heony704.github.io/react-rendering-optimization/) 포스트에서 확인하실 수 있습니다.

### `Suspense`와 `lazy`를 사용하여 페이지 별 코드 분할 및 지연 로딩

빌드 파일이 하나로 통합되어 있다면 투두리스트 페이지에서 회원가입 관련 코드가 함께 로드되는 등 사용되지 않는 코드까지 한꺼번에 로드되는 문제가 발생합니다.  
`Suspense`와 `lazy`를 사용해 컴포넌트를 동적으로 import하여 페이지에 필요한 코드만 로드하도록 했습니다.

```tsx
import Authorization from 'src/components/Authorization';
const AuthPage = lazy(() => import('src/pages/AuthPage'));
const TodolistPage = lazy(() => import('src/pages/TodolistPage'));
const LoginForm = lazy(() => import('src/components/LoginForm'));
const RegisterForm = lazy(() => import('src/components/RegisterForm'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Authorization />}>
            <Route path="/" element={<TodolistPage />} />
            <Route element={<AuthPage />}>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

### 데이터가 로딩 중인지를 상태로 관리하여 로딩 중에는 Spinner를 표시해 UX 개선

로딩 중인지를 상태로 관리하여 데이터를 받아오기 전에는 Spinner를 표시하고, 데이터를 다 받아온 후엔 결과값을 보여주도록 했습니다.

```tsx
export default function TodoList({
  rerenderFlag,
  rerender,
}: TodoListComponent) {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  // ...

  useEffect(() => {
    getTodos()
      .then(data => {
        setTodoList(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [rerenderFlag]);

  if (loading)
    return (
      <div className="flex justify-center items-center w-full mt-16">
        <Spinner />
      </div>
    );

  // return todoList ...
}
```

<div align=center>
  <img src="https://github.com/heony704/ordinary-todolist/assets/36994104/52f71e88-08be-474e-8c1d-ece0a9b6d6c1" width=600>
</div>

### API 요청 실패 시 Alert, Toast 등 사용자에게 적절한 UI를 표시하여 UX 개선

로그인 API 요청 실패시, Alert을 표시하고 폼 내용을 비워 다시 로그인하도록 유도합니다.

```tsx
export default function LoginForm() {
  // ...
  const handleSubmit = async () => {
    try {
      const response = await login(loginForm.email, loginForm.password);
      saveToken(response.access_token);
      window.location.reload();
    } catch (error) {
      alert(
        '로그인 실패',
        '비밀번호가 일치하지 않거나 회원 정보가 존재하지 않습니다. \n 다시 로그인해주세요.',
      );
      resetForm();
    }
  };
  // ...
}
```

투두 삭제 API 요청 실패 시, Toast를 표시하고 페이지를 새로고침하여 문제없이 다시 투두를 삭제하도록 유도합니다.

```tsx
export default function Todo() {
  // ...
  const removeTodo = async () => {
    try {
      await deleteTodo(id);
      rerenderTodoList();
    } catch {
      toast('오류가 발생했습니다. 다시 시도해주세요.');
      setTimeout(() => window.location.reload(), 1500);
    }
  };
  // ...
}
```

투두리스트를 가져오는 API 요청 실패 시, 투두리스트를 가져올 수 없음을 명시하여 사용자가 페이지를 새로고침하거나 문제를 해결하도록 유도합니다.

```tsx
export default function TodoList({
  rerenderFlag,
  rerender,
}: TodoListComponent) {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTodos()
      .then(data => {
        setTodoList(data);
      })
      .catch(() => {
        setError(true);
      });
  }, [rerenderFlag]);

  return (
    <div className="w-full mt-10 space-y-6">
      {error ? (
        <div className="flex w-full justify-center text-center text-black leading-10">
          오류로 인해 TodoList를 가져올 수 없습니다.
          <br />
          다시 시도해주세요.
        </div>
      ) : (
        todoList
          .slice(0)
          .reverse()
          .map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              rerenderTodoList={rerender}
            />
          ))
      )}
    </div>
  );
}
```

### AWS 서버 환경 구축하여 REST API 연동

AWS에 우분투 인스턴스를 만들어 투두리스트 데이터를 REST API로 받아올 수 있도록 했습니다.  
HTTP 통신 설정같은 환경 구축은 직접 했으며 백엔드 서버는 오픈 소스코드를 이용했습니다.

AWS 서버 환경 구축에 대한 자세한 내용은 [REST API 서버에 HTTPS 통신 설정하기](https://heony704.github.io/rest-api-https/), [ubuntu nodejs 프로젝트 환경 만들기](https://heony704.github.io/ubuntu-nodejs-setting/) 포스트에서 확인할 수 있습니다.

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
