import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100%;
  background-color: #eef4f7;
`

export const ListItemsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 380px;
  background-color: #ffffff;
  margin-right: 15px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #64748b;
`

export const Image = styled.img`
  width: 100%;
  height: 150px;
  padding: 5px;
`
export const Name = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #475569;
`

export const Title = styled.h1`
  color: #334155;
  font-size: 35px;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #52bbf0;
  padding: 5px;
`
