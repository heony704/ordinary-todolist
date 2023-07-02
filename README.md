# 평범한 투두리스트

![todolist_main](https://github.com/heony704/ordinary-todolist/assets/36994104/c388c89d-e672-44ca-b1e3-ce6045933460)

할일을 체크할 수 있는 평범한 투두리스트 웹 어플리케이션입니다.  
로그인한 사용자는 본인만의 투두리스트에 접근할 수 있습니다.

> [배포링크: ordinary-todolist.netlify.app](https://ordinary-todolist.netlify.app)

## 사용된 기술

- `React v18`
- `TypeScript`
- `React Router v6`
- `Axios`
- `TailwindCSS`

## 기능

![todolist_login](https://github.com/heony704/ordinary-todolist/assets/36994104/ba498f9e-aef3-4649-ac09-44ca806cc619)

### 인증 및 인가

- [x] 사용자는 로그인할 때, 이메일과 비밀번호를 통해 인증
- [x] 인증된(토큰이 부여된) 사용자만이 본인의 투두리스트에 접근 가능
- [x] 인증되지 않은 사용자가 투두리스트에 접근 시 로그인 페이지로 리다이렉트

![todolist_crud](https://github.com/heony704/ordinary-todolist/assets/36994104/53e6a133-0a61-4ed0-bf96-fd5af4656b71)

### 할일 관리

- [x] 할일을 입력해 투두리스트에 투두 생성
- [x] 해결된 할일은 클릭하여 해결 표시
- [x] 할일 수정, 삭제 가능

## 신경 쓴 부분

### 색상 대비율을 높이고 시맨틱 태그를 활용하여 웹 접근성 개선

저시력자와 스크린 리더기 사용자 등 다양한 사용자를 위해 웹 접근성을 개선했습니다.

- 색상 대비율 높임
- `div` 태그 대신 시맨틱 태그 활용
- 요소를 파악할 수 있도록 `role`, `aria-label`과 같은 요소 속성 추가

Lighthouse 기준 웹 접근성 분야에서 97점을 달성했습니다.

![todolist_web_accessibility](https://github.com/heony704/ordinary-todolist/assets/36994104/a854a799-0f6a-4f28-a9e3-1f81c28e673e)

100점이 아니라 3점이 감점된 97점인 이유는 완료한 투두의 색상대비율이 낮기 때문입니다.  
완료한 투두는 완료되지 않은 투두에 비해 눈에 덜 띄도록 의도적으로 색상대비율을 낮췄기 때문에 개선하지 않았습니다.

### `useCallback`과 `React.memo`를 이용하여 렌더링 최적화

투두리스트가 리렌더링되는 순간을 최소화할 수 있도록 rerenderFlag 상태를 만들어 필요한 순간에만 리렌더링하도록 관리했습니다.  
또, `useCallback`과 `React.memo`를 이용해 변하지 않은 컴포넌트는 불필요하게 렌더링되지 않도록 했습니다.

```jsx
export default function TodoRerender() {
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const rerender = useCallback(() => {
    setRerenderFlag(prevRerenderFlag => !prevRerenderFlag);
  }, []);

  // ...
}
```

```jsx
function TodoInput({ rerender }: TodoInputComponent) {
  // ...
}

export default React.memo(TodoInput);
```

자세한 내용은 [리액트 렌더링 최적화하기](https://heony704.github.io/react-rendering-optimization/) 포스트에서 확인하실 수 있습니다.

### 데이터가 로딩 중인지를 상태로 관리하여 로딩 중에는 Spinner를 표시해 UX 개선

로딩 중인지를 상태로 관리하여 데이터를 받아오기 전에는 Spinner를 표시하고, 데이터를 다 받아온 후엔 결과값을 보여주도록 했습니다.

```jsx
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

![todolist_loading](https://github.com/heony704/ordinary-todolist/assets/36994104/52f71e88-08be-474e-8c1d-ece0a9b6d6c1)

### API 요청 실패 시 Alert, Toast 등 사용자에게 적절한 UI를 표시하여 UX 개선

로그인 API 요청 실패시, Alert을 표시하고 폼 내용을 비워 다시 로그인하도록 유도합니다.

```jsx
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

```jsx
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

```jsx
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
      })
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

### `tailwindcss`의 dark 클래스를 사용해 시스템 설정에 따라 다크모드가 적용되도록 UI 개선

![todolist_darkmode](https://github.com/heony704/ordinary-todolist/assets/36994104/7a81b78a-16b0-40aa-b5ba-a8a6bd0b6951)

### REST API를 사용하기 위해 AWS 서버 구축

## 프로젝트 구조

```
src
 ┣ api
 ┃ ┣ authorize.ts
 ┃ ┣ fetchInstance.ts
 ┃ ┗ handleTodo.ts
 ┣ components
 ┃ ┣ Alert.tsx
 ┃ ┣ Authorization.tsx
 ┃ ┣ Form.tsx
 ┃ ┣ LoginForm.tsx
 ┃ ┣ LogoutButton.tsx
 ┃ ┣ RegisterForm.tsx
 ┃ ┣ Spinner.tsx
 ┃ ┣ Toast.tsx
 ┃ ┣ Todo.tsx
 ┃ ┣ TodoInput.tsx
 ┃ ┣ TodoList.tsx
 ┃ ┗ TodoRerender.tsx
 ┣ hooks
 ┃ ┣ useAlert.tsx
 ┃ ┣ useFormState.ts
 ┃ ┗ useToast.ts
 ┣ pages
 ┃ ┣ AuthPage.tsx
 ┃ ┗ TodolistPage.tsx
 ┣ utils
 ┃ ┣ accessToken.ts
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
