# TYPESCRIPT

### KIRISH

    TypeScript JavaScript ustiga qurilgan bo`lib qoshimcha imkoniyatlarga ega.

    Microsoft tomonidan ishlab chiqilgan ochiq manbali dasturlash tili (Open-source programming language)

    JavaScript typelarni aniqlaydi lekin o`zgaruvchilarga bu typelarni berishni hojati yoq.
    TypeScriptda esa typelarni beriladi va unga boshqa typelarni o`zlashtirilsa dasturchiga ogohlanturuvchi xabar beradi.
    JavaScriptda data typelar mavjud edi. TypeScriptda ham bor bolib ularni o'zgaruvchilarga type sifatida berib boriladai(ex. let a:number=1)

#### Data Typelar TypeScriptda

    - boolean;
    - string;
    - number;
    - any => {bu type o'zgaruvchiga berilganda bu o'zgaruvchiga istalgan qiymatni o'zlashtirish mumkin bo'ladi};
    - null;
    - undefined;
    - object;
    - Array<number> yoki number[];
    - Tuple => {array ichidagi ozgaruvchilarga type berish (ex. let data: [number, string, boolean] = [1, 'salom', false])};
    - enum => {o'zgarmas qiymatlarni beradi};
    - unknown => {boshida qiymat no`malum boladi, keyin istalgan qiymatni o'zlashtirish mumkin. Lekin boshqa biron ozgaruvchiga bu turni o'zlashtirib bo'lmaydi};
    - union => {o'zgaruvchiga bir nechta typeni o'zlashtirish imkoni mavjud.(ex. let a: string | number)};


    Object malumot turi ishlatish usuli quyidagicha:
    type(or interface) Person {
        name: string;
        id: number;
    }
    const person: Person = {
        name: "John",
        id: 1,
    }
    Avval object ichidagi o'zgaruvchilarga type berib olinadi va keyin qiymat beriladi.

#### Function

    Funksiyalarning parametrlariga ham type beriladi. Funksiya qiymat qaytarmagan bo'lsa void typedan foydalaniladi;

    ex.
    function deleteUser(id: number): void {
        //......
    }
