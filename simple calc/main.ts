
const btn = document.querySelectorAll<HTMLButtonElement>(".btn");
const inp = document.querySelector<HTMLInputElement>(".calc_inp");

function btnFunc(value: string): void {
    inp.value += value
}
function addFunc(): void {
    inp.value = eval(inp.value)
}
function delFunc(): void {
    inp.value = inp.value.toString().slice(0, -1)
}
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        let text: string = (e.target as HTMLButtonElement).textContent || ''
        try {
            switch (text) {
                case "=":
                    return addFunc()
                case "C":
                    return inp.value = ''
                case "del":
                    return delFunc()
                default:
                    return btnFunc(text)
            }
        } catch (error) {
            return inp.value = "Nan"
        }
    })
}