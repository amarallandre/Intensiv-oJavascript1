export function ItemCardapio(prop) {
  return <div className="container-item-cardapio">
    <div>
      <h2>{prop.nome}</h2>
      <p>{prop.preco}</p>
      <p>{prop.descricao}</p>
    </div>
    <img src={prop.imagem} alt="" />
  </div>

}