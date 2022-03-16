import styled from "styled-components";

export const Container = styled.div`
width:500px ;
height: 600px;
border:1px solid  #46A358;
margin:20px;
display:flex;
 flex-direction:column ;
 align-items:center ;
`
export const Buttons = styled.div`
display:flex;
margin-top:40px;
`
export const Btns = styled.button`
width:80px;
height:30px ;
display:flex ;
justify-content:center ;
align-items:center ;
background-color:#FFFFFF ;
font-family: 'Cera Pro';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 16px;
border: none;
outline:none ;
font-weight: 900;
cursor: pointer;
border-right:${(props)=>props.right?`2px solid #3D3D3D`:'none'} ;


color: #46A358;
`
