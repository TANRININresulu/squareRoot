/*
10                          ül = 10, al = 0
25 > 10   :   5 -> 25       ül = 5, al = 0
6.25 < 10 : 2.5 -> 6.25     ül = 10, al = k/2
*/

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

console.log(karekök(10));
console.log(karekök(9));
console.log(karekök(361));