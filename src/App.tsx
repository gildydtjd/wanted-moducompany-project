import { Global } from '@emotion/react';
import AppLayout from 'Components/AppLayout';
import TodoContainer from 'Pages/List/TodoContainer';
import { TodoProvider } from 'store/Todo';
import Reset from 'Styles/Reset';

function App() {
  return (
    <>
      <Global styles={Reset} />
      <TodoProvider>
        <AppLayout>
          <TodoContainer />
        </AppLayout>
      </TodoProvider>
    </>
  );
}

export default App;


// code review 
// - global style로 초기 style 설정
// - TodoProvier로 context api 의 데이터값을 안에 컨테이너에 넘김