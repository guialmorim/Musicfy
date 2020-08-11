import styled from 'styled-components';


export const ListContainer = styled.ul`
    list-style-type: none;
    margin: 40px 20px ;
    padding: 0;
`;

export const ListItem = styled.li`
    transition: .3s;
    margin: 20px 20px;
    font-size: 20px;
    border-bottom: 1px solid rgba(189, 189, 189, .4);

    &:hover {
        font-size: 23px;
    }
`;

export const ListItemTitle = styled.a`
    text-decoration: none;
    color: #000;
    display: block;
    width: 100%;
`;

export const ListItemSubtitle = styled.span`
    margin: 10px 10px;
    font-size: 13px;
`;