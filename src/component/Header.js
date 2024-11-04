// function Header(){
//   return(
//     <header>
//       <h1>header</h1>
//     </header>
//   ); // 한줄이면 괄호 생략가능
// }
// 컴포넌트를 함수표현식으로 표현 할수도 있다.
const Header = function(){
    return (
      <header>
        <h1>header</h1>
      </header>
    ); 
  }


  export default Header;