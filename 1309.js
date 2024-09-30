function getTitolo() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("nuovo titolo");
    }, 2000);
  });
}

async function modificaTitolo() {
  try {
    let titolo = await getTitolo();
    const h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = `<i>${titolo}<i>`;
    h1.style.fontWeight = 700;
  } catch (error) {
    console.error(error);
  }
}
modificaTitolo();
