import styled from 'styled-components';

const HeaderStyle = styled.div`
  .ant-page-header {
    padding: 0px 10px;
  }
  .logo{
    height: 20px;
  }
  .user{
    color: ${props=>props.theme.color};
    padding: 2px 29px 0px 0px;

    .pic{
      background-color: #363636 ;
      letter-spacing:1px;
      padding: 5px;
      border-radius: 50%;
      border: 1px solid #394D5C;
    }
  }
`;

export { HeaderStyle };
