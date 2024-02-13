# Square Root Solver

```js
function karekök (sayı)
{
    var karekökü, karesi;
    var altLimit = 0, üstLimit = sayı;

    karekökü = (altLimit + üstLimit) / 2;
    var tekrar = 0;

    var sonDeğer;
    do
    {
        sonDeğer = karekökü;
        tekrar++;

        karesi = karekökü * karekökü;

        if (karesi > sayı)
            üstLimit = karekökü;
        else if (karesi < sayı)
            altLimit = karekökü;

        karekökü = (altLimit + üstLimit) / 2;

        // console.log(karekökü);
    }
    while (karesi != sayı && tekrar < 190 && sonDeğer != karekökü);

    return karekökü;
}
```
for runnig it:
```
bun run karekök.js
```

for bun: https://bun.sh/docs/installation

![Ekran Resmi 2023-11-19 14 24 47](https://github.com/aWordFromGOD/squareRoot/assets/8404792/bfb49034-fe1d-425a-a34c-cebc5038c58f)
