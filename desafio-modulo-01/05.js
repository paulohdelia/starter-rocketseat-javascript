var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function formatUsuarios(usuarios) {
  let formattedUsuarios = '';

  for (usuario of usuarios) {
    const { nome, habilidades } = usuario;
    const formattedHabilidades = habilidades.join(', ')
    formattedUsuarios += `O ${nome} possui as habilidades: ${formattedHabilidades} \n`
  }

  return formattedUsuarios;
}

console.log(formatUsuarios(usuarios));