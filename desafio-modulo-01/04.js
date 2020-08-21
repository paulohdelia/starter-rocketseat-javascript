function experiencia(anos) {
  if (anos <= 1) return 'Iniciante';
  if (anos <= 3) return 'Intermediário';
  if (anos <= 6) return 'Avançado';
  if (anos >= 7) return 'Jedi Master';
}
var anosEstudo = 5;
console.log(experiencia(anosEstudo));
 // De 0-1 ano: Iniciante
 // De 1-3 anos: Intermediário
 // De 3-6 anos: Avançado
 // De 7 acima: Jedi Master