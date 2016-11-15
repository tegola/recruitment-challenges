# Conio Coding Challenge
Crediamo che il codice valga più di mille parole. Per questo motivo abbiamo deciso di sostituire la classica lettera di pesentazione con una veloce coding challenge, studiata per non durare più di **due ore**.

## Scenario
Conio rappresenta in modo fisico il portafoglio bitcoin, simulando un "salvadanaio" (visibile sul [nostro sito](https://www.conioo.com)). L'obiettivo dell'esercizio è di scrivere un algoritmo in grado, nel modo più efficente possibile, di generare l'elenco di azioni necessarie a popolare ed aggiornare un portafoglio.

![Wallet update](sample.png "Wallet update")

A disposizione, per partire, hai un json che definisce il taglio delle monete che andranno usate e il valore dei portafogli che devi generare.
```json
{
	"coinsValue": [
		100,
		10,
		0.5,
		1,
		5,
		0.1
	],
	"originalWallet": 27.5,
	"finalWallet": 9
}
```

dovrai scrivere una funzione in grado di generare un array di azioni ("aggiungi", "rimuovi") che verranno processate per aggiornare la vista.

**Da 0 a 27.5**
```json
{
	"actions": [
      {
        "action": "add",
        "value": 10
      },
      {
        "action": "add",
        "value": 10
      },
      {
        "action": "add",
        "value": 5
      },
      {
        "action": "add",
        "value": 1
      },
      {
        "action": "add",
        "value": 1
      },
      {
        "action": "add",
        "value": 0.5
      }
    ]
}
```

**Da 27.5 a 9**
```json
{
	"actions": [
      {
        "action": "remove",
        "value": 10
      },
      {
        "action": "remove",
        "value": 10
      },
      {
        "action": "add",
        "value": 1
      },
      {
        "action": "add",
        "value": 1
      },
      {
        "action": "remove",
        "value": 0.5
      }
    ]
}
```

## Regole
- Utilizza il linguaggio richiesto nella job opening (*esempio: Java per Android Engineer, Python per Backend Engineer*).
- Scrivi sia il codice che i test.
- Se hai delle note sull'esercizio stesso, non esitare a scriverle.
