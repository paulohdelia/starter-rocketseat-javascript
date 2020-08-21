var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function formatEndereco(endereco) {
  const { rua, numero, bairro, cidade, uf } = endereco;

  return `O usuário more em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com nº ${numero}`
}

console.log(formatEndereco(endereco));