import styled from 'styled-components';

export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    font-weight: 200;
    margin: 10px;
`;

export const Subtitle = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 200;
    margin: 10px
`;

export const Nav = styled.nav`
    display: inline-flex;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    background-color: #fff;
    padding: 0 20px;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(159, 162, 177, .8);
    margin: 10px;
`;

export const NavItem = styled.a`
    color: #83818c;
    padding: 20px;
    transition: .3s;
    margin: 0 6px;
    z-index: 1;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    position: relative;
`;

export const Panel = styled.div`
    border-radius: 20px;
    display: flex;
    background-color: #eee;
    margin: auto;
    width: 20%;
    flex-direction: column;
    border: solid 1px #000;
    text-align: left;
    box-shadow: 0 0 20px 3px #888888;
`;

export const Button = styled.a`
    border: solid 2px #eef;
    padding: 10px;
    text-decoration: none;
    border-radius: 20px;
    font-size: 20px;
    color: #000;

    &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

export const Icon = styled.img`
  width: 7%;
  height: 7%;
  margin: 5px;
`;