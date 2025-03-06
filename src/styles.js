    import styled from "styled-components";
    import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

    export const Container = styled.div`
        background: #000000;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    export const ToDoList = styled.div`
        background: #ffffff;
        padding: 30px 21px;
        border-radius: 5px;

        ul {
            padding: 0;
            margin-top: 60px;
        }

        @media screen and (max-width:565px) {
            width: 50%;
            height: auto;
                    
        }
    `

    export const Input = styled.input`
        border: 2px solid #d1d3d466;
        border-radius: 5px;
        height: 40px;
        width: 342px;
        margin-right: 10px;
        padding: 0px 6px;
        font-size: 15px;
        font-weight: 400;
        color: #000000;
        @media screen and (max-width:565px) {
            width: 90%;
            height: auto;
                    
        }
    `

    export const Button = styled.button`
        border: none;
        background-color: #8052ec;
        border-radius: 5px;
        height: 40px;
        width: 130px;
        font-size: 17px;
        font-weight: 900;
        color: #ffffff;
        line-height: 2px;
        cursor: pointer;
        &:hover{
            opacity: .8;
        }
        &:active{
            opacity: .6;
        }
        @media screen and (max-width:565px) {
            height: 30px;
            width: 89px;
            display: block;
            margin: 12px auto;
            font-size: 17px;
        }
    `

    export const ListenItens = styled.div`
        background: ${(props) => (props.$isFinished ? "#E8FF8B" : " #E4E4E4;")};
        width: 480px;
        height: 60px;
        border-radius: 5px;
        padding: 0px 12px;
        box-shadow: 1px 4px 10px 0px #00000033;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 15px;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            list-style: none;
            
        }
        @media screen and (max-width:565px) {
            height: auto;
            width: 89%;
        }

        
    `

    export const Trash = styled(FcEmptyTrash)`
        cursor: pointer;
        width: 26px;
        height: 59px;
        &:hover{
            opacity: .8;
        }
        &:active{
            opacity: .6;
        }
    `

    export const Check = styled(FcCheckmark)`
        cursor: pointer;
        width: 26px;
        height: 59px;
        &:hover{
            opacity: .8;
        }
        &:active{
            opacity: .6;
        }
    `
