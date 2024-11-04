import React , {useState} from "react";
// function Body(props){
// function Body({name,age,addr,hobbies}){
//     const numA = 20;
//     const numB = 3;
//     const str1 = 'Hello';
//     const bulA = true;
//     const bulB = false;

//     const obj ={
//         name : 'dooly',
//         age : 27
//     };

//     //console.log(props);

//     //const {name,age,addr} = props;

//     return (
//       <div className='body'>
//         <React.Fragment>
//             <h1>body</h1>
//             <h2>{numA + numB}</h2>
//             <h2>{str1} react</h2>
//             <h2>{String(bulA || bulB)}</h2>
//             <h2>{obj.name}</h2>
//             <h2>{obj.age}</h2>
//         </React.Fragment>

//         <>
//             <div style={{backgroundColor : 'yellow',color:'gray' }}>{numA} is {numA % 2 === 0 ? 'even' : 'odd'}</div>
//             <div style={{backgroundColor : 'green',color:'gray' }}>이름 : {name}</div>
//             <div style={{backgroundColor : 'blue',color:'gray' }}>나이 :{age}</div>
//             <div style={{backgroundColor : 'blue',color:'gray' }}>주소 :{addr}</div>
//             <div>{name} 학생의 취미는 {hobbies.length}가지 입니다.</div>
//         </>
        
//       </div>
//     );
//   }
// // 부모 컴포넌트에서 넘겨온 props중에서 값이 제대로 전달되지 않는 속성이 있다면 에러가 나는데 ,
// // 값이 전달되지 않더라도 기본값을 줄수 있다.
// Body.defaultProps = {
//     hobbies : []
// }


//----------------------------------------------------------------------------------
// 이벤트 처리
function Body(){

    // function handleOnClick(e){
    //     console.log(e.target.name);

    //     if(e.target.name == 'a'){
    //         alert('a클릭');
    //     }else{
    //         alert('b클릭');
    //     }
    //     //alert('onclick')
    // }

    // 241104 
    const [count , SetCount] = useState(0); // useState객체 생성 (구조분해 할당)

    const onIncreasement = function(){
        SetCount(count + 1);
    }

    const onDecreasement = () => {
        if(count > 0){
            SetCount(count - 1);
        }
    }


    return (
        <div className="body">
            {/* <button name='a' onClick={handleOnClick}>클릭a</button>
            <button name='b' onClick={handleOnClick}>클릭b</button> */}
            <button onClick={onIncreasement}>+</button>
            {count}
            <button onClick={onDecreasement}>-</button>
        </div>
    )
}

  export default Body;

  // export : 기본적으로 변수 함수 상수 객체등을 내보내기 할때 사용
 // export defult : 하나의 js파일에서 하나의 컴포넌트 있고 하나를 내보낼떄 사용 