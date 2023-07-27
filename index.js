const aleatorMessage = () =>{
    let msgs = ['Bonjour', 'Vous allez bien', 'je suis disponible', 'Pour le rendez-vous'];

    let msg = msgs[Math.floor(Math.random() * msgs.length)];

    return msg

}
