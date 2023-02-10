import styled from '@emotion/styled'
import { Button } from '@mui/material'

const BannerWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

const BannerView = styled.div`
  max-width: 700px;
`

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
`

const SubTitle = styled.div`
  margin-top: 20px;
  font-size: 28px;
  font-weight: 500;
  max-width: 380px;
`

const ButtonView = styled.div`
  margin-top: 20px;
`

const BannerButton = styled(Button)`
  margin-right: 10px;
  padding: 12px 48px;
  font-size: 16px;
`

export const Banner = () => {
  
  return (
    <BannerWarpper>
      <BannerView>
        <Title>Discover, collect and sell extradornary NFTs</Title>
        <SubTitle>on the world's first & largest NFT marketplace</SubTitle>
        <ButtonView>
          <BannerButton
            variant='contained'
            size='large' >
            Explore
          </BannerButton>
          <BannerButton
            variant='outlined'
            size='large' >
            Create
          </BannerButton>
        </ButtonView>
      </BannerView>
    </BannerWarpper>
  )
}