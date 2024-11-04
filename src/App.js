import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
// 컴포넌트를 함수선언식으로 표현 할수도 있고,


function ChildComp(){
  return (
    <div>
      Child Component
    </div>
  )
}


//  비동기 통신 
function App() {

  const stuName = 'dooly';
  const stuAge = 20;
  const stuAdd = '서울시';

  const stuInFo ={
    name: 'dooly',
    age: 20,
    addr: '서울시',
    //hobbies : ['낮잠','코딩','운동','영화보기']
  }

  return (
    <div className="App">
      <Header/>
      {/* <Body name={stuInFo.name} age={stuInFo.age} addr={stuInFo.address} /> */}
       <Body {...stuInFo}/>  {/* {...stuInFo} : stuInFo 객체를 props로 전달 */}
      <Footer>
        <ChildComp /> {/* 컴포넌트를  */}
      </Footer>
    </div>
  );
}

export default App;
