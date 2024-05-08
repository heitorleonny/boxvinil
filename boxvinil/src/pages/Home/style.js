import styled from "styled-components"


export const Container = styled.div `
    font-family: "Poppins";
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #faebd7;
    padding-bottom: 30px;
    

    h2 {
        font-family: "Titillium Web";
        font-size: 38px;
    }

    h3{
        font-family: "Titillium Web";
        font-size: 24px;
    }

    h4{
        font-family: "Titillium Web";
        font-weight: 300;
        font-size: 20px;
    }
    img{
        margin-top: 30px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }


    
    
    hr {
        color: black;
        margin-top: 30px;
        width: 60%;
    }

    button{
        font-size: 16px;
        color: white;
        font-weight: bold;
        background-color: #00d000;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 5px;
        padding-top: 5px;
        border-radius: 8px;
        transition: background-color 0.3s ease;
        border: none;
    }

    button:hover{
        background-color: black;
    }
`

export const Links = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 10px;

    a {
        color: white;
        font-weight: bold;
        background-color: #00d000;
        padding: 5px;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }

    a:hover{
        background-color: black;
    }

    
`