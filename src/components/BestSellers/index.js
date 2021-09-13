import React from 'react';
import Title from 'components/TitleSection';
import Product from 'components/Product';
import { Container, Items, ButtonArrow } from './styles';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const BestSellers = () => {
  return <Container>

    <Title {...{
      text: 'Mais Vendidos',
      color: '#000',
      borderColor: '#ccc',
      paddingLeft: '5%',
      width: '50%'
    }} />

    <Items>
      <ButtonArrow>
        <AiOutlineLeft />
      </ButtonArrow>
      {[
        {
          productName: 'Cafeteira Mondial',
          stars: 3,
          imageUrl: 'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=898725100',
          listPrice: 190,
          price: 110,
          installments: [{ quantity: 1, value: 200 }]
        },
        {
          productName: 'Sapato Anatômico',
          stars: 5,
          imageUrl: 'https://anatomicgel.vteximg.com.br/arquivos/ids/209761-650-650/https---s3-sa-east-1.amazonaws.com-softvar-MelhorDoSapato-70-img_original-sapato-anatomicgel-7810-floater-preto-01.jpg?v=637588628377330000',
          listPrice: 366,
          price: 210,
          installments: [{ quantity: 1, value: 200 }]
        },
        {
          productName: 'Carregador Iphone',
          stars: 4,
          imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmNX4Yu86aOwqHkKI3udY5BFhMecm1EaGL93hwAxQTY--PuGRaOZQxJfvn9V1daa2338ZnYDThZu7FbI96mwdT4F8s4bCNBI6L_0XiXiyRiv2asdQItilZ-A&usqp=CAE',
          listPrice: 250,
          price: 130,
          installments: [{ quantity: 1, value: 200 }]
        },
        {
          productName: 'Batedeira Mondial',
          stars: 5,
          imageUrl: 'https://a-static.mlcdn.com.br/618x463/batedeira-mondial-vermelha-400w-premium-bella-massa-b-29-04-velocidades/magazineluiza/021244700/1428e499ab6ba6ee2d66ec026efb756e.jpg',
          listPrice: 640,
          price: 320,
          installments: [{ quantity: 1, value: 200 }]
        },
        {
          productName: 'Bolsa Dafiti',
          stars: 3,
          imageUrl: 'https://t-static.dafiti.com.br/lYYViTpdseXy7dITDbd8x0q76_I=/fit-in/430x623/static.dafiti.com.br/p/ana-pessoni-bolsa-feminina-ana-pessoni-quadrada-marfim.-9500-3808527-1-zoom.jpg',
          listPrice: 670,
          price: 480,
          installments: [{ quantity: 1, value: 200 }]
        }
      ].map((product) => <Product {...product} />)}
      <ButtonArrow>
        <AiOutlineRight />
      </ButtonArrow>
    </Items>

  </Container>;
}

export default BestSellers;