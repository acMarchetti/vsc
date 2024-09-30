/*function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}
async function ottieniDati() {
  console.log(await caricamentoDati());
}

ottieniDati();

function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {
  console.log(await caricaModulo("A"));
  console.log(await caricaModulo("B"));
  console.log(await caricaModulo("C"));
  console.log("Veicolo spaziale pronto per il lancio!");
}
lanciaVeicoloSpaziale();*/

function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

async function lanciaVeicoloSpaziale() {
  try {
    console.log(await caricaModulo("A"));
    console.log(await caricaModulo("B"));
    console.log(await caricaModulo("C"));
    console.log("Veicolo spaziale pronto per il lancio!");
  } catch {
    console.log(
      "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."
    );
  }
}
lanciaVeicoloSpaziale();
