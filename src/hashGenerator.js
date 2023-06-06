function generateRandomHash(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let hash = '';

  for (let i = 0; i < length; i++) {
    hash += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return hash;
}

export default generateRandomHash