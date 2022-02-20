import React from 'react'
import styled from 'styled-components'

function Movies() {

  return (

    <Container>
        <h4>Recommended for You!</h4>
        <Content>
            <Wrap>
                <img src="https://media.disneylandparis.com/d4th/fr-fr/images/n035557_2028jun29_world_disney-junior-dream-factory-studio_16-9_tcm808-231871.jpg?w=980" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.leparisien.fr/resizer/JTw-lw4jWVdNr6PJiKm5VCHU_m4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/P4RNGVFNI2IM7E74B2XSKVTK7Q.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.chroniquedisney.fr/img/liste/listePP-AGME-01.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://fr.web.img6.acsta.net/r_654_368/newsv7/20/08/21/14/14/1097276.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.sortiraparis.com/images/1001/77381/626635-luca-le-prochain-disney-pixar-l-affiche.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://media.disneylandparis.com/d4th/fr-fr/images/n035557_2028jun29_world_disney-junior-dream-factory-studio_16-9_tcm808-231871.jpg?w=980" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.leparisien.fr/resizer/JTw-lw4jWVdNr6PJiKm5VCHU_m4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/P4RNGVFNI2IM7E74B2XSKVTK7Q.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.chroniquedisney.fr/img/liste/listePP-AGME-01.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://fr.web.img6.acsta.net/r_654_368/newsv7/20/08/21/14/14/1097276.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.sortiraparis.com/images/1001/77381/626635-luca-le-prochain-disney-pixar-l-affiche.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://media.disneylandparis.com/d4th/fr-fr/images/n035557_2028jun29_world_disney-junior-dream-factory-studio_16-9_tcm808-231871.jpg?w=980" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.leparisien.fr/resizer/JTw-lw4jWVdNr6PJiKm5VCHU_m4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/P4RNGVFNI2IM7E74B2XSKVTK7Q.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.chroniquedisney.fr/img/liste/listePP-AGME-01.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://fr.web.img6.acsta.net/r_654_368/newsv7/20/08/21/14/14/1097276.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://www.sortiraparis.com/images/1001/77381/626635-luca-le-prochain-disney-pixar-l-affiche.jpg" alt="" />
            </Wrap>
        </Content>
    </Container>

  )
}

export default Movies

const Container = styled.div`



`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr))
`

const Wrap = styled.div`

    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px --10px, rgb(0 0 0 / 69%) 0px 16px 30px -10px;
    transition: all 250% cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 69%) 0px 40px 58px --16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px ;
        border: rgba(249, 249, 249, .8);
    }
`
