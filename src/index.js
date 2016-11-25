hello();

async function hello() {
    const hey = await get_greeting();
    console.log(hey);
}

async function get_greeting() {
  await wait(500);
  return 'hey';
}

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}
