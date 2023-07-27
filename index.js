
function aleatorMessage() {
  let msgs = ['Bélier (21 mars - 20 avril)', 'Taureau (21 avril - 21 mai) ', 'Gémeaux (22 mai - 21 juin)',
    'Cancer (22 juin - 22 juillet)', ' Lion (23 juillet - 22 août)', ' Vierge (23 août - 22 septembre)',
    'Balance (23 septembre - 22 octobre)', 'Scorpion (23 octobre - 22 novembre)'];

  let msg = msgs[Math.floor(Math.random() * msgs.length)];

  return msg;

}

