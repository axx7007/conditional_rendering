import styled from 'styled-components'
import {ReactComponent as Group} from '../assets/icons/Group.svg'
import {ReactComponent as Facebook} from '../assets/icons/Facebook.svg' 


export const SignInContainer=styled.div`
display:flex;
flex-direction:column;
`
export const Text = styled.div`
font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #3D3D3D;
margin-top:20px;
`

export const IconG = styled(Group)``
export const IconGText = styled.p`
font-family: 'Cera Pro';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
text-align: center;
color: #727272;
margin-left: 10px;
font-weight:900 ;

`

export const LoginInput = styled.input`
width: 300px;
height: 40px;
border: 1px solid #EAEAEA;
box-sizing: border-box;
border-radius: 5px;
font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #A5A5A5;
margin-top:15px ;
padding-left:10px ;
&:focus{
    outline:none !important;
    border-color:#46A358;
}
`
export const Forgot = styled.div`
width:300px;
display:flex ;
align-items: flex-end ;
`
export const ForgotText = styled.p`
font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #46A358;
display:flex;
margin-left: auto ;
cursor: pointer;
`
export const LogInBtn = styled.button`
width: 300px;
height: 45px;
background: #46A358;
border-radius: 5px;
border: none;
outline:none ;
cursor:pointer ;
margin-top: 12px;
&:focus{
    outline:none ;
}
font-family: 'Cera Pro';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #ffffff;
`

export const OrLogIn = styled.div`
display:flex;
/* justify-content:center ; */
align-items:center ;
justify-content:space-between ;
margin-top:30px;
`
export const Line = styled.line`
width: 101px;
/* height: 0.1px; */
border: 1px solid #EAEAEA;
background-color: #EAEAEA;
`
export const LineText = styled.p`
font-family: 'Cera Pro';
font-style: normal;
font-weight: 900;
font-size: 13px;
line-height: 16px;
color: #3D3D3D;
`
export const GoogleCon = styled.div`
width: 300px;
height: 40px;
border: 1px solid #EAEAEA;
box-sizing: border-box;
border-radius: 5px;
display: flex ;
align-items:center;
justify-content:center;
cursor: pointer;
margin-top:20px;

`

export const FacebookIcon = styled(Facebook)`
`